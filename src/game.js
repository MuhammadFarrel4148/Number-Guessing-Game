const db = require('./database');
const { AskQuestions, rl } = require('./askquestion')

const game = async(chances, difficult) => {
    let value = Math.floor(Math.random() * 100) + 1;
    let guess;

    while(chances !== 0) {
        guess = parseInt(await AskQuestions('Enter your guess: '));

        if(guess === value) {
            console.log(`Congratulations! You guessed the correct number in ${chances} attempts.\n`);
            
            const [result] = await db.query(`SELECT * FROM highscore WHERE difficult = ?`, [difficult]);
            
            if(chances > result[0].score) {
                console.log(`Congratulations you break the records of the difficult ${difficult}\n`);
                await db.query(`UPDATE highscore SET score = ? WHERE difficult = ?`, [chances, difficult]);
            };
            break;
        } else if(guess > value) {
            console.log(`Incorrect! The number is less than ${guess}.\n`);
            chances--;
        } else {
            console.log(`Incorrect! The number is greater than ${guess}.\n`);
            chances--;
        }; 
    };

    if(chances === 0) {
        console.log(`Game over, you lose`);
    };
};

module.exports = game;


