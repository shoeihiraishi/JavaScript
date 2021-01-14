console.log("あ".codePointAt(0));

console.log(String.fromCodePoint(12354));
console.log(String.fromCodePoint(0x3042));

const codePointOfあ = "あ".codePointAt(0);
const hexOfあ = codePointOfあ.toString(16);
console.log(hexOfあ);
console.log("\u{3042}");



// // 文字列をCode Unit(16進数)の配列にして返す
// function convertCodeUnits(str) {
//     const codeUnits = [];
//     for (let i = 0; i < str.length; i++) {
//         codeUnits.push(str.charCodeAt(i).toString(16));
//     }
//     return codeUnits;
// }
// // 文字列をCode Point(16進数)の配列にして返す
// function convertCodePoints(str) {
//     return Array.from(str).map(char => {
//         return char.codePointAt(0).toString(16);
//     });
// }

// const str = "アオイ";
// const codeUnits = convertCodeUnits(str);
// console.log(codeUnits); // => ["30a2", "30aa", "30a4"]
// const codePoints = convertCodePoints(str);
// console.log(codePoints); // => ["30a2", "30aa", "30a4"]
// 実行



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
//即時実行関数より




//関数とthis
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
//Arrow Functionいがいの関数におけるthis