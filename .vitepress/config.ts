import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "你并不了解 JavaScript（社区版）",
    description: "你并不了解 JavaScript",
    lang: "zh-CN",
    srcExclude: [
        "es-next-beyond/**/*",
        "objects-classes/**/*",
        "scope-closures/**/*",
        "sync-async/**/*",
        "types-grammar/**/*",
    ],
    ignoreDeadLinks: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: "首页", link: "/" },
            {
                text: "赞助",
                link: "https://github.com/liunnn1994/You-Dont-Know-JS-zh-CN#%E8%B5%9E%E5%8A%A9",
            },
        ],

        sidebar: [
            {
                text: "入门",
                link: "/get-started/README",
                items: [
                    {
                        text: "前言 (由 Brian Holt 撰写)",
                        link: "/get-started/foreword",
                    },
                    { text: "序", link: "/preface" },
                    {
                        text: "第一章：什么是 JavaScript？",
                        link: "/get-started/ch1",
                    },
                    { text: "第二章：JS 概观", link: "/get-started/ch2" },
                    { text: "第三章：JS 寻根究底", link: "/get-started/ch3" },
                    { text: "第四章：大局观", link: "/get-started/ch4" },
                    { text: "附录 A：进一步的探索", link: "/get-started/apA" },
                    {
                        text: "附录 B：温故而知新",
                        link: "/get-started/apB",
                    },
                ],
            },
        ],

        socialLinks: [
            {
                icon: "github",
                link: "https://github.com/liunnn1994/You-Dont-Know-JS-zh-CN",
            },
        ],
        footer: {
            message: `此作品是根据<a target="_blank" style="color: var(--vp-c-brand)" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">署名-非商业性使用-禁止演绎 4.0 国际</a>授权。`,
            copyright: `© 2019-2022 <a target="_blank" style="color: var(--vp-c-brand)" href="https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed#license--copyright">Kyle Simpson 版权所有</a>。`,
        },
    },
});
