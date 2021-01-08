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