// Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

const arr1 = [1,2,3,4,5,6,7,8,9];
const arr2 = [1,2,3];

console.log('PRIMA')
console.log('Primo Array '+arr1.length);
console.log('Secondo Array '+arr2.length);


//confrontiamo il numero di elementi tra due array  
//Sfruttiamo la chiamata della funzione per posizionare come primo elemento chiamante l'array da riempire mentre il secondo come array per il confronto
if(arr1.length>arr2.length){
    addelement(arr2,arr1);
}else{
    addelement(arr1,arr2);
}

function addelement(element1,element2){

    for(let i=0; element1.length<element2.length; i++){
        if(!element1[i]){
            const prova  = rdmelement();
            element1.push(prova);
        }
    }
console.log('DOPO')    
console.log(element1.length);
console.log(element2.length);
}

function rdmelement(){
    return Math.floor(Math.random() * 100);
}