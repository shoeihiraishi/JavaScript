//オブジェクト
const name ="名前";
//nameというプロパティ名でnnameの変数を値に設定したオブジェクト
const obj = {
    name: name
};
console.log(obj);

const obj2 = new Object();
console.log(obj2);

const obj3 = {
    key: "value"
};
//ドット記法で参照
console.log(obj3.key);
//ブラケット記法で参照
console.log(obj3["key"]);

const obj4 = {
    key: "value",
    123: 456,
    "my-key": "my-value"
};
console.log(obj4["key"]);
console.log(obj4[123]);
console.log(obj4["my-key"]);

const languages = {
    ja: "日本語",
    en: "英語"
};
const myLang = "ja";
console.log(languages[myLang]);

//オブジェクトと分割代入
// const ja = languages.ja;
// const en = languages.en;
// console.log(ja);
// console.log(en);

const { ja, en } = languages;
console.log(ja);
console.log(en);

//プロパティの追加
obj.key = "value";
console.log(obj.key);

const key = "key-string";
obj[key] = "value of key";
console.log(obj[key]);

// Computed Propertyで`key`の評価結果 "key-string" をプロパティ名に利用
const obj5 = {
    [key]: "value"
};
console.log(obj5[key]);

//プロパティの削除
const obj6 = {
    key1: "value1",
    key2: "value2"
};
delete obj6.key1;
console.log(obj6);

"use strict";
const object = Object.freeze({ key: "value" });
//freezeしたオブジェクトにプロパティを追加や変更できない
object.key = "value";

const obj8 = {
    key: "value"
};
//keyプロパティがundifinedでないからプロパティが存在する
if (obj8.key !== undefined) {
    //keyプロパティが存在するときの処理
    console.log("keyプロパティの値はundefinedではない");
}

//プロパティの存在確認 in演算子を使う
const obj9 = { key: undefined };
//keyプロパティを持っているならtrue
if ("key" in obj) {
    console.log("keyプロパティは存在する");
}

//プロパティの存在確認 hasOwnPropertyメソッド
const obj10 = { key: "value" };
//objがkeyプロパティを持っているならtrue
if (obj10.hasOwnProperty("key")) {
    console.log("objectはkeyプロパティを持っている");
}

//optional chaining演算子
function printWidgetTitle(widget) {
    if (widget.window !== undefined && widget.window.title !== undefined) {
        console.log(`ウィジェットのタイトルは${widget.window.title}です`);
    } else {
        console.log("ウィジェットのタイトルは未定義です");
    }
}
printWidgetTitle({
    window: {
        title: "Book Viewer"
    }
});
printWidgetTitle({
});

function printWidgetTitle(widget) {
    const title = widget?.window?.title ?? "未定義";
    console.log(`ウィジェットのタイトルは${title}です`);
}
printWidgetTitle({
    window: {
        title: "Book Viewer"
    }
});
printWidgetTitle({
});

const languages2 = {
    ja: {
        hello: "こんにちは"
    },
    en: {
        hello: "Hello"
    }
};
const langJapanese = "ja";
const langKorean = "ko";
const messageKey = "hello";
console.log(languages2?.[langJapanese]?.[messageKey]);
console.log(languages2?.[langKorean]?.[messageKey]);

//toStringメソッド
const obj11 = { key: "value" };
console.log(obj11.toString());
console.log(String(obj11));
//独自のtoStringメソッドを定義
const customObject = {
    toString() {
        return "custom value";
    }
};
console.log(String(customObject));

const obj12 = {};
const keyObject1 = { a: 1 };
const keyObject2 = { b: 2 };
obj12[keyObject1] = "1";
obj12[keyObject2] = "2";
console.log(obj12);

const obj13 = {};
//symbolは例外的に文字列かされず扱える
const symbolKey1 = Symbol("シンボル1");
const symbolKey2 = Symbol("シンボル2");
obj13[symbolKey1] = "1";
obj13[symbolKey2] = "2";
console.log(obj13[symbolKey1]);
console.log(obj13[symbolKey2]);

//オブジェクトの静的メソッド
const obj14 = {
    "one": 1,
    "two": 2,
    "three": 3
};
console.log(Object.keys(obj14));
console.log(Object.values(obj14));
console.log(Object.entries(obj14));

const obj15 = {
    "one": 1,
    "two": 2,
    "three": 3
};
const keys = Object.keys(obj15);
keys.forEach(key => {
    console.log(key);
});

//オブジェクトのマージ
const objectA = { a: "a" };
const objectB = { b: "b" };
const merged = Object.assign({}, objectA, objectB);
console.log(merged);

const objectA2 = { a: "a" };
const objectB2 = { b: "b" };
const merged2 = Object.assign(objectA2, objectB2);
console.log(merged2);
console.log(objectA2);
console.log(merged2 === objectA2);

const objectA3 = { version: "a" };
const objectB3 = { version: "b" };
const merged3 = Object.assign({}, objectA3, objectB3);
console.log(merged3);

//オブジェクトのspread構文でのマージ
const objectA4 = { a: "a" };
const objectB4 = { b: "b" };
const merged4 = {
    ...objectA4,
    ...objectB4
};
console.log(merged4);

// `version`のプロパティ名が被っている
const objectA5 = { version: "a" };
const objectB5 = { version: "b" };
const merged5 = { 
    ...objectA5,
    ...objectB5,
    other: "other"
};
console.log(merged5);

//オブジェクトの複製
const shallowClone2 = (obj20) => {
    return Object.assign({}, obj20);
};
const obj21 = { a: "a" };
const cloneObj = shallowClone2(obj21);
console.log(cloneObj);
console.log(obj21 === cloneObj);

