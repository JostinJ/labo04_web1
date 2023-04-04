const path = require('path');

const nomFichier = 'c:\\temp\\truc.html';
const repertoire =__dirname;
console.log(repertoire);
console.log('Base name repertoire');
console.log(path.basename(repertoire));
console.log('Fichier');
console.log(__filename);
console.log(path.basename(__filename));
console.log("aff de path.basename", path.basename(nomFichier));
console.log("aff de path.basename sur posix", path.posix.basename(nomFichier));
console.log("aff de path.basename du fichier courant", path.basename(__filename,'.js'));
console.log("aff de path.extname du fichier courant", path.extname(__filename));
console.log("aff de path.dirname du fichier courant", path.dirname(__filename));
console.log('Affichar de path.parse', path.parse(__filename));
console.log('Affichar de path.parse', path.parse(nomFichier));
let partieFichier= path.parse(__filename) 
console.log('ext=', partieFichier.ext);
console.log('nom=', partieFichier.name);
console.log('disque=', partieFichier.root);
console.log('nom complet du fichier=', partieFichier.base);

console.log('Construction path: ', path.join(__dirname,'test','dossier 2','fichier.txt') );



