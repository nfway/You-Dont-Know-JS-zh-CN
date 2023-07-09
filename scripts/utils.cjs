const { createReadStream } = require("node:fs");
const { createInterface } = require("node:readline");

async function getFirstLine(filePath) {
    const readable = createReadStream(filePath, { encoding: "utf-8" });
    const reader = createInterface({ input: readable });
    const line = await new Promise((resolve) => {
        reader.on("line", (line) => {
            reader.close();
            resolve(line);
        });
    });
    readable.close();
    return line;
}

function toCamelCase(str) {
    return str.replace(/-(.)/g, function (all, i) {
        return i.toUpperCase();
    });
}

module.exports = { getFirstLine, toCamelCase };
