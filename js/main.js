let gameIsStarted = false;

function startGame() {

  let textElem = document.createElement('p');
  textElem.textContent = '';
  let roundShow = document.createElement('p');
  roundShow.textContent = '';    

  if(!gameIsStarted) {

    let number = Math.floor(Math.random() * 1000);
    console.log(number);
    let roundCount = 0;
    gameIsStarted = !gameIsStarted;
    console.log(gameIsStarted);

    function checkNumber(e) {
      e.preventDefault();

      if(gameIsStarted) {
      
        let userNumber = parseInt(document.querySelector('.user-input').value);
        
        if(userNumber > number) {
          roundCount++;
          console.log('Your number is bigger than random number');
          textElem.innerText = 'Your number is bigger than random number';
          let gameBox = document.querySelector('.game-box');
          gameBox.appendChild(textElem);
          

        } else if(userNumber < number) {
          roundCount++;
          console.log('Your number is less than random number');
          textElem.innerText = 'Your number is less than random number';
          let gameBox = document.querySelector('.game-box');
          gameBox.appendChild(textElem);
          

        } else if(userNumber === number) {
          roundCount++;
          console.log(`It's grate, You've guessed the number ${number}!`);
          textElem.innerText = `It's grate, You've guessed the number ${number} in ${roundCount} rounds!`;
          let gameBox = document.querySelector('.game-box');
          gameBox.appendChild(textElem);
          gameIsStarted = !gameIsStarted;
          console.log(gameIsStarted);
          
        }
      }
    }

    document.querySelector('.btn-check').addEventListener('click', checkNumber);
  } 
}

document.querySelector('.btn-random').addEventListener('click', startGame);