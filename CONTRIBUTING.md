# You-Dont-Know-JS-zh-CN 项目贡献指南

如果你愿意为 [You-Dont-Know-JS-zh-CN](https://github.com/liunnn1994/You-Dont-Know-JS-zh-CN) 项目贡献代码或提供建议，请阅读以下内容。

如果你**不熟悉**开源项目，请参阅[开源项目礼节](https://developer.mozilla.org/zh-CN/docs/MDN/Community/Open_source_etiquette)。

## 分支

-   main: 项目的主分支，用于发布、打包等，不会合并至[原始项目](https://github.com/getify/You-Dont-Know-JS/tree/2ed-zh-CN)，除非你明确知道你在做什么，否则**不要**给此分支提交 PR。
-   2ed-zh-CN: 用于翻译的分支，此分支会合并到[原始项目](https://github.com/getify/You-Dont-Know-JS/tree/2ed-zh-CN)中，所有汉化相关的内容请提交到此分支，**不要**提交任何其它分支的内容。
-   2nd-ed: [原始项目](https://github.com/getify/You-Dont-Know-JS/tree/2ed-zh-CN)的 fork，此分支与[原始项目](https://github.com/getify/You-Dont-Know-JS/tree/2ed-zh-CN)保持一致，**不要**在此分支进行任何修改。

## Issue 规范

-   issue 可用于提出问题、讨论等任何与项目有关的内容，但请遵守[开源项目礼节](https://developer.mozilla.org/zh-CN/docs/MDN/Community/Open_source_etiquette)。

-   在提交 issue 之前，请搜索相关内容是否已被提出。

-   如果有必要，可以提供截图或录屏，这能够更直观地重现问题。

## Pull Request 规范

> 为了避免不必要的<ins title="原作者不懂中文，并不会处理汉化相关 PR"><i>噪声通知</i></ins>，强烈建议所有 PR 均指定给此仓库**而非**[原始项目](https://github.com/getify/You-Dont-Know-JS/tree/2ed-zh-CN)，我回定期合并回[原始项目](https://github.com/getify/You-Dont-Know-JS/tree/2ed-zh-CN)。

-   请先 fork 一份到自己的项目下并在 `2ed-zh-CN` 分支下工作！
-   commit 信息最好使用英文并且简单明了的描述做了什么，因为提交最终会合并到[原始项目](https://github.com/getify/You-Dont-Know-JS/tree/2ed-zh-CN)中。

-   执行 `npm run build` 后可以正确打包文件 **(仅 main 分支)**。
-   执行 `npx prettier --no-config --write <你的文件路径>` 保持 markdown 格式统一。
-   提交 PR 前请 squash，确保 commit 记录的整洁。
-   确保 PR 是提交到 `2ed-zh-CN` 分支，而不是 `main` 分支。
-   如果是修复 bug，请在 PR 中给出描述信息或关联 issue。
-   合并代码需要至少一人参与 review 并由维护人员 approve 后即可合并。

## 最后

无论你的 PR 提交给本项目还是[原始项目](https://github.com/getify/You-Dont-Know-JS/tree/2ed-zh-CN)，请同时遵守原版[贡献指南](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/CONTRIBUTING.md)。

如果你的 PR 目标是[原始项目](https://github.com/getify/You-Dont-Know-JS/tree/2ed-zh-CN)，我会不定时的去 review，如果长时间未响应请提醒我 (@liunnn1994)。
