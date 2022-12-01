// Code your solutions in this file

function writeCards(names, event) {
    const newNames = []
    for (let i = 0; i < names.length; i++) {
        newNames.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);

    }
    return newNames;

}

function countDown(number) {
    while (number >= 0) {
        console.log(number--)
    }
}