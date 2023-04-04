console.log('Salut!');

const personne = require('./personne');
console.log(personne);
console.log(`Voici le nom ${personne.nom}`);

const Personne = require('./classPersonne')
const paul = new Personne('Paul Larue',39)

console.log(paul);

paul.salut();
console.log('Voici un message \nsur deux lignes');
console.log('Voici un backslash \\');