const path = require('path');
const fs = require('fs');
const nomDossier= path.join(__dirname,'test','dossier2')
const nomFichier= path.join(__dirname,'test','exemple.txt')
const nouveauNom=path.join(__dirname,'test','newd.txt')
console.log('Début du programme');
process.on('uncaughtException',err=>{
    console.error(`une erreur s'est produite: ${err.code}`);
    process.exit(1);
})
fs.readFile(nouveauNom,'utf-8',(err,contenu)=>{
if(err){
   if(err.code==='ENOENT'){
    throw err;
   } 
    
   
} else{
    console.log(contenu);
}
})
console.log('Fin du programme');