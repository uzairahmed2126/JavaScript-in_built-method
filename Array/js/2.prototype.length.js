const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
console.log(clothing);

const list1 = [1,2,3];
const list2 = new Array(6);
console.log(list1.length,list2);

const num=[1,2,3,4,5,6,7,8,9,10];
for(let i = 1;i<10;i++){
for(let j = 1; j<11;j++){
    console.log(num[i]*j);
}
console.log("\n");
}
const arr = [1, 2];
console.log(arr);
// [ 1, 2 ]

arr.length = 5; // set array length to 5 while currently 2.
console.log(arr);
// [ 1, 2, <3 empty items> ]

arr.forEach((i) => console.log(i));
// 1
// 2

let number = [1,2,3,4,5];
// let length = number.length;
// console.log(length)
for(let i=0;i<=length;i++){
    number[i] *=2;
    console.log(number)

}

const numbers = [1, 2, 3, 4, 5];

if (numbers.length > 3) {
//   numbers.length = 3;
     numbers.length=5;
}

console.log(numbers); // [1, 2, 3]
console.log(numbers.length); // 3
// console.log(numbers[3]); // undefined; the extra elements are deleted
console.log(numbers.length);

let years = ["2"];
console.log(years["2"] !== years["02"]);

// let fruits=([5]("mango"));
let fruits=[1];
fruits[1]="mango";
console.log(fruits); // 'mango'
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length); // 6
