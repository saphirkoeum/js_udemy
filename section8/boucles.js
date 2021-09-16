//WHILE

// let i = 1;

// while (i < 5) {
    
//     console.log('Ligne : ' + i);
//     i++;

// }

//DO WHILE
// do{
//     var prenom = prompt("Quel est votre prénom?");

// } while (prenom == "" || prenom == null)

// alert("Bonjour " + prenom);


//FOR

// for (déclarer la variable; définir la condition; incrémentation){
// console.log();
// }

// for(let i = 1; i < 5: i++){
//     console.log("Ligne : " + i);
// }

//BREAK & CONTINUE

// let i = 0;

// while (i < 5) {
  
//   // Break
//   if (i == 3) {
//     break;
//   }
  
  // Continue
  // if (i == 3) {
  //   i++;
  //   continue;
  // }
  
//   console.log('Ligne : ' + i);
//   i++;
  
// }


// LES EXCEPTIONS 

// try {
//     // Erreur ?
//     let recompense = prompt("Choisissez une récompense : épée, arc, haches");
//     let degats;
    
//     switch(recompense) {
//       case 'épée':
//         degats = 40;
//         break;
//       case 'arc':
//         degats = 30;
//         break;
//       case'haches':
//         degats = 20;
//         break;
//       default:
//         throw new Error('Vous ne pouvez pas tricher.');
//     }
    
//     alert('Vous avez choisi : ' + recompense + ' (' + degats + ' dégats).');
//   }
//   catch(error) {
//     // Erreur !
//     alert(error);
//   }
//   finally {
//     alert('Fin du programme');
//   }
