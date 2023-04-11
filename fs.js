const path = require('path');
const fs = require('fs');
const nomDossier= path.join(__dirname,'test','dossier2')
const nomFichier= path.join(__dirname,'test','exemple.txt')
const nouveauNom=path.join(__dirname,'test','new.txt')
console.log('Début du programme');
// fs.mkdir(nomDossier,{},erreur=>{
//     if(erreur){
//         throw erreur;
//     }
//     console.log(`Dossier ${nomDossier} a été créé avec succès!`);
// });
// fs.writeFile(nomFichier,'message',err=>{
//     if (err) throw err;
//     console.log(`Fichier ${nomFichier} créé avec succès`);
// })
// const nouveauContenu = `Contenu qui est ajouté à la fin du fichier
// 5e ligne
// 6e ligne`;
// fs.appendFile(nomFichier,nouveauContenu,err=>{
//     if (err) throw err;
//     console.log(`Texte ajouté au fichier ${nomFichier}`);
// })
// fs.rename(nomFichier,nouveauNom,(err)=>{
//     if(err)throw err;
//     console.log(`Renommé`);
// })
// fs.access(nomDossier,fs.constants.F_OK,err=>{
//     if(err)
//         console.log(`Le dossier ${nomDossier} n'existe pas`);
//     else
//         console.log(`Le dossier ${nomDossier} existe`);
// })
// fs.access(nomFichier,fs.constants.R_OK,err=>{
//     if(err)
//         console.log(`Le dossier ${nouveauNom} n'existe pas ou n'est pas lisible`);
//     else
//         fs.readFile(nouveauNom,'utf-8',(err,contenu)=>{
//             if(err) throw err;
//             console.log(contenu);
//         })
// })
fs.stat(nomDossier,(err,stats)=>{
    if(err)throw err;
    console.log(`pour`,nomDossier);
    console.log(`C'est un dossier?`, stats.isDirectory()?'Un dossier':'Pas un dossier');
    console.log(`Fichier??`, stats.isFile()?'Un fichier':'Pas un fichier');
    // console.log(stats);
})
console.log('Fin du programme');