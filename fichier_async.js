const path = require('path');
const fs = require('fs');
const nomFichier= path.join(__dirname,'test','fichier.txt')
console.log('Début du programme');
fs.readFile(nomFichier,{encoding:'utf-8'},(erreur,contenu)=>{
    if(erreur){
        throw erreur;
    }
    console.log(contenu);
});
console.log(contenu);
console.log('Fin du programme');