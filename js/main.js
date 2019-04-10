const randomBtn = document.querySelector('.btn-random');
let gameIsStarted = false;
const numberInput = document.querySelector('.user-input');
numberInput.style.opacity = '0';

function startGame() {

  let textElem = document.createElement('p');
  textElem.textContent = '';
  let roundShow = document.createElement('p');
  roundShow.textContent = ''; 

  numberInput.style.opacity = '1'; 
  randomBtn.style.opacity = '0'; 

  if(!gameIsStarted) {

    let number = Math.floor(Math.random() * 1000);
    let roundCount = 0;
    gameIsStarted = !gameIsStarted;

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
          
        }
      }
    }
    document.querySelector('.btn-check').addEventListener('click', checkNumber);
  } 
}
randomBtn.addEventListener('click', startGame);