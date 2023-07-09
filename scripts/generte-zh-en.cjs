const {
    readFileSync,
    writeFileSync,
    existsSync,
    mkdirSync,
    readdirSync,
    statSync,
} = require("node:fs");
const { join, sep } = require("node:path");
const { getFirstLine, toCamelCase, downloadFile } = require("./utils.cjs");
const prettier = require("prettier");
const { marked } = require("marked");
const { gfmHeadingId } = require("marked-gfm-heading-id");
const { rimrafSync } = require("rimraf");
const simpleGit = require("simple-git");
const pkg = require("../package.json");

marked.use(gfmHeadingId({ prefix: "" }));

const zhPattern = /^# 你不知道的 JavaScript/;
const tempDir = join(process.cwd(), ".temp");
const originDir = join(
    tempDir,
    pkg.repository.url.replace(".git", "").split("/").pop(),
);

function markdown2Array(markdown) {
    return markdown.split(/\n\n/).map((item) => item);
}

async function main() {
    rimrafSync(tempDir);
    mkdirSync(tempDir);
    const git = simpleGit({
        baseDir: tempDir,
    });
    await git.clone(pkg.repository.url, ["-b", "2nd-ed", "--depth", "1"]);
    rimrafSync(join(originDir, ".git"));
    // 已翻译的书籍目录
    const translatedBookDirs = await [
        "es-next-beyond",
        "get-started",
        "objects-classes",
        "scope-closures",
        "sync-async",
        "types-grammar",
    ].reduce(async (acc, cur) => {
        const arr = await acc;
        const currentPath = join(process.cwd(), cur);
        const isTranslated = zhPattern.test(
            await getFirstLine(join(currentPath, "README.md")),
        );
        if (isTranslated) {
            arr.push(currentPath);
        }
        return arr;
    }, []);

    for (const dir of translatedBookDirs) {
        const bookName = dir.split(sep).pop();
        const currentOriginDir = dir.replace(process.cwd(), originDir);
        const files = readdirSync(dir).filter((item) =>
            statSync(join(dir, item)).isFile(),
        );

        for (const file of files) {
            const zhContent = readFileSync(join(dir, file), {
                encoding: "utf-8",
            });
            const zhArr = markdown2Array(
                await prettier.format(zhContent, { parser: "markdown" }),
            );
            const originArr = markdown2Array(
                await prettier.format(
                    readFileSync(join(currentOriginDir, file), {
                        encoding: "utf-8",
                    }),
                    { parser: "markdown" },
                ),
            );
            if (zhArr.length !== originArr.length) {
                const errorFile = join(currentOriginDir, `error-${file}`);
                const max = Math.max(zhArr.length, originArr.length);

                writeFileSync(
                    errorFile,
                    Array.from({ length: max }, (_, idx) => {
                        return (
                            (zhArr[idx] ?? "") + "\n\n" + (originArr[idx] ?? "")
                        );
                    }).join("\n\n"),
                );
                console.error(
                    `源文件与翻译文件行数不一致 ${zhArr.length}/${originArr.length} : ${errorFile}`,
                );
                continue;
            }
            const originDialogs = await prettier.format(
                originArr.reduce((acc, cur, idx) => {
                    const id = `${bookName}-${file}-${idx}`;
                    const variable = toCamelCase(id).replace(".", "");
                    return (acc += `<dialog @click.outside="${variable} = false" id="${id}">${marked.parse(
                        cur,
                        { mangle: false },
                    )}</dialog>`);
                }, ""),
                { parser: "html" },
            );

            writeFileSync(
                join(currentOriginDir, `origin-zh-CN-${file}`),
                await prettier.format(zhContent + originDialogs, {
                    parser: "markdown",
                }),
                "utf-8",
            );
        }
    }
}
main();
