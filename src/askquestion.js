const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const AskQuestions = (query) => {
    return new Promise(resolve => {
        rl.question(query, (answer) => {
            resolve(answer); 
        });
    });
};

module.exports = { AskQuestions, rl }; 
