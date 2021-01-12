//while文
let x = 0;
console.log(`ループ開始前のxの値: ${x}`);
while (x < 10) {
    console.log(x);
    x += 1;
}
console.log(`ループ終了後のxの値: ${x}`);
//do-while文
const y = 1000;
do {
    console.log(y);
} while (y < 10);
//for文
let total = 0;//totalの初期値は0
//for文の実行フロー
//iを0で初期化
//iが10未満（条件式を満たす）ならfor文の処理を実行
//iに1を足し、ふたたび条件式の判定へ
for (let i = 0; i < 10; i++) {
    total += i + 1;
}
console.log(total);

function sum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}
console.log(sum([1, 2, 3, 4, 5]));
//配列のforEachメソッド
const array = [1, 2, 3];
array.forEach(currentVlue => {
    //配列の要素ごとに呼び出される処理
});
const array2 = [1, 2, 3];
array2.forEach(currentValue => {
    console.log(currentValue);
});

function sum(numbers) {
    let total = 0;
    numbers.forEach(num => {
        total += num;
    });
    return total;
}
sum([1, 2, 3, 4, 5]);
//break文
while (true) {
    break; // *1 へ
}
// *1 次の文
const numbers = [1, 5, 10, 15, 20];
//偶数があるかどうか
let isEventIncluded = false;
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    if (num % 2 === 0) {
        isEvenIncluded = true;
        break;
    }
}
console.log(isEvenIncluded);

//引数のnumが偶数ならtrueを返す
function isEven(num) {
    return num % 2 === 0;
}
//引数のnumbersに偶数が含まれているならtrueを返す
function isEvenIncluded2(numbers) {
    let isEvenIncluded2 = false;
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (isEven(num)) {
            isEvenIncluded2 = true;
            break;
        }
    }
    return isEvenIncluded;
}
const array3 = [1,5,10,15,20];
console.log(isEvenIncluded2(array3));





// function isEven(num) {
//     return num % 2 === 0;
// }
// function isEvenIncluded(numbers) {
//     for (let i = 0; i < numbers.length; i++) {
//         const num = numbers[i];
//         if (isEven(num)) {
//             return true;
//         }
//     }
//     return false;
// }
// const numbers = [1, 5, 10, 15, 20];
// console.log(isEvenIncluded(numbers)); // => true
// 実行


function isEven(num) {
    return num % 2 === 0;
}

function isEvenIncluded3(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i];
        if (isEven(num)) {
            return true;
        }
    }
    return false;
}
const numbers4 = [1,5,10,15,20];
console.log(isEvenIncluded3(numbers4));
//配列のsomeメソッド
function isEven(num) {
    return num % 2 === 0;
}
const numbers5 = [1,5,10,15,20];
console.log(numbers5.some(isEven));

//continue文
//numberが偶数ならtrueを返す
function isEven(num) {
    return num % 2 === 0;
}
//numbersに含まれている遇すだけを取り出す
function filterEven(numbers) {
    const results = [];
    for (let i = 0; i < numbers.length; i++) {
        const num3 = numbers[i];
        //偶数でないなら、次のループへ
        if (!isEven(num3)) {
            continue;
        }
        //偶数をrexultsに追加
        results.push(num3);
    }
    return results;
}
const array5 = [1,5,10,15,20];
console.log(filterEven(array));

//配列のフィルターメソッド
function isEven(num) {
    return num % 2 === 0;
}
const array6 = [1, 5, 10, 15, 20];
console.log(array6.filter(isEven));

//for...in文
const obj = {
    "a": 1,
    "b": 2,
    "c": 3
};
//ループのたびに毎回新しいいブロックに変数keyが定義されるため、再手木エラーが発生しない
for (const key in obj) {
    const value = obj[key];
    console.log(`key:${key}, value:${value}`);
}

Object.keys(obj).forEach(key => {
    const value2 = obj[key];
    console.log(`key:${key}, value:${value2}`);
});

const numbers7= [5, 10];
let total2 = 0;
for (const num in numbers7) {
    total2 += num;
}
console.log(total2);

//for...of文
const array7 = [1, 2, 3];
for (const value of array7) {
    console.log(value);
}
const str = "吉野家";
for (const value of str) {
    console.log(value);
}
function sum(numbers) {
    return numbers,reduce((total, num) => {
        return total + num;
    }, 0);//初期値が0
}
sum([1, 2, 3, 4, 5]);


function sum4(numbers) {
    return numbers.reduce((total, num) => {
        return total + num;
    }, 0); // 初期値が0
}

sum4([1, 2, 3, 4, 5]); // => 15