# 你并不了解 JavaScript：入门 - 第二版

# 第二章：JS 概观

学习 JS 的最好方法就是开始写 JS。

要做到这一点，你需要知道这门语言是如何工作的，而这正是我们在这里要重点讨论的。即使你以前用过其他语言编程，也要慢慢适应 JS，并确保练习每一块。

这一章并不是对 JS 语言的每一个语法的详尽参考。它也不打算成为一个完整的「JS 入门」入门书。

相反，我们只是要深入该语言的一些主要主题领域。我们的目标是对它有一个更好的*感觉*，这样我们就可以更有信心地继续编写我们自己的程序。当你读完本书的其余部分，以及本系列的其余部分时，我们将陆续更详细地重温这些主题。

请不要指望这一章能快速阅读。它很长，有大量的细节需要咀嚼。请您慢慢阅读。

| 贴士：                                                                                                                                                                                                                                                    |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 如果你还在熟悉 JS，我建议你保留足够的额外时间来学习这一章。对每一小节进行思考，并对该主题探索一段时间。看一下现有的 JS 程序，将你在其中看到的东西与这里的代码和解释（以及意见！）进行比较。有了对 JS 本质的坚实基础，你会从本书和系列的其他部分学到更多。 |

## 每个文件都是一个程序

你所使用的几乎每一个网站（网络应用程序）都是由许多不同的 JS 文件（通常以 .js 文件为扩展名）组成的。把整个事物（应用程序）看作一个程序是很诱人的。但 JS 的看法是不同的。

在 JS 中，每个独立的文件都是它自己独立的程序。

主要是围绕错误处理来理解。由于 JS 将文件视为程序，一个文件可能会失败（在解析/编译或执行过程中），这不一定会阻止下一个文件的处理。很明显，如果你的应用程序依赖于五个 .js 文件，而其中一个文件失败了，整个应用程序可能最多只能部分运行。重要的是，要确保每个文件都能正常工作，并且在任何可能的作用域内，尽可能优雅地处理其他文件的故障。

把独立的 .js 文件视为独立的 JS 程序，可能会让你感到惊讶。从你使用一个应用程序的角度来看，它肯定是一个整体。这是因为应用程序的执行允许这些单独的*程序*合作，并作为一个程序执行。

| 注意：                                                                                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------- |
| 许多项目使用构建过程工具，最终将项目中的独立文件合并为一个文件，并传递到网页上。当这种情况发生时，JS 将这个单一的组合文件视为整个程序。 |

多个独立的 .js 文件作为一个程序的唯一方式是通过「全局作用域」共享它们的状态（以及对其公共方法的访问）。它们在这个全局作用域命名空间中混合在一起，所以在运行时它们作为一个整体运行。

从 ES6 开始，除了典型的独立 JS 格式外，JS 还支持模块导入。模块也是基于文件的。如果一个文件通过模块加载机制，如 `import` 语句或 `<script type=module>` 标签被加载，其所有代码被视为一个单一的模块。

尽管你通常不会想到一个模块作为一个状态和公开暴露的方法的集合，以对该状态进行操作并作为一个独立的程序，但事实上 JS 仍然单独对待每个模块。类似于「全局作用域」允许独立的文件在运行时混合在一起，将一个模块导入另一个模块允许它们之间在运行时相互操作。

无论文件使用哪种代码组织模式（和加载机制：独立的或模块的），你仍然应该把每个文件看作是它自己的（小的）程序，然后它可以与其他（小的）程序合作来执行你整个应用程序的功能。

## 值

程序中最基本的信息单位是一个值。值是数据。它们是程序维护状态的方式。在 JS 中，值有两种形式：**原始的**和**对象（Object）的**。

在程序中使用*字面量*嵌入值：

```js
greeting("My name is Kyle.");
```

在这个程序中，值 `"My name is Kyle."` 是一个原始的字符串字面量；字符串是有序的字符集合，通常用来表示单词和句子。

我使用了双引号 `"` 字符来*定义*字符串值。但我也可以使用单引号 `'` 字符。选择哪个引号字符完全是风格问题。重要的是，为了代码的可读性和可维护性，要选择一个并在整个程序中一致地使用它。

定义字符串的另一个选择是使用反单引号 `` ` `` 字符。然而，这种选择不仅仅是风格上的，也有行为上的区别。请假设以下代码：

```js
console.log("My name is ${ firstName }.");
// My name is ${ firstName }.

console.log("My name is ${ firstName }.");
// My name is ${ firstName }.

console.log(`My name is ${firstName}.`);
// My name is Kyle.
```

假设这个程序已经定义了一个变量 `firstName`，其值为 `"Kyle"`，然后 `` ` `` 定义的字符串将变量表达式（用 `${ .. }`表示）解析为其当前值。这被称为**插值**。

可以在不包括插值表达式的情况下使用反单引号 `` ` `` 定义字符串，但这违背了该替代字符串语法的全部目的：

```js
console.log(`Am I confusing you by omitting interpolation?`);
// Am I confusing you by omitting interpolation?
```

更好的方法是对字符串使用 `"` 或 `'` （再次声明，选择一种并坚持下去！），*除非你需要*插值；只对包括插值表达式的字符串保留 `` ` `` 。

除了字符串之外，JS 程序经常包含其他原始的字面量值，如布尔值和数字：

```js
while (false) {
    console.log(3.141592);
}
```

`while` 代表一种循环类型，一种重复操作的方式，*同时*其条件应为 true。

在这种情况下，循环将永远不会运行（也不会打印任何东西），因为我们使用了 `false` 布尔值作为循环条件。 `true` 会导致一个永远持续下去的循环，所以要小心！

如你所知，数字 `3.141592` 是数学中 PI 的前六位的近似值。然而，你通常不会嵌入这样一个值，而是使用预定义的 `Math.PI` 值来实现这一目的。数字的另一个变体是 `bigint`（大整数）原始类型，它被用来存储任意大的数字。

数字在程序中最常被用来计算步骤，如循环迭代，以及访问数字位置的信息（即一个数组索引）。我们稍后将介绍数组/对象，但作为一个例子，如果有一个名为 `names` 的数组，我们可以像这样访问其第二位置的元素：

```js
console.log(`My name is ${names[1]}.`);
// My name is Kyle.
```

我们用 `1` 表示第二个位置的元素，而不是 `2`，因为像大多数编程语言一样，JS 数组的索引是基于 0 的（`0` 是第一个位置）。

除了字符串、数字和布尔以外，JS 程序中还有两个原始的值是 `null` 和 `undefined`。虽然它们之间存在差异（有些是历史性的，有些是当代的），但在大多数情况下，这两个值都是为了表示一个值是 _emptiness_（空或不存在）的。

许多开发者倾向于以这种方式一致地对待它们，也就是说，假设这些值是无法区分的。如果注意的话，这通常是可能的。然而，最安全和最好的做法是只使用 `undefined` 作为单一的空值，尽管 `null` 看起来很有吸引力，因为它的键入时间更短！

```js
while (value != undefined) {
    console.log("Still got something!");
}
```

最后要注意的原始值 Symbol 是一个特殊用途的值，表现为一个隐藏的不可猜测的值。Symbol 几乎只作为对象上的特殊键使用：

```js
hitchhikersGuide[Symbol("meaning of life")];
// 42
```

在一般的 JS 程序中，你不会经常遇到直接使用 Symbol 的情况。它们大多用于低级别的代码中，如库和框架中。

### 数组和对象

除了原始值，JS 中的另一种值类型是对象。

如前所述，数组是一种特殊类型的对象，它由一个有序的、有数字索引的数据列表组成：

```js
var names = ["Frank", "Kyle", "Peter", "Susan"];

names.length;
// 4

names[0];
// Frank

names[1];
// Kyle
```

JS 的数组可以保存任何类型的值，无论是原始的还是对象的（包括其他数组）。正如我们将在第三章末尾看到的，即使是函数也是可以在数组或对象中作为值。

| 注意：                                                                       |
| :--------------------------------------------------------------------------- |
| 函数像数组一样，是一种特殊的（又称子类型）对象。我们稍后会更详细地介绍函数。 |

对象是更像是：一个无序的、有键的任何各种值的集合。换句话说，你通过一个字符串位置名称（又称「键」或「属性」）来访问元素，而不是通过其数字位置（如数组）。比如说：

```js
var me = {
    first: "Kyle",
    last: "Simpson",
    age: 39,
    specialties: ["JS", "Table Tennis"],
};

console.log(`My name is ${me.first}.`);
```

这里，`me` 代表一个对象，`first` 代表该对象中信息的位置名称（值集合）。另一个通过属性/键访问对象中的信息的语法选项是使用方括号`[ ]`，例如 `me["first"]`。

### 判断值的类型

可以使用 `typeof` 操作符进行判断，如果是原始值，返回它的内置类型，否则就是 `"object"`：

```js
typeof 42; // "number"
typeof "abc"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" -- 哎呀，bug!
typeof { a: 1 }; // "object"
typeof [1, 2, 3]; // "object"
typeof function hello() {}; // "function"
```

| 警告：                                                                                                                                         |
| :--------------------------------------------------------------------------------------------------------------------------------------------- |
| 不幸的是 `typeof null` 返回 `"object"` 而不是预期的 `"null"`。另外，`typeof` 对函数返回特定的 `"function"`，但对数组则不返回预期的 `"array"`。 |

从一个值类型转换到另一个，例如从字符串到数字，在 JS 中被称为「强制转换」。我们将在本章后面更详细地介绍这个问题。

原始值和对象值在被分配或传递时的行为是不同的。我们将在附录 A，「值与引用」中介绍这些细节。

## 声明和使用变量

要明确说明的是，在上一节中可能并不明显：在 JS 程序中，值既可以作为字面量出现（正如前面的许多例子所说明的那样），也可以放在变量中；把变量看作只是值的容器。

变量必须被声明（创建）才能被使用。有各种语法形式来声明变量（又称「标识符」），而且每种形式都有不同的隐含行为。

例如，`var` 语句：

```js
var myName = "Kyle";
var age;
```

`var` 关键字声明了一个变量，在程序的该部分使用，并可选择允许初始赋值。

另一个类似的关键字是 `let`：

```js
let myName = "Kyle";
let age;
```

`let` 关键字与 `var` 有一些区别，最明显的是 `let` 比 `var` 允许对变量的访问更加有限。这被称为「块级作用域」，与普通作用域或函数作用域相反。

假设以下代码：

```js
var adult = true;

if (adult) {
    var myName = "Kyle";
    let age = 39;
    console.log("Shhh, this is a secret!");
}

console.log(myName);
// Kyle

console.log(age);
// Error!
```

试图在 `if` 语句之外访问 `age` 会导致错误，因为 `age` 在 `if` 中是块作用域，而 `myName` 不是。

块级作用域对于限制变量声明在我们的程序中的广泛程度非常有用，这有助于防止其名称的意外重叠。

但是 `var` 仍然是有用的，因为它传达的意思是「这个变量将被更广泛的作用域（整个函数）所用到」。这两种声明形式在程序的任何部分都是合适的，取决于具体情况。

| 注意：                                                                                                                                                                                                                                                                                                   |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 经常有人建议避免使用 `var` 而使用 `let`（或 `const`！），这通常是因为人们对 `var` 的作用域行为自 JS 诞生以来的运作方式感到困惑。我认为这是个限制性过强的建议，最终也是无益的。这是在假设你无法学习和正确使用一个与其他功能相结合的功能。我相信你*可以也应该*学习任何可用的功能，并在适当的地方使用它们！ |

第三种声明形式是 `const`。它和 `let` 一样，但有一个额外的限制，即在声明的时候必须给它一个值，以后不能重新分配一个不同的值。

假设以下代码：

```js
const myBirthday = true;
let age = 39;

if (myBirthday) {
    age = age + 1; // OK!
    myBirthday = false; // Error!
}
```

`myBirthday` 常量不允许被重新分配。

`const` 声明的变量不是「不可改变的」，它们只是不能被重新赋值。在对象值中使用 `const` 是不明智的，因为即使变量不能被重新赋值，这些值仍然可以被改变。这导致了潜在的混乱，所以我认为避免以下情况是明智的：

```js
const actors = ["Morgan Freeman", "Jennifer Aniston"];

actors[2] = "Tom Cruise"; // OK :(
actors = []; // Error!
```

`const` 的最佳语义使用是当你有一个简单的原始值，你想给它一个有用的名字，例如用 `myBirthday` 代替 `true`。这使得程序更容易阅读。

| 贴士：                                                                                                                            |
| :-------------------------------------------------------------------------------------------------------------------------------- |
| 如果你坚持只对原始值使用 `const`，你就可以避免任何重新赋值（不允许）与突变（允许）的混淆！这是使用 `const` 的最安全和最好的方法。 |

除了 `var` / `let` / `const`，还有其他语法形式，可以在不同作用域内声明标识符（变量）。例如：

```js
function hello(myName) {
    console.log(`Hello, ${myName}.`);
}

hello("Kyle");
// Hello, Kyle.
```

标识符 `hello` 是在外层作用域中创建的，并且它也被自动关联，以便它引用该函数。但是命名参数 `myName` 是在函数内部创建的，因此只能在该函数的作用域内访问。`hello` 和 `myName` 通常表现为 `var` 声明的。

另一种声明变量的语法是 `catch` 语句：

```js
try {
    someError();
} catch (err) {
    console.log(err);
}
```

`err` 是一个块级作用域变量，只存在于 `catch` 语句中，就像它是用 `let` 声明一样。

## 函数

在编程中，「函数」这个词有各种各样的含义。例如，在函数式编程的世界里，「函数」有一个精确的数学定义，意味着要遵守一套严格的规则。

在 JS 中，我们应该认为「函数」具有另一个相关术语的更广泛的含义： 「过程」。一个过程是一个语句的集合，可以被调用一次或多次，可以提供一些输入，并可以反馈一个或多个输出。

从 JS 的早期开始，函数的定义看起来像：

```js
function awesomeFunction(coolThings) {
    // ..
    return amazingStuff;
}
```

这被称为函数声明，因为它本身是作为一个语句出现的，而不是作为另一个语句中的表达式。标识符 `awesomeFunction` 和函数值之间的关联发生在代码的编译阶段，在该代码被执行之前。

与函数声明语句相比，函数表达式也可以像这样定义和赋值：

```js
// let awesomeFunction = ..
// const awesomeFunction = ..
var awesomeFunction = function (coolThings) {
    // ..
    return amazingStuff;
};
```

这个函数是一个表达式，被分配给变量 `awesomeFunction`。与函数声明的形式不同，函数表达式在运行时直到该语句才与它的标识符相关。

需要特别注意的是，在 JS 中，函数是可以被分配（如本片段所示）和传递的值。事实上，JS 的函数是对象值类型的一种特殊类型。并非所有的语言都将函数视为值，但对于编程语言来说，支持函数式编程模式是至关重要的，就像 JS 那样。

JS 函数可以接收参数输入：

```js
function greeting(myName) {
    console.log(`Hello, ${myName}!`);
}

greeting("Kyle"); // Hello, Kyle!
```

在这个片段中，`myName` 被称为一个参数，它在函数中充当一个局部变量。函数可以被定义为接收任何数量的参数，从无到有，只要你认为合适。每个参数都被赋予你在调用的那个位置（这里是`"Kyle"`）传递的参数值。

函数也可以使用 `return` 关键字返回值：

```js
function greeting(myName) {
    return `Hello, ${myName}!`;
}

var msg = greeting("Kyle");

console.log(msg); // Hello, Kyle!
```

你只能 `return` 一个值，但如果你有更多的值要返回，你可以把它们打包成一个对象/数组。

由于函数是值，它们可以作为对象的属性被分配：

```js
var whatToSay = {
    greeting() {
        console.log("Hello!");
    },
    question() {
        console.log("What's your name?");
    },
    answer() {
        console.log("My name is Kyle.");
    },
};

whatToSay.greeting();
// Hello!
```

在这个片段中，三个函数 (`greeting()`, `question()`, 以及 `answer()`) 的引用被包含在 `whatToSay` 持有的对象中。每个函数都可以通过访问属性来调用，以获取函数的引用值。将这种在对象上定义函数的直接风格与本章后面讨论的更复杂的 `class` 语法进行比较。

JS 中的「函数」有许多不同的形式。我们在附录 A 「如此多的函数形式」中探讨这些变化。

## 比较

在程序中做决定需要比较数值以确定它们的身份和相互之间的关系。JS 有几种机制来实现值的比较，让我们来仔细看看它们。

### 相等......是的

JS 程序中最常见的比较是问：「这个 X 值与那个 Y 值是否*相同*？」 然而，「相同」对 JS 来说到底是什么意思？

由于人机工程学和历史的原因，其含义比明显的*完全相同*的那种匹配更为复杂。有时相等比较的目的是*精确*的匹配，但其他时候所需的比较则更广泛一些，允许*近似*或*可交换*的匹配。换句话说，我们必须意识到**相等**比较和**等价**比较之间的细微差别。

如果你花了任何时间使用和阅读 JS，你肯定见过所谓的「三等号」 `===` 运算符，也被称为「严格相等 (strict equality)」运算符。这似乎很直接，对吗？当然，"strict" 是指严格的意思，即狭义上的*精确*的意思。

遗憾的是这个说法并不是很*准确*。

是的，大多数 `===` 比较的值都符合这种*完全相同的*直觉。请考虑一些例子：

```js
3 === 3.0; // true
"yes" === "yes"; // true
null === null; // true
false === false; // true

42 === "42"; // false
"hello" === "Hello"; // false
true === 1; // false
0 === null; // false
"" === null; // false
null === undefined; // false
```

| 注意：                                                                                                                                                                                                                                                                                                                                                                     |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `===` 的比较的另一种描述方式是，「同时检查值和类型」。在我们到目前为止看过的几个例子中，比如 `42 === "42"`，两个值的*类型*（数字、字符串等）似乎是区分的因素。不过，还有更多的问题。**JS 中的所有**值比较都考虑了被比较的值的类型，而不仅仅是 `===` 操作符。具体来说，`===` 在它的比较中不允许任何类型的转换（又称「强制类型转换」），而其他 JS 的比较*允许*强制类型转换。 |

但 `===` 运算符确实有一些细微的差别，许多 JS 开发者忽略了这一事实，这对他们来说是不利的。`===` 运算符在两种特殊值的情况下会*说谎*： `NaN` 和 `-0`。

假设以下代码：

```js
NaN === NaN; // false
0 === -0; // true
```

在 `NaN` 的情况下，`===` 运算符*说谎*了，说 `NaN` 的出现不等于另一个 `NaN` 。在 `-0` 的情况下（是的，这是一个真实的、独特的值，你可以在你的程序中有意使用！），`===`运算符也*说谎*了，说它等于普通的 `0` 值。

由于这种比较的*谎言*可能是令人烦恼的，所以最好避免对它们使用 `===`。对于 `NaN` 的比较，使用 `Number.isNaN(..)` 方法，它不会*说谎*。对于 `-0` 的比较，使用 `Object.is(..)` 方法，它也不*说谎*。如果你愿意，`Object.is(..)` 也可以用于非*谎言*的 `NaN` 检查。幽默的是，你可以把 `Object.is(..)` 看作是「四等号」`====`，即真正严格的比较!

这些*谎言*有更深的历史和技术原因，但这并不能改变 `===` 实际上并不是*严格意义上的完全相等的*比较。

当我们对对象值（非原始值）进行比较时，故事变得更加复杂。

假设以下代码：

```js
[ 1, 2, 3 ] === [ 1, 2, 3 ];    // false
{ a: 42 } === { a: 42 }         // false
(x => x * 2) === (x => x * 2)   // false
```

这是怎么回事呢？

假设相等检查考虑了值的*性质*或内容，似乎是合理的；毕竟，`42 == 42` 考虑了实际的 `42` 值并进行比较。但是，当涉及到对象时，意识到内容的比较通常被称为「结构相等」。

JS 并没有将 `===` 定义为对象值的*结构相等*。相反，`===` 对对象值使用*身份相等*。

在 JS 中，所有对象的值都是通过引用持有的（见附录 A 中的「值与引用」），通过引用复制来分配和传递，**并且**根据我们当前的讨论，通过引用（身份）相等来进行比较。

假设以下代码：

```js
var x = [1, 2, 3];

// 赋值是通过引用复制，所以
// y 引用了与 x *相同的*数组，
// 而不是它的另一个拷贝。
var y = x;

y === x; // true
y === [1, 2, 3]; // false
x === [1, 2, 3]; // false
```

在这个片段中， `y === x` 是 true，因为两个变量都持有对同一个初始数组的引用。但是 `===[1,2,3]` 的比较都失败了，因为 `y` 和 `x` 分别与新的*不同的*数组 `[1,2,3]` 进行比较。在这个比较中，数组的结构和内容并不重要，只有**引用的标识符**。

JS 不提供对象值的结构相等比较机制，只提供引用身份比较。要进行结构相等比较，你需要自己实现。

但要注意，这比你想象的要复杂得多。例如，你如何确定两个函数引用是「结构上相等的」？即使是用字符串来比较它们的源代码文本，也不会考虑到闭合等问题。JS 不提供结构上的等价比较，因为要处理所有的情况几乎是难以做到的！

### 强制比较

强制意味着一种类型的值被转换为另一种类型中的相应表示（无论在何种程度上）。正如我们将在第四章讨论的那样，强制类型转换是 JS 语言的一个核心支柱，而不是一些可以合理避免的可选功能。

但是，当强制类型转换遇到比较运算符（如是否相等）时，会经常出现混乱和挫折。

很少有 JS 特性比 `==` 运算符在更广泛的 JS 社区引起更多的愤怒，通常被称为「松散相等」运算符。大多数关于 JS 的写作和公开讨论都谴责这个运算符，认为它的设计很差，在 JS 程序中使用时很危险/有漏洞。甚至连该语言的创造者 Brendan Eich 本人都感叹它的设计是一个大错误。

据我所知，这种挫折感大多来自于一小部分令人困惑的边边角角，但更深层次的问题是极其普遍的误解，即它在进行比较时没有考虑其比较值的类型。

`==` 运算符执行相等比较的方式与 `===` 的执行方式类似。事实上，这两个运算符都会考虑被比较的值的类型。如果比较的是同一类型的值，那么 `==` 和 `===` 的结果**都是一样的，没有任何区别**。

如果被比较的值类型不同，`==` 与 `===` 的不同之处在于它允许在比较之前进行强制转换。换句话说，它们都想比较相似类型的值，但 `==` 首先允许类型转换，一旦双方的类型被转换为相同的，那么 `==` 就会做与 `===` 相同的事情。与其说是「松散的相等」，不如说是「强制的相等」，`==` 运算符应该被描述为「强制的相等」。

假设以下代码：

```js
42 == "42"; // true
1 == true; // true
```

在这两个比较中，值的类型是不同的，所以 `==` 导致非数字值（`"42"` 和 `true`）在进行比较之前被转换为数字（分别为 `42` 和 `1`）。

只要意识到 `==` 的这种性质 — 它更喜欢原始的数字比较。就可以帮助你避免大多数的麻烦情况，例如远离像 `"" == 0` or `0 == false` 这样的陷阱。

你可能会想，「哦，好吧，我将总是避免任何强制性的相等比较（使用 `===` 代替），以避免这些角落里的情况」！呃，抱歉，这可能并不像你希望的那样。

你很有可能会使用关系比较运算符，如 `<`，`>`（甚至 `<=` 和 `>=`）。

就像 `==` 一样，如果被比较的类型已经匹配，这些运算符会「严格」执行，但如果类型不同，它们会允许先进行强制类型转换（一般是对数字）。

假设以下代码：

```js
var arr = ["1", "10", "100", "1000"];
for (let i = 0; i < arr.length && arr[i] < 500; i++) {
    // 将运行3次
}
```

`i < arr.length` 的比较是「安全」的，因为 `i` 和 `arr.length` 都是数字。但是 `arr[i]< 500` 会调用强制类型转换，因为 `arr[i]` 的值都是字符串。因此，这些比较成为 `1 < 500`, `10 < 500`, `100 < 500`, 和 `1000 < 500`。由于第四个是 false，所以循环在第三次迭代后停止。

这些关系运算符通常使用数字比较，除非在被比较的**两个值**都已经是字符串的情况下；在这种情况下，它们使用字符串的字母顺序（类似字典）比较：

```js
var x = "10";
var y = "9";

x < y; // 小心，结果是 true!
```

除了在比较中不使用不匹配的类型外，没有办法让这些关系运算符避免强制。这也许是一个令人钦佩的目标，但你仍然很可能会遇到类型*可能*不同的情况。

更明智的做法不是避免强制类型转换的比较，而是接受并学习它们的内涵和外延。

强制类型转换比较出现在 JS 的其他地方，如条件句（`if`，等等），我们将在附录 A 「强制类型转换比较」中重新审视它。

## 如何在 JS 中组织代码

在 JS 生态系统中，有两种组织代码（数据和行为）的主要模式被广泛使用：类和模块。这些模式并不互斥；许多程序可以而且确实在同时使用这两种模式。其他程序则只坚持使用一种模式，甚至两者都不使用！

在某些角度，这些模式是非常不同的。但有趣的是，在另一些角度来讲，它们只是同一枚硬币的不同侧面。要想精通 JS，就必须了解这两种模式，以及它们在哪些方面是合适的（以及不合适！）。

### 类 Classes

「面向对象」、「面向类」和「类」这些术语都是充满了细节和细微差别的，它们的定义并不普遍。

我们在这里将使用一个常见的、有点传统的定义，这个定义对于那些有 C++ 和 Java 等「面向对象」语言背景的人来说最熟悉。

程序中的类是对自定义数据结构「类型」的定义，包括数据和对数据进行操作的行为。类定义了这种数据结构的工作方式，但类本身并不是具体的值。为了得到一个可以在程序中使用的具体数值，一个类必须被*实例化*（使用 `new` 关键字）一次或多次。

假设以下代码：

```js
class Page {
    constructor(text) {
        this.text = text;
    }

    print() {
        console.log(this.text);
    }
}

class Notebook {
    constructor() {
        this.pages = [];
    }

    addPage(text) {
        var page = new Page(text);
        this.pages.push(page);
    }

    print() {
        for (let page of this.pages) {
            page.print();
        }
    }
}

var mathNotes = new Notebook();
mathNotes.addPage("Arithmetic: + - * / ...");
mathNotes.addPage("Trigonometry: sin cos tan ...");

mathNotes.print();
// ..
```

在 `Page` 类中，数据是存储在 `this.text` 成员属性中的一串文本。其行为是 `print()`，一个将文本输出到控制台的方法。

对于 `Notebook` 类，数据是一个 `Page` 实例的数组。行为是 `addPage(..)`，一个实例化新的 `Page` 页面并将其添加到列表中的方法，以及 `print()`（打印出笔记本中的所有页面）。

语句 `mathNotes = new Notebook()` 创建了一个 `Notebook` 类的实例，`page = new Page(text)` 是创建`Page`类实例的地方。

行为（方法）只能在实例上调用（而不是类本身），如 `mathNotes.addPage(..)` 和 `page.print()`。

`class`的机制允许包装数据 (`text` 和 `pages`) 与它们的行为（例如，`addPage(..)` 和 `print()`）组织在一起。同样的程序可以在没有任何「类」定义的情况下建立，但它的组织性可能会差很多，更难阅读和推理，也更容易出现错误和不合格的维护。

#### 类的继承

传统的「面向类」设计所固有的另一个方面是「继承」（和「多态」），尽管在 JS 中使用的比较少。

假设以下代码：

```js
class Publication {
    constructor(title, author, pubDate) {
        this.title = title;
        this.author = author;
        this.pubDate = pubDate;
    }

    print() {
        console.log(`
            Title: ${this.title}
            By: ${this.author}
            ${this.pubDate}
        `);
    }
}
```

这个 `Publication` 类定义了一套任何出版物可能需要的通用行为。

现在让我们考虑更具体的出版类型，如 `Book` 和 `BlogPost`：

```js
class Book extends Publication {
    constructor(bookDetails) {
        super(bookDetails.title, bookDetails.author, bookDetails.publishedOn);
        this.publisher = bookDetails.publisher;
        this.ISBN = bookDetails.ISBN;
    }

    print() {
        super.print();
        console.log(`
            Publisher: ${this.publisher}
            ISBN: ${this.ISBN}
        `);
    }
}

class BlogPost extends Publication {
    constructor(title, author, pubDate, URL) {
        super(title, author, pubDate);
        this.URL = URL;
    }

    print() {
        super.print();
        console.log(this.URL);
    }
}
```

`Book` 和 `BlogPost` 都使用 `extends` 语句来*扩展* `Publication` 的一般定义，以包括额外的行为。每个构造函数中的 `super(..)` 调用委托给父级 `Publication` 类的构造函数进行初始化工作，然后它们根据各自的出版物类型（又称「子集」或「子类」）做更具体的事情。

现在可以考虑使用这些子类：

```js
var YDKJS = new Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789",
});

YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly
// ISBN: 123456-789

var forAgainstLet = new BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let",
);

forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let
```

注意这两个子类实例都有一个 `print()` 方法，它是对父类 `Publication` 中*继承*的 `print()` 方法的重写。每个被覆盖的子类 `print()` 方法都调用 `super.print()` 来调用继承版本的 `print()` 方法。

继承和覆盖的方法都可以有相同的名字，并且共存，这被称为*多态*。

继承是一个强大的工具，用于在独立的逻辑单元（类）中组织数据/行为，但允许子类通过访问/使用其行为和数据与父类合作。

### 模块 Modules

模块模式与类模式的目标基本相同，都是将数据和行为组合成逻辑单元。也像类一样，模块可以「包括」或「访问」其他模块的数据和行为，以利于合作。

但模块与类有一些重要的区别。最明显的是，其语法完全不同。

#### Classic Modules

ES6 在原生 JS 语法中增加了一个模块语法形式，我们稍后会看一下。但是从 JS 的早期开始，模块就是一种重要的、常见的模式，在无数的 JS 程序中被使用，即使没有专门的语法。

_classic module_ 的主要标志是一个外部函数（至少运行一次），它返回一个模块的「实例」，并暴露出一个或多个函数，可以对模块实例的内部（隐藏）数据进行操作。

因为这种形式的模块*只是一个函数*，调用它可以产生一个模块的「实例」，这些函数的另一种描述是「模块工厂」。

思考一下之前的 `Publication`, `Book`, 和 `BlogPost` 类的 classic module 形式：

```js
function Publication(title, author, pubDate) {
    var publicAPI = {
        print() {
            console.log(`
                Title: ${title}
                By: ${author}
                ${pubDate}
            `);
        },
    };

    return publicAPI;
}

function Book(bookDetails) {
    var pub = Publication(
        bookDetails.title,
        bookDetails.author,
        bookDetails.publishedOn,
    );

    var publicAPI = {
        print() {
            pub.print();
            console.log(`
                Publisher: ${bookDetails.publisher}
                ISBN: ${bookDetails.ISBN}
            `);
        },
    };

    return publicAPI;
}

function BlogPost(title, author, pubDate, URL) {
    var pub = Publication(title, author, pubDate);

    var publicAPI = {
        print() {
            pub.print();
            console.log(URL);
        },
    };

    return publicAPI;
}
```

将这些形式与「类」的形式相比较，其相似之处多于不同之处。

`class` 形式在一个对象实例上存储方法和数据，必须用 `this.` 前缀来访问。对于模块，方法和数据在作用域内作为标识符变量被访问，没有任何 `this.` 前缀。

使用 `class`，一个实例的 "API" 隐藏在类的定义中 — 同样，所有的数据和方法都是公开的。使用模块工厂函数，你明确地创建并返回一个具有任何公开暴露方法的对象，任何数据或其他未引用的方法在工厂函数中保持私有。

这种工厂函数的形式还有其他变化，在整个 JS 中相当普遍，甚至在 2020 年也是如此；你可能会在不同的 JS 程序中碰到这些形式： AMD（异步模块定义）、UMD（通用模块定义）和 CommonJS（典型的 Node.js 风格模块）。然而，所有这些形式都依赖于相同的基本原则。

同时思考一下这些模块工厂函数的用法（又称「实例化」）：

```js
var YDKJS = Book({
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    publishedOn: "June 2014",
    publisher: "O'Reilly",
    ISBN: "123456-789",
});

YDKJS.print();
// Title: You Don't Know JS
// By: Kyle Simpson
// June 2014
// Publisher: O'Reilly
// ISBN: 123456-789

var forAgainstLet = BlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let",
);

forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let
```

这里唯一可以观察到的区别是没有使用 `new`，而是像普通函数一样调用模块工厂。

#### ES Modules

ES 模块 (ESM)，在 ES6 中被引入 JS 语言，其目的是为了与刚才描述的现有 _classic modules_ 的思想和目的基本相同，特别是考虑到 AMD、UMD 和 CommonJS 的重要变化和用例。

然而，实现方法确实有很大不同。

首先，没有包装函数来*定义*一个模块。包装的上下文是一个文件。ESM 总是基于文件；一个文件，一个模块。

其次，你不与模块的 "API" 明确互动，而是使用 `export` 关键字将一个变量或方法添加到其公共 API 定义。如果某样东西在模块中被定义了，但没有被「导出(`export` )」，那么它就会被隐藏起来（就像 _classic modules_ 一样）。

第三，也许是与之前讨论的模式最明显的不同，你不会「实例化」ES 模块，你只是「导入(`import`)」它来使用它的单一实例。ESM 实际上是「单例」，在你的程序中第一次「导入」时只创建了一个实例，所有其他的「导入」都是对这个单一实例的引用。如果你的模块需要支持多个实例，你必须在你的 ESM 定义中提供一个 *classic modules 式*工厂函数来实现这一目的。

在我们运行的例子中，我们确实假定了多重实例化，所以下面这些片段将混合 ESM 和 _classic modules_。

思考一下，有一个 `publication.js` 文件：

```js
function printDetails(title, author, pubDate) {
    console.log(`
        Title: ${title}
        By: ${author}
        ${pubDate}
    `);
}

export function create(title, author, pubDate) {
    var publicAPI = {
        print() {
            printDetails(title, author, pubDate);
        },
    };

    return publicAPI;
}
```

要导入和使用这个模块，要从另一个 ES 模块如 `blogpost.js` 导入：

```js
import { create as createPub } from "publication.js";

function printDetails(pub, URL) {
    pub.print();
    console.log(URL);
}

export function create(title, author, pubDate, URL) {
    var pub = createPub(title, author, pubDate);

    var publicAPI = {
        print() {
            printDetails(pub, URL);
        },
    };

    return publicAPI;
}
```

最后，为了使用这个模块，我们将其导入另一个 ES 模块，如 `main.js`：

```js
import { create as newBlogPost } from "blogpost.js";

var forAgainstLet = newBlogPost(
    "For and against let",
    "Kyle Simpson",
    "October 27, 2014",
    "https://davidwalsh.name/for-and-against-let",
);

forAgainstLet.print();
// Title: For and against let
// By: Kyle Simpson
// October 27, 2014
// https://davidwalsh.name/for-and-against-let
```

| 注意：                                                                                                                                                                                                                              |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 在 `import` 语句中的 `as newBlogPost` 子句是可选的；如果省略，一个名为 `create(..)` 的顶级函数将被导入。在这种情况下，我为了可读性而重新命名它；给 `create(..)` 起一个更通用的名称，在语义上更能描述它的目的，即`newBlogPost(..)`。 |

如图所示，ES 模块如果需要支持多重实例化，可以在内部使用 _classic modules_。另外，我们可以从我们的模块中暴露出一个 `class`，而不是 `create(..)` 工厂函数，结果大致相同。然而，由于你已经在使用 ESM，我建议坚持使用 _classic modules_ 而不是 `class`。

如果你的模块只需要一个实例，你可以跳过额外的复杂层：直接 `export` 它的公共方法。

## 欲穷其林

正如本章顶部所承诺的那样，我们只是管中窥豹 JS 语言的主要部分的广泛表面区域。你的脑袋可能还在转，但这是完全正常的，因为你已经获得了大量的信息！

即使只是对 JS 的「简要」了解，我们也涵盖了或暗示了大量的细节，你应该仔细考虑并确保你能适应。我是认真的，我建议：重读这一章，也许要读几遍。

在下一章中，我们将更深入的挖掘 JS 核心工作方式的一些重要方面。但在你深入之前，请确保你已经花了足够的时间来充分消化我们刚才所讲的内容。
