//関数宣言

function double(num) {
    return num * 2;
}
//double関数の返り値はnumに10を入れてreturn文で返した値
console.log(double(10));

function fn() {
    //何も返り値を指定していない場合はundefinedを返す
    return;
    //すでにreturnされているため、この行は実行されません
}
console.log(fn());
//関数の引数
//呼び出し時の引数が少ない時
function echo(x) {
    return x;
}
console.log(echo(1));
console.log(echo());

function argumentsToArray(x, y) {
    return [x, y];
}
console.log(argumentsToArray(1, 2));
console.log(argumentsToArray(1));

function echo(x = "デフォルト値") {
    return x;
}
console.log(echo(1));
console.log(echo());



function addPrefix(text, prefix) {
    const pre = prefix || "デフォルト:";
    return pre + text;
}

console.log(addPrefix("文字列")); // => "デフォルト:文字列"
console.log(addPrefix("文字列", "カスタム:")); // => "カスタム:文字列"

function addPrefix(text, prefix) {
    const pre = prefix || "デフォルト:";
    return pre + text;
}
console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", "カスタム:"));

function addPrefix(text, prefix) {
    const pre = prefix || "デフォルト:";
    return pre + text;
}
// falsyな値を渡すとデフォルト値が入ってしまう
console.log(addPrefix("文字列"));
console.log(addPrefix("文字列", ""));
console.log(addPrefix("文字列", "カスタム:"));

function addPrefix(text, prefix = "デフォルト") {
    return prefix + text;
}
//falsyな値を渡してもデフォルト値には代入されない
console.log(addPrefix("文字列f"));
console.log(addPrefix("文字列", ""));
console.log(addPrefix("文字列", "カスタム:"));

function addPrefix(text, prefix) {
    //prefixがnullまたはundefinedの時、デフォルト値を返す
    const pre = prefix ?? "デフォルト:";
    return pre + text;
}
//falsyな値でも意図通りに動作する
console.log(addPrefix("文字列", ""));
console.log(addPrefix("文字列", "カスタム:"));
//引数の呼びだしが多い場合
function add(x, y) {
    return x + y;
}
console.log(add(1, 3));
console.log(add(1, 3, 5));
//可変長引数
//Math.maxは可変長引数を受け取る関数
const max = Math.max(1, 5, 7, 20);
console.log(max);

function fn(...args) {
    //argsは引数の値が順番に入った配列
    console.log(args);
}
fn("a", "b", "c");


function fn(arg1, ...restArgs) {
    console.log(arg1); // => "a"
    console.log(restArgs); // => ["b", "c"]
}
fn("a", "b", "c");

function fn(arg1, ...restArgs) {
    console.log(arg1);
    console.log(restArgs);
}
fn("a", "b", "c");

function fn(x, y, z) {
    console.log(x);
    console.log(y);
    console.log(z);
}
const array = [1, 2, 3];
//Spresd構文で配列を引数に展開して関数を飛び出す
fn(...array);
// //次のように書いたのと同じ意味
function fn() {
    //argumentsはインデックスを指定して各要素にアクセスできる
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
fn("a", "b", "c");
//関数の引数と分割代入
function printUserId(user) {
    console.log(user.id);
}
const user = {
    id: 42
};
printUserId(user);
//第一引数のオブジェクトからidプロパティを変数idとして定義する
function printUserId({
    id
}) {
    console.log(id);
}
const user2 = {
    id: 42
};
printUserId(user2);

function print([first, second]) {
    console.log(first);
    console.log(second);
}
const array2 = [1, 2];
print(array2);
//関数オブジェクト
function fn() {
    console.log("fnが呼び出されました");
}
//関数fnをmyFunc変数に代入している
const myFunc = fn;
myFunc();
//関数式
//factorialは関数の外から呼び出せる名前
//innterFactは関数の外から呼び出せない名前
const factorial = function innerFact(n) {
    if (n === 0) {
        return 1;
    }
    //innerFactを再起的に呼びだしている
    return n * innerFact(n - 1);
};
console.log(factorial(3));
//仮引数の数と定義
const fnA = () => {};
const fnB = (x) => {};
const fnC = X => {};
const fnD = (x, y) => {};
//値の返し方
//次の2つの定義は同じ意味となる
const mulA = x => {
    return x * x;
};
const mulB = x => x * x;

const array3 = [1, 2, 3];
//1,2,3と順番に値が渡されコールバック関数が処理する
const doubleArray = array3.map(function (value) {
    return value * 2;
});
console.log(doubleArray);

const array4 = [1, 2, 3];
const output = (value) => {
    console.log(value);
};
array4.forEach(output);
//メソッド
const obj = {
    method: function () {
        return "this is method";
    }
};
console.log(obj.method());
//メソッドの短期記法
const obj2 = {
    method() {
        return "this is method";
    }
};
console.log(obj2.method());

//文と式
//1という評価値を表示
console.log(1);
//1+1という式の評価値を表示
console.log(1 + 1);
//式の評価値を変数に代入
const total = 1 + 1;
//関数式の評価値（関数オブジェクト）を変数に代入
const fn2 = function () {
    return 1;
}
//fn()という式の評価値を表示
console.log(fn2());
const isTrue = true;
// isTrueという式がif文の中に出てくる
if (isTrue) {}
// if文とブロック文の組み合わせ
if (true) {
    console.log("文1");
    console.log("文2");
}
// ブロックで終わらない文なので、セミコロンが必要
if (true) console.log(true);
// ブロックで終わる文なので、ゼミコロンが不要
if (true) {
    console.log(true);
}
// learn関数を宣言する関数宣言文
function learn() {}
// 関数式をread変数へ代入
const read = function () {}

function fn() {}
// fn(式)の評価値を代入する変数宣言の文
const read2 = fn;

//if文
if (true) {
    console.log("この処理は実行されます");
}
if (true) {
    console.log("この処理は実行されます");
}
const x = 42;
if (x > 10) {
    console.log("xは10より大きな値です");
}

if (true) {
    console.log("この行は実行されます");
}
if ("文字列") {
    console.log("この行は実行されます");
}
if (42) {
    console.log("この行は実行されます");
}
if (["配列"]) {
    console.log("この行は実行されます");
}
if ({
        name: "オブジェクト"
    }) {
    console.log("この行は実行されます");
}

if (false) {
    // この行は実行されません
}
if ("") {
    // この行は実行されません
}
if (0) {
    // この行は実行されません
}
if (undefined) {
    // この行は実行されません
}
if (null) {
    // この行は実行されません
}
const version = "ES6";
if (version === "ES5") {
    console.log("ECMAScript 5");
} else if (version === "ES6") {
    console.log("ECMAScript 2015");
} else if (version === "ES7") {
    console.log("ECMAScript 2016");
}
const num = 1;
if (num > 10) {
    console.log(`numは10より大きいです: ${num}`);
} else {
    console.log(`numは10以下です: ${num}`);
}
//西暦での現在の年は new Date().getFullYear();で取得
const year = new Date().getFullYear();
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(`${year}年はうるう年です`);
        } else {
            console.log(`${year}年はうるう年ではありません`);
        }
    } else {
        console.log(`${year}年はうるう年です`);
    }
} else {
    console.log(`${year}年はうるう年ではありません`);
}

const year2 = new Date().getFullYear();
if (year2 % 400 === 0) {
    console.log(`${year2}年はうるう年です`);
} else if (year2 % 100 === 0) {
    console.log(`${year2}年はうるう年ではありません`);
} else if (year2 % 4 === 0) {
    console.log(`${year2}年はうるう年です`);
} else {
    console.log(`${year2}年はうるう年ではありません`);
}
//switch文
const version2 = "ES6";
switch (version2) {
    case "ES5":
        console.log("ECMAScript 5");
        break;
    case "ES6":
        console.log("ECMAScript 2015");
        break;
    case "ES7":
        console.log("ECMAScript 2016");
        break;
    default:
        console.log("しらないバージョンです");
        break;
}
//上記をif文で記述すると
const version3 = "ES6";
if (version3 === "ES5") {
    console.log("ECMAScript 5");
} else if (version3 === "ES6") {
    console.log("ECMAScript 2015");
} else if (version3 === "ES7") {
    console.log("ECMAScript 2016");
} else {
    console.log("知らないバージョンです");
}
//breakを省略
const version4 = "ES6";
switch (version) {
    case "ES5":
        console.log("ECMAScript 5");
    case "ES6":
        console.log("ECMAScript 2015");
    case "ES7":
        console.log("ECMAScript 2016");
    default:
        console.log("しらないバージョンです");
}
function getECMScriptName(version2) {
    switch (version2) {
        case "ES5":
            return "ECMAScript 5";
        case "ES6":
            return "ECMAScript 2015";
        case "ES7":
            return "ECMAScript 2016"
        default:
            return "しらないバージョンです"
    }
}
//関数を実行して`return`された値を得る
// getECMAScriptName("ES6");

//while文
let x = 0;
console.log(`ループ開始前のxの値: ${x}`);
while (x < 10) {
    console.log(x);
    x += 1;
}
console.log(`ループ終了後のxの値: ${x}`);