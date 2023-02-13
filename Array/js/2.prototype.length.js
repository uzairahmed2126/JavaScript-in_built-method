const clothing = ['shoes', 'shirts', 'socks', 'sweaters'];

console.log(clothing.length);
console.log(clothing);

const list1 = [1,2,3];
const list2 = new Array(6);
console.log(list1.length,list2);

const number=[1,2,3,4,5,6,7,8,9,10];
for(let i = 1;i<10;i++){
for(let j = 1; j<11;j++){
    console.log(number[i]*j);
}
console.log("\n");
}