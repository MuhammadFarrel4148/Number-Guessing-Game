const game = require("./game");
const gameMessage = require("./message");
const readline = require('readline');

const AskQuestions = (query) => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question(query, (answer) => {
            rl.close();
            resolve(answer);
        })
    })
};

const main = async() => {
    gameMessage();
    let play = true;
    let chances;

    while(play) {
        console.log("Please select the difficult level:");
        console.log("1. Easy(10 chances)\n2. Medium (5 chances)\n3. Hard(3 chances)\n");
    
        const difficult = await AskQuestions("Enter your choice: ")

        switch(difficult.toLowerCase()) {
            case 'easy':
                chances = 10;
                break;
            case 'medium':
                chances = 5;
                break;
            case 'hard': 
                chances = 3;
                break;
            default: 
                console.log(`Input yang anda masukkan tidak valid\n`);
                continue;           
        };

        console.log(`Great! You have selected the ${difficult} difficulty level. Let's start the game!`);

        game(chances, difficult);

        const playAgain = await AskQuestions('Do you want to play again? (yes/no): ');
        play = playAgain.toLowerCase() === 'yes';
        console.log('\n');
    };
};

main();

module.exports = { AskQuestions };


