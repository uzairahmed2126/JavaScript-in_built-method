// The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.

// Multi way to get first index value.
function getFirstValue(p1){
  //  return console.log(p1[0])
  // return console.log(p1.at([0]))
  // return console.log(p1.shift())
  // return console.log(p1.slice(0,1));
}
getFirstValue([1, 2, 3.3])

getFirstValue([80, 5, 100]) 

getFirstValue([-500, 0, 50])



const array = [13,3,3,34,2];
let i = 0;
// Now i use the tamplet litrels
console.log(`index is ${i} element is ${array.at((i))}`);


