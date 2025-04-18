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