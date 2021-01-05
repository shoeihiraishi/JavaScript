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

