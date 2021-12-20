const button = document.querySelectorAll('#qwerty');
console.log(button);
const phrase = document.querySelector('#phrase');
console.log(phrase);
const startGame = document.getElementsByClassName('btn__reset');
console.log(startGame[0]);
let missed = 0;
const phrases = ['Micheal Jordan', 'Wayne Gretzky', 'Muhamad Ali', 'Bill Belichick', 'Jackie Robinson'];

startGame[0].addEventListener('click', () => {

    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
});

//This function retreives a Random phrase from an array
function getRandomPhraseAsArray(arr) {

    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function addPhraseToDisplay(arr) {

    for( const i = 0; i < arr.length; i++ ) {

    }    

    const element = document.createElement('li');
    element.textContent = 'arr[i]';
    phrase.appendChild(li);

    // if( phrase. ) {

    // }
}
