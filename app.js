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

    const arrayLength = arr.length;
}
