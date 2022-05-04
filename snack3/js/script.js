// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: punti fatti e falli subiti.

const squad = [
    {
        nameS:'Napoli',
        points: 0,
        fouls: 0
    },
    {
        nameS:'Milan',
        points: 0,
        fouls: 0
    },
    {
        nameS:'Roma',
        points: 0,
        fouls: 0
    },
    
]


const result = squad.map(newsquad => ({ nameS: newsquad.nameS, points:rdmelement(),fouls: rdmelement()}));
console.log("Modif: ",result)

console.log( "Original:", squad );

function rdmelement(){
    return Math.floor(Math.random() * 100);
}
