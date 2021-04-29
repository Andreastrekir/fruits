let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log(fruits)
fruits.splice(0,1)
fruits.splice(3,0,"Kiwi")
fruits.shift(0);
fruits.sort();
fruits.reverse();

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

//console.log(moreFruits)
console.log(moreFruits[1][1][0])





