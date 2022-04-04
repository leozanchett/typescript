function greet(name?: string) {
   console.log(`Hello, ${name|| 'Anonymous'}!`);
 }
  
 greet(); // Prints: Hello, Anonymous!


let dinner: string[] = ['Chicken Pot Pie', 'Brisket', 'Spaghetti'];
let lunch: string[] = ['Sandwich', 'Soup', 'Bread']

let todaysMenu: string[][] = [['Cereal', 'Toast'] , lunch];
console.log(todaysMenu[1]);
console.log(...lunch);