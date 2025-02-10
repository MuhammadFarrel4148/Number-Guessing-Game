const { AskQuestions } = require("./main");

const game = async(chances) => {
    let value = Math.floor(Math.random() * 100) + 1;
    let guess;

    while(chances !== 0) {
        guess = parseInt(AskQuestions('Enter your guess: '));

        if(guess === value) {
            console.log(`Congratulations! You guessed the correct number in ${chances} attempts.\n`);
            
            const [result] = await db.query
            break;
        } else if(guess > value) {
            console.log(`Incorrect! The number is greater than ${guess}.\n`);
            chances--;
        } else {
            console.log(`Incorrect! The number is less than ${guess}.\n`);
            chances--;
        }; 
    };
};

module.exports = game


