Object.keys(obj).forEach(function(property){
    //use the property
})

Object.assign(Obj1, Obj2) // obj2 copy assigned to obj 1

var obj1 = {
    name: "Surveer",
    age: "31"
  }
  
  var obj2 = {
    name: "Amit",
    age: "32",
    town: "gaya"
  }
  
  Object.assign(obj1, obj2);
  
  console.log(obj1, obj2)
  /* 
  [object Object] {
  age: "32",
  name: "Amit",
  town: "gaya"
}
[object Object] {
  age: "32",
  name: "Amit",
  town: "gaya"
}
*/

console.log(obj1 === obj2) // false


var arr1 = [1, 2, 3];

var arr2 = arr1.slice(0); // returns new array with same copy of element

var tenStars = Array(10).join("*");
var newTenStars = "*".repeat(10);

var isIncluded = "hello world".includes("world");
//true
const endsWith = "hello world".endsWith("world");
// true
const startsWith = "hello world".startsWith("hello");
// true

var arr = [1, 20, 30, 5];

//[20, 30]
var nums = arr.filter((num)=>{ return num > 10; });


//returns first match number greater than 10, which is 20
var num = arr.find((num)=>{ return num > 10; });
//20
 

function trunc(x){
    return (x < 0? Math.ceil(x): Math.floor(x));
}

trunc(42.7); //42
trunc(-1.7); //-1

Math.trunc(-42.7);// -42

var i;
i++;
print(i); // NaN

print(i !== i);// true
getMatchedCSSRules.isNaN(i); // true

var i = 1/0;
i;//Infinity

print((i === Infinity || i === -Infinity)); // true

Number.isFinite(1);// true
Number.isFinite(i);// false
Number.isFinite("hello");// false

Number.isSafeInteger(1)// true
Number.isSafeInteger(1e100)// false

print((0.1 + 0.2 === 0.3));// false

Math.abs(0.1. + 0.2 - 0.3) < Number.EPSILON; // true

function print(...arr){
    console.log(arr);
}

var set = new Set([1, 2, 3, 3, 4, 5]);
print(set); //{1,2,3,4,5} Only unique

set.add(10)
set.entries();// return an iterator of all values
set.clear(); // clears all values
set.delete(3); // deletes particular item
set.has(3); // true
for(let value of set){
    print(value);
}

set.forEach(()=>{});
print(...set.keys());
print(...set.values());
print(...set); // [1,2,3,4,5]

print(...set.entries()); // [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]
//In index and value both are same


var map = new Map([
    ["key1" , 10]
]);

map.clear()
map.set("key3", 3)
map.entries()
map.has("key3")
map.get("key3")


var map = new Map();
var wMap = new WeakMap();

(function(){
  let a = {x: 12};
  let b = {y: 10};
  
  map.set(a, 1);
  wMap.set(b, 1);
  
}())

//Should garbage collected

print(...map.keys()) 
/* map holds the value. so still it has value
of a but we can't delete it as reference object gone
map.delete({x:12}); // can't do this
since a is not available can't delete until clear all
*/

print(...wMap.keys())
/* weak map doesn't hold the 
data reference if garbage collected
*/

wMap.set("hello", 1); 
// ERROR only can use object in weakmap as key



 
