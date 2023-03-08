const fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"

let num = [123,23,324,123];
console.log(num.length,num[0],num[1],num[2],num[3]);

function arr(ind){
    return console.log(ind.length);
}

arr([45,64,43,543,23])
arr([45,45]);


// syntax of array cunstructor
// new Array(element0, element1, /* … ,*/ elementN)
// new Array(arrayLength)

// Array(element0, element1, /* … ,*/ elementN)
// Array(arrayLength)


function is_array(p1){
    return Array.isArray(p1);


}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
// false
// true


function array_Clone(p1){
    return p1;
}
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]



// The first function takes an array arr and an optional parameter n, which specifies the number of elements to return. If n is not provided, it defaults to 1.
// The function first checks if n is less than 0. If it is, an empty array is returned because we cannot return a negative number of elements. If n is 0 or greater, we use the slice method to return the first n elements of the array.
function first(arr, n=1) {
    if (n < 0) {
      return [];
    }
    return arr.slice(0, n);
  }
  
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// [7]
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// A JavaScript array is initialized with the given elements, except in the case where a single argument is passed to the Array constructor and that argument is a number (see the arrayLength parameter below). Note that this special case only applies to JavaScript arrays created with the Array constructor, not array literals created with the bracket syntax.