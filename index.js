//first
function challengeOne(message) {
    return message.split(" ").length;
}


let message = "There is no war in Ba Sing Se";
console.log("Word count:", challengeOne(message));
// 2nd

let countries = ['China', 'Japan', 'South Korea', 'Vietnam', 'Malaysia'];
let capital = ['Beijing', 'Tokyo', 'Seoul', 'Hanoi', 'Kuala Lumpur'];

for (let i = 0; i < countries.length; i++) {
    console.log("Your country :"+ countries[i] + "has the capital named :" + capital[i]);
}

//3rd
let randomizer = Math.floor(Math.random() * 4); 

let fate;

if (randomizer === 0) {
    fate = "A certain victory";
} else if (randomizer === 1) {
    fate = "Not so certain victory";
} else if (randomizer === 2) {
    fate = "An uneasy victory";
} else {
    fate = "Your fate is unclear, ô chosen undead";
}

console.log("Randomizer:", randomizer);
console.log("Your fate:", fate);
// 4th

function obtenirSaison(mois) {
  
    if (mois >= 3 && mois <= 5) {
      return "Printemps";
    } else if (mois >= 6 && mois <= 8) {
      return "Été";
    } else if (mois >= 9 && mois <= 11) {
      return "Automne";
    } else if (mois == 12 || mois == 1 || mois == 2) {
      return "Hiver";
    } else {
      return "Mois invalide";
    }
  }
  
  console.log(obtenirSaison(4));   
  console.log(obtenirSaison(7));   
  console.log(obtenirSaison(10));  
  console.log(obtenirSaison(2));   
  console.log(obtenirSaison(13));  

  // DATA structure
 //first
  function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
  }
  

  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let evenNumbers = getEvenNumbers(numbers);
  console.log(evenNumbers); 
  // second
  function getPeopleOver30(people) {
    return people.filter(person => person.age > 30);
  }
  

  let people = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 35, email: "bob@example.com" },
    { name: "Charlie", age: 30, email: "charlie@example.com" },
    { name: "David", age: 40, email: "david@example.com" }
  ];
  
  let peopleOver30 = getPeopleOver30(people);
  console.log(peopleOver30);
 // third

 class Stack {
    constructor() {
      this.elements = [];
    }
  
    push(element) {
      this.elements.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.elements.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.elements[this.elements.length - 1];
    }
  
    isEmpty() {
      return this.elements.length === 0;
    }
  
    size() {
      return this.elements.length;
    }
  }
  
  let myStack = new Stack();
  myStack.push("Book 1");
  myStack.push("Book 2");
  console.log(myStack.peek());  
  console.log(myStack.pop());   
  console.log(myStack.size());  
  console.log(myStack.isEmpty()); 

  //4th
  class Queue {
    constructor() {
      this.elements = [];
    }
  
    enqueue(element) {
      this.elements.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.elements.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "Queue is empty";
      }
      return this.elements[0];
    }
  
    isEmpty() {
      return this.elements.length === 0;
    }
  
    size() {
      return this.elements.length;
    }
  }
  
  let myQueue = new Queue();
  myQueue.enqueue("Person A");
  myQueue.enqueue("Person B");
  console.log(myQueue.front()); 
  console.log(myQueue.dequeue()); 
  console.log(myQueue.size()); 
  console.log(myQueue.isEmpty()); 
  // 5th

  function removeVowels(str) {
    const vowels = "aeiouAEIOU";
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (!vowels.includes(str[i])) {
        result += str[i];
      }
    }
    return result;
  }
  
  let text = "Hello world";
  let textWithoutVowels = removeVowels(text);
  console.log(textWithoutVowels); // Output: Hll wrld

  // 6th

  function getUniqueElements(array1, array2) {
    const combinedArray = [...array1, ...array2];
    return [...new Set(combinedArray)];
  }
  

  let arr1 = [1, 5, 3, 4, 5];
  let arr2 = [3, 5, 6, 7, 8];
  let uniqueElements = getUniqueElements(arr1, arr2);
  console.log(uniqueElements); 
  //js for web dev
  // 1. Fonction qui prend un tableau de nombres et retourne la moyenne de tous les nombres pairs
  
function averageOfEvenNumbers(numbers) {
  const evenNumbers = numbers.filter(number => number % 2 === 0);
  if (evenNumbers.length === 0) {
    return 0;
  }
  const sum = evenNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  return sum / evenNumbers.length;
}

// Exp
const numbers1 = [1, 2, 3, 4, 5, 6];
console.log(`La moyenne des nombres pairs est : ${averageOfEvenNumbers(numbers1)}`); //  4

// 2. Fonction qui prend un tableau de mots et retourne le mot le plus long
function findLongestWord(words) {
  return words.reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
}

// Exp
const words1 = ["apple", "banana", "kiwi", "strawberry"];
console.log(`Le mot le plus long est : ${findLongestWord(words1)}`); //  strawberry

// 3. Fonction qui prend un tableau d'objets représentant des livres et retourne le nombre moyen de pages.
function averageNumberOfPages(books) {
  if (books.length === 0) {
    return 0;
  }
  const totalPages = books.map(book => book.pages).reduce((sum, pages) => sum + pages, 0);
  return totalPages / books.length;
}

// Exp
const books1 = [
  { title: "Le Petit Prince", author: "Antoine de Saint-Exupéry", pages: 96 },
  { title: "1984", author: "George Orwell", pages: 328 },
  { title: "Fahrenheit 451", author: "Ray Bradbury", pages: 249 }
];
console.log(`Le nombre moyen de pages est : ${averageNumberOfPages(books1)}`); //  224.33333333333334

// 4. Fonction qui prend un tableau de chaînes et retourne un objet contenant la fréquence de chaque chaîne.
function countStringFrequency(strings) {
  return strings.reduce((frequency, str) => {
    frequency[str] = (frequency[str] || 0) + 1;
    return frequency;
  }, {});
}

// Exp
const strings1 = ["hello", "world", "hello"];
console.log(`La fréquence des chaînes est : ${countStringFrequency(strings1)}`); //   hello: 2, world: 1 

// 5. Fonction qui prend un tableau d'objets représentant des personnes et retourne un objet contenant le nombre de personnes par ville.
function countPeopleByCity(people) {
  return people.reduce((cityCounts, person) => {
    cityCounts[person.city] = (cityCounts[person.city] || 0) + 1;
    return cityCounts;
  }, {});
}

// Exp
const people1 = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" }
];
console.log(`Le nombre de personnes par ville est : ${countPeopleByCity(people1)}`); //  New York: 2, Chicago: 1 