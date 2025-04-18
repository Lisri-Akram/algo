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