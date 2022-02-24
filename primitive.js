/* 
primitive - simple,including one value like a=10,primary type
1.number
2.string
3.boolean
4.undefined
5.null
6.object
7.symbol

non-primitive - 1.object
*/
// primitive data type
let a= 'hello';
let b = a;
console.log(a,b);
 a = 'gello';
console.log(a,b);

// non-primitive
const x = {job:'web developer'};
const y = x;
console.log(x,y);
x.job = 'web designer';
console.log(x,y);
