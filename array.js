let colors = ['red' , 'blue', 'green'];

//yellow was added
colors.push("yellow");
console.log(colors)

//yellow was removed
colors.pop();
console.log(colors);

// . map double
let numbers = [10,20,30,40,50];
let doubled = numbers.map(n => n*2);
console.log (doubled);

//ages
let ages =[15,21,17,30,12];
let adults = ages.filter(age => age >= 18);
console.log(adults)

//greetings
let names =["anna", "ben","claire"];
names.forEach(name => console.log(`Hello, ${name}!`));

//it returns 12
let scores =[2,4,6]
let total = scores.reduce((acc,val) => acc + val, 0);
console.log(total);

//it returns true
console.log(colors.includes('green'))

//indexof it returns 1
let items = ["pen" , "book" , "laptop"];
console.log(items.indexOf("book"));

//the return is 42
let mixed = [1 , "apple" , true ,42];
let firstOverTen = mixed.find(item => typeof item === "number" && item > 10)
console.log(firstOverTen);

//they connecr
let fruitList = ['apple', 'banana' , 'cherry'];
console.log(fruitList.join(", "))