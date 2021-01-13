//プロトタイプオブジェクト
// `Object.prototype`オブジェクトに`toString`メソッドの定義がある
console.log(typeof Object.prototype.toString);

const obj = {
    "key": "value"
};
console.log(obj.toString === Object.prototype.toString);
console.log(obj.toString());

// オブジェクトのインスタンスにtoStringメソッドを定義
const customObject = {
    toString() {
        return "custom value";
    }
};
console.log(customObject.toString());

const obj2 = {};
console.log(obj2.hasOwnProperty("toString"));
console.log("toString" in obj2);

// オブジェクトのインスタンスにtoStringメソッドを定義
const obj3 = {
    toString() {
        return "custom value";
    }
};
console.log(obj3.hasOwnProperty("toString"));
console.log("toString" in obj3);

//オブジェクトの継承元を明示するObject.createメソッド
const obj4 = Object.create(Object.prototype);
console.log(obj4.hasOwnProperty === Object.prototype.hasOwnProperty);

//ArrayもObjectを継承している
const Array = function() {};
Array.prototype = Object.create(Object.prototype);
const array = Object.create(Array.prototype);
console.log(array.hasOwnProperty === Object.prototype.hasOwnProperty);

//Object.prototypeを継承しないオブジェクト
const obj5 = Object.create(null);
console.log(obj5.hasOwnProperty);

// 空オブジェクトを作成
const obj6 = {};
console.log(obj6["toString"]);
const mapLike = Object.create(null);
console.log(mapLike["toString"])

//配列
const emptyArray = [];
const numbers = [1, 2, 3];
//2次元配列（配列の配列）
const matrix = [
    ["a","b"],
    ["c","d"]
];
console.log(matrix[0][0]);

const array3 = ["one", "two", "three"];
console.log(array3[0]);

console.log(array3.length);
console.log(array3[array3.length - 1]);

const array4 = ["one", "two", "three"];
console.log(array4[100]);

const obj7 = {
    "0": "one",
    "1": "two",
    "2": "three",
    "length": 3
};
console.log(obj7[100]);

//未定義の箇所が1つ含まれる疎な配列
const sparseArray = [1,, 3];
console.log(sparseArray.length);
console.log(sparseArray[1]);

// const obj8 = {};
// const array5 = [];
// console.log(Array.isArray(obj8));
// console.log(Array.isArray(array5));

const array6 = [];
console.log(typeof array6);
const typedArray = new Int8Array(8);

//配列と分割代入
const array7 = ["one", "two", "three"];
const [first, second, third] = array7;
console.log(first);
console.log(second);
console.log(third);

//要素としてundefinedを持つ密な配列
const denseArray = [1, undefined, 3];
//要素そのものがない疎な配列
const sparseArray2 = [1,, 3];
console.log(denseArray[1]);
console.log(sparseArray2[1]);

const denseArray2 = [1, undefined, 3];
const sparseArray3 = [1,, 3];
//要素自体はundefined値が存在する
console.log(denseArray2.hasOwnProperty(1));
//要素自体がない
console.log(sparseArray3.hasOwnProperty(1));

const array9 = ["java", "JavaScript", "Ruby"];
const indexOfJS = array9.indexOf("JavaScript");
console.log(indexOfJS);
console.log(array9[indexOfJS]);
// console.log(array9[indexOf("JS")]);

const obj8 = { key: "value" };
const array10 = ["A", "B", obj8];
console.log(array10.indexOf({ key: "value" }));
console.log(obj8 === {key: "value"});
console.log(array10.indexOf(obj8));

// colorプロパティを持つオブジェクトの配列
const colors = [
    { "color": "red" },
    { "color": "green" },
    { "color": "blue" }
];
const indexOfBlue = colors.findIndex((obj) => {
    return obj.colors === "blue";
});
console.log(indexOfBlue);
console.log(colors[indexOfBlue]);

const array11 = ["A", "B", "C", "D", "E"];
//インデックス１から４の範囲を取り出す
console.log(array11.slice(1,4));
//第二引数を省略した場合は第一引数から末尾の要素までを取り出す
console.log(array11.slice(1));
//マイナスを指定すると後ろから数えた位置となる
console.log(array11.slice(-1));
//第一引数 > 第二引数の場合、常に空配列を返す
console.log(array11.slice(4, 1));

const array12 = ["Java", "JavaScript", "Ruby"];
//indexOf メソッドは含まれていないときのみ-1を返す事を利用
const indeOfJS = array12.indexOf("JavaScript");
if (indexOfJS !== -1) {
    console.log("配列にJavaScriptが含まれている");
}

if (array12.includes("JavaScript")) {
    console.log("配列にJavaScriptが含まれている")
}

//colorプロパティを持つオブジェクトの配列
const colors3 = [
    {"color": "red"},
    {"color": "green"},
    {"color": "blue"}
];
//colorプロパティがblueのオブジェクトがあるかどうか
const isIncludedBlueColor = colors3.some((obj) => {
    return obj.color === "blue";
});
console.log(isIncludedBlueColor);

const array13 = ["A", "B", "C"];
array13.push("D");
console.log(array13);
const poppedItem = array13.pop();
console.log(poppedItem);
console.log(array13)

const array14 = ["A", "B", "C"];
array14.unshift("S");
console.log(array);
const shiftedItem = array14.shift();
console.log(shiftedItem);
console.log(array14);

const array16 = ["A", "B", "C"];
const newArray3 = array16.concat("新しい要素");
console.log(newArray3);

const array17 = ["A", "B", "C"];
const newArray4 = ["X","Y","Z", ...array17];
const newArrayConcat = ["X", "Y","Z"].concat(array17);
console.log(newArray4);
console.log(newArrayConcat);

const array18 = [[["A"], "B"], "C"];
console.log(array18.flat());
console.log(array18.flat(1));
console.log(array18.flat(2));
console.log(array18.flat(Infinity));

const array19 = ["a", "b", "c"];
//1番目からいつの要素bを削除
array19.splice(1,1);
console.log(array19);
console.log(array19.length);
console.log(array19[1]);
//全て削除
array19.splice(0, array19.length);
console.log(array19.length);

const array20 = [1, 2, 3];
array20.length = 0;
console.log(array20);

let array21 = [1, 2, 3];
console.log(array21.length);
//新しい配列で変数を上書き
array21 = [];
console.log(array21.length);

const myArray = ["A", "B", "C"];
const result = myArray.push("D");
console.log(result);
console.log(myArray);

const myArray2 = ["A", "B", "C"];
const newArray6 = myArray2.concat("D");
console.log(newArray6);
console.log(myArray2 === newArray6);

function removeAtIndex(array, index) {
    array.splice(index, 1);
    return array;
}
const array22 = ["A", "B", "C"];
const newArray10 = removeAtIndex(array22, 1);
console.log(newArray10);
console.log(array22);

const myArray11 = ["A", "B", "C"];
const copiedArray = myArray11.slice();
myArray11.push("D");
console.log(myArray11);
console.log(copiedArray);
console.log(copiedArray === myArray11);

// `array`の`index`番目の要素を削除した配列を返す関数
function removeAtIndex(array, index) {
    const copiedArray2 = array.slice();
    copiedArray2.splice(index, 1);
    return copiedArray2;
}
const array23 = ["A", "B", "C"];
const newArray12 = removeAtIndex(array23, 1);
console.log(newArray12);
console.log(array23);

const array24 = [1, 2, 3];
array24.forEach((currentValue, index, array24) => {
    console.log(currentValue, index, array24);
});

const array25 = [1, 2, 3];
const newArray13 = array25.map((currentValue, index, array25) => {
    return currentValue * 10;
});
console.log(newArray13);
console.log(array25 !== newArray13);