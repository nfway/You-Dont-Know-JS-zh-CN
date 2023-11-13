import footnote from "markdown-it-footnote";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "你并不了解 JavaScript（社区版）",
  description:
    "你并不了解 JavaScript,你不知道的 JavaScript,第二版,中文版,社区版,免费版",
  lang: "zh-CN",
  srcExclude: [
    "es-next-beyond/**/*",
    "objects-classes/**/*",
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
          { text: "第三章：寻根究底", link: "/get-started/ch3" },
          { text: "第四章：大局观", link: "/get-started/ch4" },
          { text: "附录 A：进一步的探索", link: "/get-started/apA" },
          {
            text: "附录 B：温故而知新",
            link: "/get-started/apB",
          },
        ],
      },
      {
        text: "作用域与闭包",
        link: "/scope-closures/README",
        items: [
          {
            text: "前言 (由 Sarah Drasner 撰写)",
            link: "/scope-closures/foreword",
          },
          { text: "序", link: "/preface" },
          {
            text: "第一章：什么是作用域？",
            link: "/scope-closures/ch1",
          },
          { text: "第二章：图解作用域词法", link: "/scope-closures/ch2" },
          { text: "第三章：作用域链", link: "/scope-closures/ch3" },
          { text: "第四章：全局作用域", link: "/scope-closures/ch4" },
          {
            text: "第五章：（并不）神秘的变量生命周期",
            link: "/scope-closures/ch5",
          },
          { text: "第六章：限制作用域的过度暴露", link: "/scope-closures/ch6" },
          { text: "第七章：闭包的使用", link: "/scope-closures/ch7" },
          { text: "第八章：模块化模式", link: "/scope-closures/ch8" },
          {
            text: "附录 A：欲穷千里目，更上一层楼",
            link: "/scope-closures/apA",
          },
          {
            text: "附录 B：练习",
            link: "/scope-closures/apB",
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
    editLink: {
      pattern:
        "https://github.com/liunnn1994/You-Dont-Know-JS-zh-CN/edit/2ed-zh-CN/:path",
      text: "在 GitHub 上编辑",
    },
    footer: {
      message: `此作品是根据<a target="_blank" style="color: var(--vp-c-brand)" href="https://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh">署名-非商业性使用-禁止演绎 4.0 国际</a>授权。`,
      copyright: `© 2019-2022 <a target="_blank" style="color: var(--vp-c-brand)" href="https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed#license--copyright">Kyle Simpson 版权所有</a>。`,
    },
  },
  markdown: {
    config: (md) => {
      md.use(footnote);
    },
  },
});
