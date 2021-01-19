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

//クラス　　
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
{
    class MyClassA {
    constructor() {
//コンストラクタの処理が必要なら書く
    }
}
//コンストラクタのよりが不要なら省略できる
class MyClassB{
}
}
{
    class MyClass {
    }
    const myClass = new MyClass();
    const myClassAnother = new MyClass();
    console.log(myClass === myClassAnother);
    console.log(myClass instanceof MyClass);
    console.log(myClassAnother instanceof MyClass);
}
{
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
}
{
    class Point {
        constructor(x, y) {
            this.x = x;
            this.y = y;
        }
    }
    const point = new Point(3, 4);
    console.log(point.x);
    console.log(point.y);
}
{
    class Point {
        constructor(x, y) {
            return { x, y };
        }
    }
        const point = new Point(3, 4);
    console.log(point);
    console.log(point instanceof Point);
}
{
const Point = function PointConstructor(x, y) {
    this.x = x;
    this.y = y;
};
const point = new Point(3, 4);
}
{
    class Counter {
        constructor() {
            this.count = 0;
        }
        increment() {
            this.count++;
        }
    }
    const counterA = new Counter();
    const counterB = new Counter();
    counterA.increment();
    console.log(counterA.count);
    console.log(counterB.count);
}
{
    class Counter {
        constructor() {
            this.count = 0;
        }
        increment() {
            this.count++;
        }
    }
    const counterA = new Counter();
    const counterB = new Counter();
    console.log(counterA.increment === counterB.increment);
}
{
    class Counter {
        constructor() {
            this.count = 0;
            this.increment = () => {
                this.count++;
            };
        }
    }
    const counterA = new Counter();
    const counterB = new Counter();
    counterA.increment();
    console.log(counterA.count); // => 1
    console.log(counterB.count);
}
{
    class Counter {
        constructor() {
            this.count = 0;
            this.increment = () => {
                this.count++;
            };
        }
    }
    const counterA = new Counter();
    const counterB = new Counter();
    console.log(counterA.increment !== counterB.increment);
}
{
    "use strict";
class ArrowClass {
    constructor() {
        this.method = () => {
            return this;
        };
    }
}
const instance = new ArrowClass();
const method = instance.method;
console.log(method());
}
{
    "use strict";
class PrototypeClass {
    method() {
        return this;
    };
}
const instance = new PrototypeClass();
const method = instance.method;
console.log(method());
}
{
    class NumberWrapper {
        constructor(value) {
            this._value = value;
        }
        get value() {
            console.log("getter");
            return this._value;
        }
        set value(newValue) {
            console.log("setter");
            this._value = newValue;
        }
    }
    const numberWrapper = new NumberWrapper(1);
    console.log(numberWrapper.value);
    numberWrapper.value = 42;
    console.log(numberWrapper.value);
}
{
    const array = [1, 2, 3, 4, 5];
array.length = 2;
console.log(array.join(", "));
array.length = 5;
console.log(array.join(", "));
}
{
    class ArrayLike {
        constructor(items = []) {
            this._items = items;
        }
        get items() {
            return this._items;
        }
        get length() {
            return this._items.length;
        }
        set length(newLength) {
            const currentItemLength = this.items.length;
            if (newLength < currentItemLength) {
                this._items = this.items.slice(0, newLength);
            } else if (newLength > currentItemLength) {
                this._items = this.items.concat(new Array(newLength - currentItemLength));
            }
        }
    }
    const arrayLike = new ArrayLike([1, 2, 3, 4, 5]);
    arrayLike.length = 2;
    console.log(arrayLike.items.join(", "));
    arrayLike.length = 5;
    console.log(arrayLike.items.join(", "));
}
{
    class ArrayWrapper {
        constructor(array = []) {
            this.array = array;
        }
        static of(...items) {
            return new ArrayWrapper(items);
        }
        get length() {
            return this.array.length;
        }
    }
    const arrayWrapperA = new ArrayWrapper([1, 2, 3]);
    const arrayWrapperB = ArrayWrapper.of(1, 2, 3);
    console.log(arrayWrapperA.length);
    console.log(arrayWrapperB.length);
}
{
    class ArrayWrapper {
        constructor(array = []) {
            this.array = array;
        }
        static of(...items) {
            return new this(items);
        }
        get length() {
            return this.array.length;
        }
    }
    const arrayWrapper = ArrayWrapper.of(1, 2, 3);
    console.log(arrayWrapper.length);
}
{
    class ConflictClass {
        constructor() {
            this.method = () => {
                console.log("インスタンスオブジェクトのメソッド");
            };
        }
        method() {
            console.log("プロトタイプのメソッド");
        }
    }
    const conflict = new ConflictClass();
    conflict.method();
}
{
    class ConflictClass {
        constructor() {
            this.method = () => {
                console.log("インスタンスオブジェクトのメソッド");
            };
        }

        method() {
            console.log("プロトタイプメソッド");
        }
    }
    const conflict = new ConflictClass();
    conflict.method();
    delete conflict.method;
    conflict.method();
}
{
    function fn() {
    }
    console.log(typeof fn.prototype === "object");
    class MyClass {
    }
    console.log(typeof MyClass.prototype === "object");
}
{
    class MyClass {
        method() { }
    }
    console.log(typeof MyClass.prototype.method === "function");
    console.log(MyClass.prototype.constructor === MyClass);
}
{
    class MyClass {
        method() {
            console.log("プロトタイプのメソッド");
        }
    }
    const instance = new MyClass();
    instance.method();
}
{
    class MyClass {
        method() {
            console.log("プロトタイプのメソッド");
        }
    }
    const instance = new MyClass();
    const MyClassPrototype = Object.getPrototypeOf(instance);
    console.log(MyClassPrototype === MyClass.prototype);
}
{
    class MyClass {
        method() {
            console.log("プロトタイプのメソッド");
        }
    }
    const instance = new MyClass();
    instance.method();
    const Prototype = Object.getPrototypeOf(instance);
    console.log(instance.method === Prototype.method);
}
{
    class MyClass {
        method() {
            console.log("プロトタイプのメソッド");
        }
    }
    const instance = new MyClass();
    if (instance.hasOwnProperty("method")) {
        instance.method();
    } else {
        const prototypeObject = Object.getPrototypeOf(instance);
        if (prototypeObject.hasOwnProperty("method")) {
            prototypeObject.method.call(instance);
        }
    }
}
{
    class Parent {
        constructor(...args) {
            console.log("Parentコンストラクタの処理", ...args);
        }
    }
    class Child extends Parent {
        constructor(...args) {
            super(...args);
            console.log("Childコンストラクタの処理", ...args);
        }
    }
    const child = new Child("引数1", "引数2");
}
{
    class Parent {}
class Child extends Parent {}
}
{
    class Parent {}
class Child extends Parent {
    constructor(...args) {
        super(...args);
    }
}
}
{
    class Parent {
        constructor() {
            this.name = "Parent";
        }
    }
    class Child extends Parent {
        constructor() {
            super();
            this.name = "Child";
        }
    }
    const parent = new Parent();
    console.log(parent.name);
    const child = new Child();
    console.log(child.name);
}
{
    class Parent {
        method() {
            console.log("Parent#method");
        }
    }
    class Child extends Parent {
    }
    const instance = new Child();
    instance.method();
}
{
    class Parent {
        static hello() {
            return "Hello";
        }
    }
    class Child extends Parent {}
    console.log(Child.hello());
}
{
    class Parent {
        method() {
            console.log("Parent#method");
        }
    }
    class Child extends Parent {
        method() {
            console.log("Child#method");
            // `this.method()`だと自分(`this`)のmethodを呼び出して無限ループする
            // そのため明示的に`super.method()`とParent#methodを呼び出す
            super.method();
        }
    }
    const child = new Child();
    child.method();
}
{
    class Parent {
        static method() {
            console.log("Parent.method");
        }
    }
    class Child extends Parent {
        static method() {
            console.log("Child.method");
            // `super.method()`で`Parent.method`を呼びだす
            super.method();
        }
    }
    Child.method();
}
{
    class Parent {}
class Child extends Parent {}

const parent = new Parent();
const child = new Child();
console.log(parent instanceof Parent);
console.log(parent instanceof Child);
console.log(child instanceof Parent);
console.log(child instanceof Child);
}
{
    class MyArray extends Array {
        get first() {
            if (this.length === 0) {
                return undefined;
            } else {
                return this[0];
            }
        }
        get last() {
            if (this.length === 0) {
                return undefined;
            } else {
                return this[this.length - 1];
            }
        }
    }
    const array = MyArray.from([1, 2, 3, 4, 5]);
    console.log(array.length);
    console.log(array.first);
    console.log(array.last);
}

//例外処理
{
    try {
        console.log("try切:この行は実行されます");
        undefinedFunction();
    } catch (error) {
        console.log("catch節:この行は実行されます");
        console.log(error instanceof ReferenceError);
        console.log(error.message);
    } finally {
        console.log("finally節:この行は実行されます");
    }
}
try {
    throw new Error("例外が投げられました");
} catch (error) {
    console.log(error.message);
}
function assertPositiveNumber(num) {
    if (num < 0) {
        throw new Error(`${num} is not positive.`);
    }
}
{
try {
    assertPositiveNumber(-1);
} catch (error) {
    console.log(error instanceof Error);
    console.log(error.message);
}
try {
    throw "例外が投げられました";
} catch (error) {
    console.log(error);
}
}
{
try {
    console.log(x);
} catch (error) {
    console.log(error instanceof ReferenceError);
    console.log(error.name);
    console.log(error.message);
}
}
{
    try {
        eval("foo! bar!");
    } catch (error) {
        console.log(error instanceof SyntaxError);
        console.log(error.name);
        console.log(error.message);
    }
}
{
    try {
        const fn = {};
        fn();
    } catch (error) {
        console.log(error instanceof TypeError);
        console.log(error.name);
        console.log(error.message);
    }
}
{
    function reverseString(str) {
        if (typeof str !== "string") {
            throw new TypeError(`${str} is not a string`);
        }
        return Array.from(str).reverse().join("");
    }
    try {
        reverseString(100);
    } catch (error) {
        console.log(error instanceof TypeError);
        console.log(error.name);
        console.log(error.message);
    }
}

//非同期処理
{
    function blockTime(timeout) {
        const startTime = Date.now();
        while(true) {
            const diffTime = Date.now() - startTime;
            if (diffTime >= timeout) {
                return;
            }
        }
    }
    console.log("処理を開始");
    blockTime(1000);
    console.log("この行が呼ばれるまで処理が１秒感ブロックされる");
}
{
    function blockTime(timeout) {
        const startTime = Date.now();
        while (true) {
            const diffTime = Date.now() - startTime;
            if (diffTime >= timeout) {
                return;
            }
        }
    }

    console.log("1. setTimeoutのコールバック関数を10ミリ秒後に実行します");
    setTimeout(() => {
        console.log("3. ブロックする処理を開始します");
        blockTime(1000);
        console.log("4. ブロックする処理が完了しました");
    }, 10);
    console.log("2. 同期的な処理を実行します");
}
{
function blockTime(timeout) {
    const startTime = Date.now();
    while (true) {
        const diffTime = Date.now() - startTime;
        if (diffTime >= timeout) {
            return;
        }
    }
}

const startTime = Date.now();
setTimeout(() => {
    const endTime = Date.now();
    console.log(`非同期処理のコールバックが呼ばれるまで${endTime - startTime}ミリ秒かかりました`);
}, 10);
console.log("ブロックする処理を開始します");
blockTime(1000);
console.log("ブロックする処理が完了しました");
}
{
    try {
        throw new Error("同期的なエラー");
    } catch (error) {
        console.log("同期的なエラーをキャッチできる");
    }
    console.log("この行は実行されます");
}
setTimeout(() => {
    try {
        throw new Error("エラー");
    } catch (error) {
        console.log("エラーをキャッチできる");
    }
}, 10);
console.log("この行は実行されます");
{
function dummyFetch(path, callback) {
    setTimeout(() => {
        if (path.startsWith("/success")) {
            callback(null, { body: `Response body of ${path}` });
        } else {
            callback(new Error("NOT FOUND"));
        }
    }, 1000 * Math.random());
}
dummyFetch("/success/data", (error, response) => {
    if (error) {
    } else {
        console.log(response);
    }
});
dummyFetch("/failure/data", (error, response) => {
    if (error) {
        console.log(error.message);
    } else {
    }
});
}
{
    function dummyFetch(path, successCallback, failureCallback) {
        setTimeout(() => {
            if (path.startsWith("/success")) {
                successCallback({ body: `Response body of ${path}` });
            } else {
                failureCallback(new Error("NOT FOUND"));
            }
        }, 1000 * Math.random());
    }
}
{
    const exector = (resolve, reject) => {

    };
    const promise = new Promise(exector);
}
{
    const promise = new Promise((resolve, reject) => {
    });
    const onFulfilled = () => {
        console.log("resolveされたときに呼ばれる");
    };
    const onRejected = () => {
        console.log("rejectされたときに呼ばれる");
    };
    promise.then(onFulfilled, onRejected);
}
{
    function dummyFetch(path) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (path.startsWith("/success")) {
                    resolve({ body: `Response body of ${path}` });
                } else {
                    reject(new Error("NOT FOUND"));
                }
            }, 1000 * Math.random());
        });
    }
    dummyFetch("/success/data").then(function onFulfilled(response) {
        console.log(response);
    }, function onRejected(error) {
    });
    dummyFetch("/failure/data").then(function onFulfilled(response) {
    }, function onRejected(error) {
        console.log(error);
    });
}
//promice then