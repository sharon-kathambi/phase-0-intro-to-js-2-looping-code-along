// Code your solutions in this file
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];
function wrapGifts(gifts){
    for(let i= 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);

/*const names = ["Guadalupe","Ollie","Aki"];
function writeCards(names) {
    for(let i = 0; i< names.length; i++){
       /* names.push(); 
    console.log(`"Thank you, ${names[i]}, for the wonderful surprise gift!"`);
    }
    return names;
}
writeCards(names);*/

const names = ["Guadalupe", "Ollie", "Aki"];
const party = 'surprise';


function writeCards(names, party) {
    let newArray = [];
    for (let i =0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${party} gift!`);
    }
    return newArray;
}
console.log(writeCards(names, party));


function countDown(positiveNumber){
    while(positiveNumber >= 0) {
        console.log(positiveNumber);
        positiveNumber--;
    }
}
console.log(countDown(10));
