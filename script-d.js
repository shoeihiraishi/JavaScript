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