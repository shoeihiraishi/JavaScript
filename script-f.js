console.log("あ".codePointAt(0));

console.log(String.fromCodePoint(12354));
console.log(String.fromCodePoint(0x3042));

const codePointOfあ = "あ".codePointAt(0);
const hexOfあ = codePointOfあ.toString(16);
console.log(hexOfあ);
console.log("\u{3042}");

function convertCodeUnits(str) {
    const codeUnits = [];
    for (let i = 0; i < str.length; i++) {
        codeUnits.push(str.charCodeAt(i).toString(16));
    }
    return codeUnits;
}
function convertCodePoints(str) {
    return Array.from(str).map(char => {
        return char.codePointAt(0).toString(16);
    });
}
const str ="アオイ";
const codeUnits = convertCodeUnits(str);
console.log(codeUnits);
const codePoints = convertCodePoints(str);
console.log(codePoints);

function convertCodeUnits(str2) {
    const codeUnits2 = [];
    for (let i = 0; i < str2.length; i++) {
        codeUnits2.push(str2.charCodeAt(i).toString(16));
    }
    return codeUnits2;
}
function convertCodePoints(str2) {
    return Array.from(str2).map(char => {
        return char.codePointAt(0).toString(16);
    });
}
const str2 = "りんご🍎";
const codeUnits2 = convertCodeUnits(str2);
console.log(codeUnits2);
const codePoints2 = convertCodePoints(str2);
console.log(codePoints2);

console.log("\uD867\uDE3D");
console.log("\u{29e3d}");

console.log("\uD83C\uDF4E");
console.log("\u{1F34E}");

console.log("\uD867\uDE3D");
console.log("𩸽"[0]);
console.log("𩸽"[1]);

console.log("🍎".length);

const [all, fish] = "𩸽のひらき".match(/(.)のひらき/);
console.log(all);
console.log(fish);

console.log("🍎".length);
console.log("\uD83C\uDF4E");
console.log("\uD83C\uDF4E".length);

const codePoints3 = Array.from("リンゴ🍎");
console.log(codePoints3);
console.log(codePoints3.length);

function countOfCodePoints(str, codePoint) {
    return Array.from(str).filter(item => {
        return item === codePoint;
    }).length;
}
console.log(countOfCodePoints("🍎🍇🍎🥕🍒", "🍎"));

const str3 = new String("input value");
str3.toUpperCase();

// // プリミティブの文字列は"string"型
// const str = "文字列";
// console.log(typeof str); // => "string"
// // ラッパーオブジェクトは"object"型
// const stringWrapper = new String("文字列");
// console.log(typeof stringWrapper); // => "object"

const str4 = "文字列";
console.log(typeof str4);
const stringWrapper = new String("文字列");
console.log(typeof stringWrapper);

const stringWrapper2 = new String("文字列");
console.log(stringWrapper2.valueOf());

const str5 = "文字列";
const stringWrraper = new String("文字列");

{
    const x = 1;
    console.log(x);
}

if (true) {
    const x = "inner";
    console.log(x);
}
{
    const array = [1, 2, 3, 4, 5];
    for (const element of array) {
        console.log(element);
    }
}

{
    const x = "x";
    {
        console.log(x);
    }
}

{
    const x = "outer";
    {
        const x = "inner";
        console.log(x);
    }
    console.log(x);
}

const globalVariable = "グローバル";
{
    console.log(globalVariable);
}
function fn() {
    console.log(globalVariable);
}
fn();

{
    console.log(isNaN);
    console.log(Array);
}

{
    const Array = 1;
    console.log(Array);
}

{
    function doHeavyTask() {

    }
    const startTime = Date.now();
    doHeavyTask();
    const endTime = Date.now();
    console.log(`実行時間は${endTime - startTime}ミリ秒`);
}
{
    const measureTask = (taskFn) => {
        const startTime = Date.now();
        taskFn();
        const endTime = Date.now();
        console.log(`実行時間は${endTime - startTime}ミリ秒`);
    };
    function doHeavyTask() {

    }
    measureTask(doHeavyTask);
}
{
    let let_x;
    var var_x;
    console.log(let_x);
    console.log(var_x);
}

function fn() {
    console.log(x);
    {
        var x = "varのx";
    }
    console.log(x);
}
fn();

{
    function fn() {
        var x;
        console.log(x); 
        {
            x = "varのx";
        }
        console.log(x);
    }
    fn();
}
{
    hello();
    function hello(){
        return "Hello";
    }
}
{
    (function() {
        var foo = "foo";
        console.log(foo);
    })();
    console.log(typeof foo === "undefined");
}
{
    {
        const foo = "foo";
        console.log(foo);
    }
    console.log(typeof foo === "undefined");
}
{
function createCounter() {
    let count = 0;
    function increment() {
        count = count + 1;
        return count;
    }
    return increment;
}
const myCounter = createCounter();
myCounter();
myCounter();
const newCounter = createCounter();
newCounter();
newCounter();
myCounter();
newCounter();
}
{
    const x = 10;

function printX() {
    console.log(x);
}

function run() {
    const x = 20;
    printX();
}
run();
}
{
    function printX() {
        const x = "X";
        console.log(x);
    }
    printX();
}
{
    function createArray() {
        const tempArray = [1, 2, 3];
        return tempArray;
    }
    const array = createArray();
    console.log(array);
}
{
    const createCounter = () => {
        let count = 0;
        return function increment() {
            count = count + 1;
            return count;
        };
    };
    const myCounter = createCounter();
    console.log(myCounter());
    console.log(myCounter());
}
{
    const createCounter = () => {
        let count = 0;
        return function increment() {
            count = count + 1;
            return count;
        };
    };
    const countUp = createCounter();
    const newCountUp = createCounter();
    console.log(countUp === newCountUp);
    console.log(countUp());
    console.log(newCountUp());
}
{
    const createCounter = () => {
        let privateCount = 0;
        return () => {
            privateCount++;
            return `${privateCount}回目`;
        };
    };
    const counter = createCounter();
    console.log(counter());
    console.log(counter());
}
{
    function countUp() {
        countUp.count = countUp.count + 1;
        return countUp.count;
    }
    countUp.count = 0;
    console.log(countUp());
    console.log(countUp());
}
{
    function countUp() {
        countUp.count = countUp.count + 1;
        return countUp.count;
    }
    countUp.count = 0;
    console.log(countUp());
    countUp.count = 10;
    console.log(countUp());
}
{
    function fn1() {}
    const fn2 = function() {};
    const fn3 = () => {};
}
{
    const obj = {
        method1: function() {
        },
        method2: () => {
        }
    };
}
{
    const obj = {
        method() {
    }
};
obj.method();
}
{
    "use strict";
function fn1() {
    return this;
}
const fn2 = function() {
    return this;
};
console.log(fn1());
console.log(fn2());
}
{
    "use strict";
function outer() {
    console.log(this);
    function inner() {
        console.log(this);
    }
    inner();
}
outer();
}
{
    const obj = {
        method1: function() {
            return this;
        },
        method2() {
            return this;
        }
    };
    console.log(obj.method1());
    console.log(obj.method2());
}
{
    const person = {
        fullName: "Brendan Eich",
        sayName: function() {
            return this.fullName;
        }
    };
    console.log(person.sayName());
}
{
    const obj1 = {
        obj2: {
            obj3: {
                method() {
                    return this;
                }
            }
        }
    };
    console.log(obj1.obj2.obj3.method() === obj1.obj2.obj3);
}
{
    "use strict";
const person = {
    fullName: "Brendan Eich",
    sayName: function() {
        // `this`は呼び出し元によって異なる
        return this.fullName;
    }
};
console.log(person.sayName());
const say = person.sayName;
say();
}
{
    "use strict";
const say = function() {
    return this.fullName;
};
say();
}
{
    "use strict";
function say(message) {
    return `${message} ${this.fullName}！`;
}
const person = {
    fullName: "Brendan Eich"
};
console.log(say.call(person, "こんにちは"));
say("こんにちは");
}
{
    "use strict";
function say(message) {
    return `${message} ${this.fullName}！`;
}
const person = {
    fullName: "Brendan Eich"
};
console.log(say.apply(person, ["こんにちは"]));
say("こんにちは");
}
{
    function add(x, y) {
        return x + y;
    }
    console.log(add.call(null, 1, 2));
    console.log(add.apply(null, [1, 2]));
}
{
    function say(message) {
        return `${message} ${this.fullName}！`;
    }
    const person = {
        fullName: "Brendan Eich"
    };
    const sayPerson = say.bind(person, "こんにちは");
    console.log(sayPerson());
}
function say(message) {
    return `${message} ${this.fullName}！`;
}
const person = {
    fullName: "Brendan Eich"
};
const sayPerson = () => {
    return say.call(person, "こんにちは");
};
console.log(sayPerson());
{
    "use strict";
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map(function(str) {
            return this.prefix + "-" + str;
        });
    }
};
Prefixer.prefixArray(["a", "b", "c"]);
}
{
    "use strict";
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        const callback = function(str) {
            return this.prefix + "-" + str;
        };
        return strings.map(callback);
    }
};
Prefixer.prefixArray(["a", "b", "c"]);
}
{
    "use strict";
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        const that = this;
        return strings.map(function(str) {
            return that.prefix + "-" + str;
        });
    }
};
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings);
}
{
    "use strict";
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map(function(str) {
            return this.prefix + "-" + str;
        }, this);
    }
};
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings);
}
{
    "use strict";
const Prefixer = {
    prefix: "pre",
    prefixArray(strings) {
        return strings.map((str) => {
            return this.prefix + "-" + str;
        });
    }
};
const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
console.log(prefixedStrings);
}
{
    const fn = () => {
        return this;
    };
    console.log(fn() === this);
}
{
    "use strict";
function outer() {
    return () => {
        return this;
    };
}
const innerArrowFunction = outer();
console.log(innerArrowFunction());
}
{
    "use strict";
function outer() {
    const that = this;
    return () => {
        return that;
    };
}
const innerArrowFunction = outer();
console.log(innerArrowFunction());
}
{
    const Prefixer = {
        prefix: "pre",
        prefixArray(strings) {
            return strings.map((str) => {
                return this.prefix + "-" + str;
            });
        }
    };
    const prefixedStrings = Prefixer.prefixArray(["a", "b", "c"]);
    console.log(prefixedStrings);
}
{
    const fn = () => {
        return this;
    };
    console.log(fn());
    console.log(fn.call({}));
}
{
    const obj = {
        method() {
            const arrowFunction = () => {
                return this;
            };
            return arrowFunction();
        }
    };
    console.log(obj.method());
    console.log(obj.method.call("THAT"));
}
{
    class MyClass {
        constructor() {

        }
    }
}
{
const MyClass = class MyClass {
    constructor() {}
};

const AnonymousClass = class {
    constructor() {}
};
}

