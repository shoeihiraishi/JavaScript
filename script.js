1;
console.log(1);
console.log(1 + 1);
const total = 42 + 42;
console.log(total);
console.log(typeof true);
console.log(typeof 42);
//２進数リテラル binary
console.log(0b1111);
//8進数リテラル
console.log(0o777);
//非推奨な8進数の書き方
console.log(0777);
//16進数リテラル
console.log(0xFF);
//不動小数点リテラル
console.log(.123);
//BIGINT
console.log(Number.MAX_SAFE_INTEGER);
//テンプレートリテラル
const str = "文字列"
console.log(`これは${str}です`);
//nullリテラル
const foo = null;
console.log(foo);
//objectリテラル
const obj = {
    "key" : "value"
};
//ドット記法
console.log(obj.key);
//ブラケット記法
console.log(obj["key"]);
var object = {
    123 : "value"
};
//ok ブラケット記法 ng ドット記法
console.log(object["123"]);
//配列リテラル
const array = ["index:0" , "index:1" , "index:2"];
console.log(array[0]);
console.log(array[1]);
//正規表現リテラル
const numberRegExp = /\d+/;//1文字以上の数字にマッチする正規表現
console.log(numberRegExp.test("123"));
// 文字列をラップしたStringラッパーオブジェクト
// const str2 = new String("文字列");
// console.log(typeof str2);
// console.log(str2.length);
//プリミティブ型の文字列データ
const str3 = ("文字列");
//プリミティブ型の文字列は"String"型のデータ
console.log(typeof str3);
//プリミティブ型の文字列も'length'プロパティを参照できる
console.log(str3.length);
//Math.powメソッド
console.log(Math.pow(2,4));
//NaN
console.log(NaN === NaN);
console.log(typeof NaN);
console.log(Number.isNaN(NaN));
//ビット演算子
console.log(0b0000000000000000000000000001001);
console.log((9).toString(2));
//ビット論理積 AND演算
console.log(9 & 15);
console.log(0b1111 & 0b1001);
//ビット論理和 OR演算
console.log(9 | 15);
console.log(0b1111 | 0b1001);
//ビット排他的論理和 XOR演算
console.log(9 ^ 15);
console.log(0b1111 ^ 0b1001);
//ビット否定
console.log(~15);
console.log(~0b1111);
//否定演算子の演算以外での使用
const str4　= "森森本森森";
//見つかった場合はインデクスを返す
//JSのインデックスは0から始まるので2を返す
console.log(str4.indexOf("本"));
//見つからなかった場合は-1を返す
console.log(str4.indexOf("火"));
const str5 = "森森木森森";
// indexOfメソッドは見つからなかった場合は-1を返す
if (str5.indexOf("木") !== -1) {
    console.log("木を見つけました");
}
// 否定演算子（`~`）で同じ動作を実装
// (~(-1)) は 0 となるため、見つからなかった場合はif文の中身は実行されない
if (str5.indexOf("木")) {
    console.log("木を見つけました");
}
//左シフト演算子
console.log(9 << 2);
console.log(0b1111 << 2);
//右シフト演算子
console.log((-9) >> 2);
//ゼロ埋め右シフト演算子
console.log((-9) >>> 2);
//分割代入
const array2 = [1,2];
const [a,b] = array2;
console.log(array2[0]);
console.log(array2[1]);
const obj2 = {
    "key" : "value"
};
const key = obj2;
console.log(key);
//AND演算子
console.log(true && "右辺の値");
console.log(false && "右辺の値");
const value = "str"
if (typeof value === "string" && value === "str") {
    console.log(`${value} is string value`);
}
// if文のネストで書いた場合と結果は同じ
if (typeof value === "string") {
    if (value === "str") {
        console.log(`${value} is string value`);
    }
}
//OR演算子
console.log(true || "右辺の値");
console.log(false || "右辺の値");
const value2 = 1;
if (value2 === 0 || value2 === 1 ){
    console.log("valueは1または0です");
}
//NOT演算子
console.log(!false);
console.log(!true);
const str6 = "";
console.log(!!str6);
//三項演算子
const valueA = true ? "A" : "B";
console.log(valueA);
const valueB = false ? "A" : "B";
console.log(valueB);

function addPrefix(text,prefix) {
    const pre = typeof prefix === "string" ? prefix : "デフォルト:";
    return pre + text;
}
console.log(addPrefix("文字列"));
console.log(addPrefix("文字列","カスタム"));

function addPrefix(text,prefix) {
    let pre = "デフォルト:";
    if (typeof prefix === "#string") {
        pre = prefix;
    }
    return pre + text;
}
console.log(addPrefix("文字列"));
console.log(addPrefix("文字列","カスタム"));
//グループ化演算子
const aa = 1;
const bb = 2;
const cc = 3;
console.log(aa + bb * cc);
console.log((aa + bb) * cc);
//暗黙的な型変換
console.log(1 === "1");
console.log(1 == "1");
console.log(1 + true);
// 異なる型である場合に暗黙的な型変換が行われる
console.log(1 == "1");
console.log(0 == false);
console.log(10 == ["10"]);
//常に厳密等価演算子を使用する
console.log(1 === "1");
console.log(0 === false);
console.log(10 === ["10"]);

console.log(1 + "2");
// 演算過程で次のように暗黙的な型変換が行われる
console.log("1" + "2");

console.log(1 - "2");
// 演算過程で次のように暗黙的な型変換が行われる
console.log(1 - 2);

const x=1 , y="2" , z=3;
console.log(x + y + z);
console.log(y + x + z);
console.log(z + x + y);

console.log(Boolean("string"));
console.log(Boolean(1));
console.log(Boolean({}));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
//Stringコンストラクター
console.log(String(1));
console.log(String("str"));
console.log(String(true));
console.log(String(null));
console.log(String(undefined));
console.log(String(Symbol("シンボルの説明文")));
//プリミティブ型でない値の場合
console.log(String([1 , 2 , 3]));
console.log(String({key : "value"}));
console.log(String(function(){}));

console.log("文字列と" + String(Symbol("シンボルの説明")));

//ユーザー入力を文字列として受け取る
const input = window.prompt("数字を入力してください" , "42");
//文字列を数値に変換する
const num = Number(input);
console.log(typeof num);
console.log(num);

//"1"をパースして10進数として取り出す
console.log(Number.parseInt("1" , 10));
//余計な文字は無視してパースした結果を返す
console.log(Number.parseInt("42px" , 10));
console.log(Number.parseInt("10.5" , 10));
//文字列をパースして浮動小数点数として取り出す
console.log(Number.parseFloat("1"));
console.log(Number.parseFloat("42.5px" , 10));
console.log(Number.parseFloat("10.5" , 10));
//数字ではない為、数値へは変換できない
console.log(Number.parseInt("文字列"));
//未定義の値はNaNになる
console.log(Number.parseFloat(undefined));

const userInput = "任意の文字列";
const num2 = Number.parseInt(userInput , 10);
if (!Number.isNaN(num2)){
    console.log("NuNではない値にパースできた" , num2);
}
const xx = 10;
const yy = x + NaN;
const zz = y + 20;
console.log(xx);
console.log(yy);
console.log(zz);
console.log(typeof NaN);
function isNaN(x){
    return x !== x;
}
console.log(isNaN(1));
console.log(isNaN("str"));
console.log(isNaN({}));
console.log(isNaN([]));
console.log(isNaN(NaN));

console.log(Number.isNaN(NaN));

// 任意の個数の数値を受け取り、その合計値を返す関数
function sum(...values) {
    return values.reduce((total, value) => {
        return total + value;
    }, 0);
}
const x2 = 1, z2 = 10;
let y2;
console.log(sum(x2, y2, z2));

// /**
//  * 数値を合計した値を返します。
//  * 1つ以上の数値と共に呼び出す必要があります。
//  * @param {...number} values
//  * @returns{number}
//  *
//  **/
// function sum(...values) {
//     return values.reduce((total, value) => {
//         //値がNumber型ではない場合に、例外を投げる
//         if (typeof value !== "number") {
//             throw new Error(`${value}はNumber型ではありません`);
//         }
//         return total + Number(value);
//     }, 0);
// }
// const x3 = 1, z3 = 10;
// let y3; //`y`はundefined
// console.log(x3, y3, z3);
// //Number型でない`y`を渡しているため例外が発生する
// console.log(sum(x3, y3, z3));

//空文字列かどうかを判定
function isEmptyString(str) {
    //`str`がfalsyな値なら、‘isEmptyString‘関数は`true`を返す
    return !Boolean(str);
}
//空文字列の場合は、trueを返す
console.log(isEmptyString(""));
//falsyな値の場合は、trueを返す
console.log(isEmptyString(0));
//undefinedの場合は、trueを返す
console.log(isEmptyString());

//空文字列かどうかを判定
function isEmptyString(str) {
    //String型でlengthが0の値の場合はtrueを返す
    return typeof str === "string" && str.length === 0;
}
console.log(isEmptyString(0));
console.log(isEmptyString());


