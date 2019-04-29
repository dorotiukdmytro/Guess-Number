function startGame() {

  let gameIsStarted = false;
  let textElem = document.createElement('p');
  textElem.textContent = '';
  const numberInput = document.querySelector('.user-input');
  numberInput.classList.add('visible');
  const randomBtn = document.querySelector('.btn-random');
  randomBtn.classList.add('unvisible');
  const newGameBtn = document.querySelector('.btn-new-game');

  if(!gameIsStarted) {

    let number = Math.floor(Math.random() * 1000);
    console.log(number);
    let roundCount = 0;
    gameIsStarted = !gameIsStarted;

    function newGame() {
      newGameBtn.classList.remove('visible');
      console.log('test');
      startGame();
    }

    function checkNumber(e) {
      e.preventDefault();

      if(gameIsStarted) {
      
        let userNumber = parseInt(document.querySelector('.user-input').value);
        
        if(userNumber > number) {
          roundCount++;
          textElem.innerText = 'Your number is bigger than random number';
          let gameBox = document.querySelector('.game-box');
          gameBox.appendChild(textElem);

        } else if(userNumber < number) {
          roundCount++;
          textElem.innerText = 'Your number is less than random number';
          let gameBox = document.querySelector('.game-box');
          gameBox.appendChild(textElem);

        } else if(userNumber === number) {
          roundCount++;
          textElem.innerText = `It's grate, You've guessed the number ${number} in ${roundCount} rounds!`;
          let gameBox = document.querySelector('.game-box');
          gameBox.appendChild(textElem);
          gameIsStarted = !gameIsStarted;
          
          newGameBtn.classList.add('visible');
          newGameBtn.addEventListener('click', newGame);
        }
      }
    }
    document.querySelector('.btn-check').addEventListener('click', checkNumber);
  }
}
document.querySelector('.btn-random').addEventListener('click', startGame);
