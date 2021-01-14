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

//正規表現によるマッチした文字列の取得
console.log("文字列" .match(/マッチしないパターン/));

const str15 = "ABC あいう DEF えお"
const alphabetsPattern2 = /[a-zA-Z]+/;
const results2 = str15.match(alphabetsPattern2);
console.log(results2.length);
console.log(results2.index);
console.log(results2.input);

const str16 = "ABC あいう DE えお";
const alphabetsPattern3 =/[a-zA-Z]+/g;
const resultsWithG = str16.match(alphabetsPattern3);
console.log(resultsWithG.length);
console.log(resultsWithG[0]);
console.log(resultsWithG[1]);
console.log(resultsWithG.index);
console.log(resultsWithG.input);

const str17 = "ABC あいう DE えお";
const alphabetsPattern4 = /[a-zA-Z]+/g;
const matchesIterator = str17.matchAll(alphabetsPattern4);
for (const match of matchesIterator) {
    console.log(`match: "${match[0]}", index: ${match.index}, input: "${match.input}"`);
}

const pattern = /ECMAScript (\d+)/;
const [all,capture1] = "ECMAScript 6".match(pattern);
console.log(all);
console.log(capture1);

const pattern2 = /ES(\d+)/g;
const matchesIterator2 = "ES2015、ES2016、ES2017".matchAll(pattern2);
for (const match of matchesIterator2) {
    console.log(`match: "${match[0]}", capture1: ${match[1]}, index: ${match.index}, input: "${match.input}"`);
}

const str18 = "ABC あいう DE えお";
const alphabetsPattern5 = /[a-zA-Z]+/;
const results3 = alphabetsPattern5.exec(str18);
console.log(results3.length);
console.log(results3[0]);
console.log(results3.input);

const str19 = "ABC あいう DE えお";
const alphabetsPattern6 = /[a-zA-Z]+/g;
console.log(alphabetsPattern6.lastIndex);
const result1 = alphabetsPattern6.exec(str19);
console.log(result1[0]);
console.log(alphabetsPattern6.lastIndex);
const result2 = alphabetsPattern6.exec(str19);
console.log(result2[0]);
console.log(alphabetsPattern6.lastIndex);
const result3 = alphabetsPattern6.exec(str19);
console.log(result3);
console.log(alphabetsPattern6.lastIndex);

const str20 = "ABC あいう DE えお";
const alphabetsPattern7 = /[a-zA-Z]+/g;
let matches;
while (matches = alphabetsPattern7.exec(str20)) {
    console.log(`match: ${matches[0]}, index: ${matches.index}, lastIndex: ${alphabetsPattern7.lastIndex}`);
}

const str21 = "にわにはにわにわとりがいる";
console.log(/^にわ/.test(str21));
console.log(/^いる/.test(str21));
console.log(/にわ$/.test(str21));
console.log(/いる$/.test(str21));
console.log(/にわ/.test(str));
console.log(/いる/.test(str));

const str22 = "/正規表現のような文字列/";
const regExpLikePattern = /^\/.*\/$/;
console.log(regExpLikePattern.test(str22));
const isRegExpLikeString = (str22) => {
    return str22.startsWith("/") && str.endsWith("/");
}
const str23 = "文字列";
const newStr = str23.replace("文字", "");
console.log(newStr);

const str24 = "にわにはにわにわとりがいる";
console.log(str24.replace("にわ", "niwa"));
console.log(str24.replace(/にわ/, "niwa"));
console.log(str24.replace(/にわ/g, "niwa"));

function toDateJa(dateString) {
    return dateString.replace(/(\d{4})-(|d{2})-(\d{2})/,(all,year,month,day) => {
        return `${year}年${month}月${day}日`;
    });
}
console.log(toDateJa("本日は晴天なり"));
console.log(toDateJa("今日は2017-03-01です"));

function getResource(baseURL, pathname) {
    const url = baseURL + pathname;
    console.log(url);
}
    const baseURL = "http://example.com/resouces";
    const pathname = "/example.js";
    getResource(baseURL, pathname);

function baseJoin(baseURL, pathname) {
    const stripSlashBaseURL = baseURL.replace(/\/$/, "");
    return stripSlashBaseURL + pathname;
}
function getResource(baseURL2, pathname2) {
    const url2 = baseJoin(baseURL2, pathname2);
    console.log(url2);}
const baseURL2 = "http://example.com/resouces/";
const pathname2 = "/example.js";
getResource(baseURL2, pathname2);

function tag(str) {
    console.log(str);
}
tag(`template ${0} literal ${1}`);

function tag(strings, ...values) {
    console.log(strings);
    console.log(values);
}
tag`template ${0} literal ${1}`;

function stringRaw(strings, ...values) {
    return strings.reduce((result, str, i) => {
        console.log([result, values[i - 1], str]);
        return result + values[i - 1] + str;
    });
}
console.log(stringRaw`template ${0} literal ${1}`);

console.log(String.raw`template ${0} literal ${1}`);

function escapeURL(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + encodeURIComponent(values[i - 1]) + str;
    });
}

const input = "A&B";
const escapedURL = escapeURL`https://example.com/search?q=${input}&sort=desc`;
console.log(escapedURL);