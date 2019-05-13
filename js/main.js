function startGame() {

  let gameIsStarted = false;
  const randomBtn = document.querySelector('.btn-random');
  randomBtn.classList.add('unvisible');
  let textElem = document.createElement('p');
  textElem.innerText = '';
  let gameBox = document.querySelector('.game-box');
  gameBox.appendChild(textElem);
  const numberInput = document.querySelector('.user-input');
  numberInput.classList.add('visible');
  const newGameBtn = document.querySelector('.btn-new-game');

  if (!gameIsStarted) {

    let number = Math.floor(Math.random() * 1000);
    console.log(number);
    let roundCount = 0;
    gameIsStarted = !gameIsStarted;

    function checkNumber(e) {
      e.preventDefault();

      if (gameIsStarted) {

        let userNumber = parseInt(document.querySelector('.user-input').value);

        if (userNumber > number) {
          roundCount++;
          textElem.innerText = 'Your number is bigger than random number';

        } else if (userNumber < number) {
          roundCount++;
          textElem.innerText = 'Your number is less than random number';

        } else if (userNumber === number) {
          roundCount++;
          textElem.innerText = `It's grate, You've guessed the number ${number} in ${roundCount} rounds!`;
          newGameBtn.classList.add('visible');
        }
      }
      gameIsStarted = !gameIsStarted;
    }
    document.querySelector('.btn-check').addEventListener('click', checkNumber);
  }
}
document.querySelector('.btn-random').addEventListener('click', startGame);

function newGame() {
  const lastItemGameBox = document.querySelector('.game-box').lastChild;
  lastItemGameBox.classList.add('unvisible');
  const newGameBtn = document.querySelector('.btn-new-game');
  newGameBtn.classList.remove('visible');
  const randomBtn = document.querySelector('.btn-random');
  randomBtn.classList.remove('unvisible');
  console.log('test');
  startGame();
}
document.querySelector('.btn-new-game').addEventListener('click', newGame);