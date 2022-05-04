// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando a somma degli elementi è minore di 50.


const arr1 = [];


let sumElem;

let k=1;

do{
console.log('Inserimento n ->',k++);
let element = parseInt(prompt("Inserisci valore"));
arr1.push(element); 
sumElem = arr1.reduce((accumulator, curr) => accumulator + curr);
console.log(sumElem)
}while(sumElem < 50)


console.log(arr1+' somma dei valori '+ sumElem)