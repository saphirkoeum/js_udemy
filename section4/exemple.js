// var -> globale 
// let -> locale
// const -> valeur qui ne peuvent pas être modifiée
// 3 types de variables = sting, number & boolean


// let prenom = "Marc & Simon"
// // Chaînes de caractères (string)

// let age = 21.5;
// // Nombre (number)

// let majorite = true;
// // Booleen (boolean)

// let win = false;
// win = true;

// const prenom = "Marc"; // ne peut pas être modifié
let prenom = "Marc";
prenom = "John";

console.log(prenom);

// var prenom = "Marc";

const prenom  = "Saphir";
const nom     = "Km";

console.log("Bonjour " + prenom + ' ' + nom + ' !');

// Bonjour [prenom] [age] !

// OPERATEURS
// - "+" addition
// - "-" soustraction
// - "*" multiplication
// - "/" division
// - "%" modulo <=> 5/2 = 2.45343 restant 1
// - "**" exponentielle 5**2 = 25

let nombreUn = 8, nombreDeux = 4, result;
result = (nombreUn + nombreDeux) * 9; // 108
result++; // incrémentation = ajoute 1
result--; // décrémentation = retire 1
console.log(result);