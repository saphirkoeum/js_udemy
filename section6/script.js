// section 6 

// variable locale -> accessible seulement la ou elle est déclarée
// variable globale ->crée a la racine du code, accessible n'importe ou

// let nombreUn    = 4;
// let nombreDeux  = 7;

// function addition(nombreA, nombreB = 10) {
//     let result = nombreA + nombreB;
//     // console.log(result);
//     return result; 
        //après return, le code n'est pas exécuté
// }

// console.log(addition(nombreUn, nombreDeux));

// let prepatation = 10, cuisson = 15;

// function cuisiner(nombreDeGateau, minuteDePreparation = 10, minuteDeCuisson = 15) {
    
//     let resultat = nombreDeGateau * (minuteDePreparation + minuteDeCuisson)
//     return resultat;
// }
 
// let tempsDePreparationChocolat = cuisiner(4);
// let tempsDePreparationFraisier = cuisiner(1, 20);

// console.log(tempsDePreparationChocolat + tempsDePreparationFraisier);

// function demanderAge() {

//     let age = prompt("Quelle est votre âge ?");
//     alert("Vous avez " + age + " ans.")
    
// }

// demanderAge();

// function prevoirAge() {

//     let age = prompt("Quelle est votre âge ?");
//         // age = parseInt(age);
//         // age = parseFloat(age);
//         age = Number(age);
//         nombreEnString = nombre.toString();
            //toString() -> converti les nombres en string
//     alert("Vous avez bientôt " + (age + 1) + " ans.")

// }

// prevoirAge();

// parseInt() -> convertir en nombre entier
// parseFloat() -> prend en compte les décimaux
// Number() -> considère tout comme des nombres 

// function anonymes

// 1ère facon
// let fonctionAnonyme = function() {
//     console.log('Je suis une fonction anonyme');
// }

// fonctionAnonyme();

// 2ème facon

// (function() { console.log('Je suis une fonction anonyme')})();
// (function(){ console.log('Je suis une fonction anonyme')})();


