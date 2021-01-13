//文字列
const double = "文字列";
console.log(double);
const single = '文字列';
console.log(single);
console.log(double === single);

const multiline = `1行目
2行目
3行目`;
console.log(multiline);

const str = "This book is \"js-primer\"";
console.log(str);

const multiline2 = "1行目\n2行目\n3行目";
console.log(multiline2);

const str2 = "a" + "b";
console.log(str2);

const name = "JavaScript";
console.log("Hello" + name + "!");

const name2 = "JavaScript";
console.log(`Hello${name}!`);

const str3 = "文字列";
console.log(str3[0]);
console.log(str3[1]);
console.log(str3[2]);

const str4 = "文字列";
console.log(str4[42]);

const str5 = "アオイ";
console.log(str5.charCodeAt(0).toString(16));
console.log(str5.charCodeAt(1).toString(16));
console.log(str5.charCodeAt(2).toString(16));

const str6 = String.fromCharCode(
    0x30a2,
    0x30aa,
    0x30a4
);
console.log(str6);

const strings = "赤・青・緑".split("・");
console.log(strings);

const str7 = "a  b  c   d";
const strings2 = str7.split(/\s+/);
console.log(strings2);

console.log("文字列".length);

console.log("".length);

console.log("文字列" === "文字列");
console.log("JS" === "ES");
console.log("文字列" === "文字");

console.log("A".charCodeAt(0));
console.log("B".charCodeAt(0));
console.log("A" > "B");
console.log("ABC" > "ABD");

const str8 = "ABCDE";
console.log(str8.slice(1));
console.log(str8.slice(1,5));
console.log(str8.slice(-1));
console.log(str8.slice(1,4));
console.log(str8.slice(4,1));

const str9 = "ABCDE";
console.log(str9.substring(1));
console.log(str9.substring(1,5));
console.log(str9.substring(-1));
console.log(str9.substring(1,4));
console.log(str9.substring(4,1));

const url = "https://example.com?param=1";
const indexOfQuery = url.indexOf("?");
const queryString = url.slice(indexOfQuery);
console.log(queryString);

const str10 = "にわにはにわにわとりがいる"
console.log(str10.indexOf("にわ"));
console.log(str10.lastIndexOf("にわ"));
console.log(str10.indexOf("未知のキーワード"));

const str11 = "JavaScript";
const serchWorld = "Script";
const index = str11.indexOf(serchWorld);
if (index !== -1) {
    console.log(`${serchWorld}が見つかりました`);
}else {
    console.log(`${serchWorld}は見つかりませんでした`);
}

const str12 = "にわにはにわにわとりがいる";
console.log(str12.startsWith("にわ"));
console.log(str12.startsWith("いる"));
console.log(str12.endsWith("にわ"));
console.log(str12.endsWith("いる"));
console.log(str12.includes("にわ"));
console.log(str12.includes("いる"));

const str13 = "ABCD123EFG";
const searchPattern = /\d{3}/;
console.log(str13.search(searchPattern));

const str14 = "ABC あいう DEF えお";
const alphabetsPattern = /[a-zA-Z]+/;
const results = str14.match(alphabetsPattern);
console.log(results.length);
console.log(results[0]);
console.log(results.index);
console.log(results.input);

//正規表現によるマッチした文字列の取得。。。より
