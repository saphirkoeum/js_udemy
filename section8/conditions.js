// == : égal à la valeur
// === : égal à la valeur et au type
// != : différent de la valeur
// !== : différent de la valeur et du type
// > : supérieur
// < : inférieur
// >= : supérieur ou égal
// <= : inférieur ou égal


//Créer une condition pour afficher si l'utilisateur est majeur
// -18 : Vous n'êtes pas majeur
// 18 et 20 : Vous êtes majeur en France
// 21+ : Vous êtes majeurs partout, à vous les casinos !

// let age = 17;

// if (age >= 21) {
//     console.log("Vous êtes majeur partout, à vous les casinos !");
// }
// else if (age == 18) {
// console.log("Vous êtes majeur en France");
// }
// else{
//     console.log("Vous n'êtes pas majeur");
// }

// CORRECTION SOURCE
// let age = 40;

// if (age < 18) {
//     console.log("Vous n'êtes pas majeur.");
// }
// else if(age < 21) {
//     console.log("Vous êtes majeur en France.");
// }
// else {
//     console.log("Vous êtes majeur partout, à vous les casinos !");
// }

// SWITCH 

// let consommable = "chocolat";

// switch(consommable){
//     case "carotte":
//     case "pomme de terre":
//     case "courgette":
//         console.log("Ceci est un légume");
//         break;

//     case "banane":
//         console.log("Ceci est un fruit");
//         break;

//     default:
//         console.log("Ceci n'est ni un fruit ni un légume");
// }  

// Vérifier le contraitre d'une condition (NOT !)
// let x = 7;

// if(!x < 5) {
//     console.log('x est inférieur à 5.');
// }
// else {
//     console.log('x n\'est pas inférieur à 5.');
// }


// CONDITION TERNAIRE
// let x = 3 ;
// if(x > 3) {
//     console.log('X est supérieur à trois');
// }
// else {
//     console.log('X est inférieur à trois');
// }

// [CONDITION] ? [TRUE] : [FALSE];
// x > 3 ? console.log('X est supérieur à trois') : console.log('X est inférieur à trois');


let gareDeDepart = "Valenciennes";
let gareDArrivee = prompt("Où souhaitez-vous aller ?") || "Gare du Nord";
let chauffeur    = "Louis-Nicolas";

if ((gareDeDepart != "" || gareDArrivee != "") && chauffeur != "") {
    alert('Le train va démarrer à destination de ' + gareDArrivee + '.');
}
else {
    alert('Le train ne peut pas démarrer.');
}