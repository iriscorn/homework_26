const figure = ["hearts", "diamonds", "clubs", "spades"];
const person = ["jack", "queen", "king", "t"];
const cards = [];

for(let i = 2; i <= 10; i++) {
    for(let j = 0; j < figure.length; j++) {
        let item = `<div class="card__info">
            ${i}
            <img src="images/${figure[j]}.svg" alt="clubs">
        </div>`;
        cards.push(`<div class="card">${item} ${item}</div>`);
    }
}

for(let i = 0; i < person.length; i++) {
    for(let j = 0; j < figure.length; j++) {
        let item = `<div class="card__info">
            ${person[i][0].toUpperCase()}
            <img class="card__info" src="images/${figure[j]}.svg" alt="clubs">
        </div>`;
        let personImg = person[i] != "t" ? person[i]: figure[j];
        cards.push(`<div class="card card--person">
            ${item}
            <img class="person" src="images/${personImg}.svg" alt="clubs">
            ${item}
        </div>`);
    }
}

document.write(`<div class="wrapper"> ${cards.join(``)} </div>`);