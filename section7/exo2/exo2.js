// SECTION 7 : exo 2

function calculerIMC(poidsA, tailleA) {
    let poids       = prompt("Quel est votre poids? en KG");
    poids           = Number(poids);
    let taille      = prompt("Quelle est votre taille? en M")
    // tailleEnM    = taille / 100 ; si on demande à l'utilisateur sa taille en mètre
    tailleAuCarre   = Math.pow(taille, 2);
    let resultat    = (poids/ tailleAuCarre) ;
    alert("Votre IMC est de : " + resultat)
}
calculerIMC();

// CORRECTION :
// function calculerIMC(poids, taille) {
    
//     // Converti la taille en centimètres => mètres
//     let tailleEnMetres = taille / 100;
  
//     // Calcule la taille à la puissance 2
//     let tailleCalculee = Math.pow(tailleEnMetres, 2);
  
//     // Calcule l'IMC
//     let resultat       = poids / tailleCalculee;

//     // Retourne notre résultat
//     return resultat;
  
//     // Version simplifiée de cette fonction : return poids / Math.pow((taille / 100), 2);

// }

// let poids   = prompt("Quel est votre poids ? (en kg)");
// let taille  = prompt("Quelle est votre taille ? (en cm)");

// alert(calculerIMC(poids, taille));