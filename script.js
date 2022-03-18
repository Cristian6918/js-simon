console.log('js ok!');







const messageBox = document.querySelector('#messageBox');
const playButton = document.querySelector('#play_button');
const insertButton = document.querySelector('#insert_button');
const inputBar = document.querySelector('#input_line');
//Function that generate random numbers!

function randomNumbers(nrNumbers) {
    const array = [];
    for (let index = 0; index < nrNumbers; index++) {
        const number = Math.floor(Math.random() * 100 + 1);
        array.push(number);
    }
    console.log(array);
    return array;

}

//Function that show the numbers thai you have to remember
function showNumbers(content) {
    for (let index = 0; index < content.length; index++) {
        messageBox.innerText += `  ${content[index]}  `;
    }
}


// Function that Hide Numbers
function hideNumbers() {
    messageBox.innerText = '';
    inputBar.classList.remove('invisible');
    insertButton.classList.remove('invisible');

}
//Function that create an array with numbers inserted by user
function insertedNumbers() {
    const insertedArray = [];

    insertButton.addEventListener('click', function () {
        let number = inputBar.value;
        insertedArray.push(number);
        if (insertedArray.length <= 5) {
            inputBar.value = '';
        } else {
            inputBar.classList.add('invisible');
            insertButton.classList.add('invisible');
            return insertedArray;

        }
        console.log(insertedArray);

    });
}

function confront(firstArray, secondArray) {
    const commonArray = [];
    for (let index = 0; index < firstArray; index++) {
        if (firstArray.includes(secondArray[index])) {
            commonArray.push(secondArray[index]);
        }
    }
    if (commonArray.lenght === 5) {
        return msg = `You Win! You guessed all the numbers!`
    } else {
        return msg = `You Lost! you guessed ${commonArray.length}/5 numbers`;
    }

}








// Start Game Function
function startGame() {
    playButton.innerText = 'Play'
    const guessNumbers = randomNumbers(5);
    playButton.addEventListener('click', function () {
        showNumbers(guessNumbers);
        setTimeout(hideNumbers, 2000);
        playButton.classList.add('invisible');
        const userNumbers = insertedNumbers();
        messageBox.innerText = confront(guessNumbers, userNumbers);
    });


}




startGame();



