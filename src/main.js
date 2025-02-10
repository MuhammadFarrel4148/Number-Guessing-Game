const game = require("./game");
const gameMessage = require("./message");
const { AskQuestions, rl } = require('./askquestion');

const main = async() => {
    gameMessage();
    let play = true;
    let chances;
    let difficult;

    while(play) {
        console.log("Please select the difficult level:");
        console.log("1. Easy(10 chances)\n2. Medium (5 chances)\n3. Hard(3 chances)\n");
    
        let difficult_number = await AskQuestions("Enter your choice: ")

        switch(difficult_number) {
            case '1':
                chances = 10;
                difficult = 'Easy';
                break;
            case '2':
                chances = 5;
                difficult = 'Medium';
                break;
            case '3': 
                chances = 3;
                difficult = 'Hard';
                break;
            default: 
                console.log(`Input yang anda masukkan tidak valid, coba lagi\n`);
                continue;           
        };

        console.log(`Great! You have selected the ${difficult} difficulty level. Let's start the game!`);

        await game(chances, difficult);

        const playAgain = await AskQuestions('Do you want to play again? (yes/no): ');
        play = playAgain.toLowerCase() === 'yes';
        console.log('\n');
    };
};

main();

module.exports = AskQuestions;


