const path = require('path');
const fs = require('fs');
const nomDossier= path.join(__dirname,'test','dossier2')
const nomFichier= path.join(__dirname,'test','exemple.txt')
const nouveauNom=path.join(__dirname,'test','new.txt')
console.log('Début du programme');
process.on('uncaughtException',err=>{
    console.error(`une erreur s'est produite: ${err.code}`);
    process.exit(1);
})
fs.readFile(nouveauNom,'utf-8',(err,contenu)=>{
if(err){
   if(err.code==='ENOENT'){
    console.log(`Le fichier n'existe pas`);
   } else{
    throw err;
   }
} else{
    console.log(contenu);
}
})
console.log('Fin du programme');