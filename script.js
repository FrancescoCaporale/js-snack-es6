/*Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/

// SNACK 1
// Creo un array di oggetti che rappresentano bici da corsa.
// Ogni bici ha un nome e un peso.

const bikes = [
  { nome: "Bianchi", peso: 7.2 },
  { nome: "Pinarello", peso: 6.8 },
  { nome: "Colnago", peso: 7.5 },
  { nome: "Trek", peso: 6.9 }
];

// Suppongo inizialmente che la prima bici sia la più leggera
let biciLeggera = bikes[0];

// Ciclo tutte le bici a partire dalla seconda
for (let i = 1; i < bikes.length; i++) {

  // Confronto il peso della bici corrente con quello della più leggera trovata finora
  if (bikes[i].peso < biciLeggera.peso) {
    biciLeggera = bikes[i];
  }
}

// Stampo in console la bici con il peso minore
console.log(
  "La bici più leggera è:",
  biciLeggera.nome,
  "con peso",
  biciLeggera.peso,
  "kg"
);

