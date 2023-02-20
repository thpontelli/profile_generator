const { userInfo } = require('os');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let userAnswers = {};


rl.question('What\'s your name? Nicknames are also acceptable :) ', (answer) => {
  //console.log(`Thank you for your valuable feedback: ${answer}`);
  //console.log(answer);
  userAnswers.name = answer;
  //console.log(userAnswers);
  
  rl.question("What's an activity you like doing? " , (answer) => {
    //console.log(`Thank you for your valuable feedback: ${answer}`);
    //console.log(answer);
    userAnswers.activity = answer;
    //console.log(userAnswers);

    rl.question("What do you listen to while doing that? " , (answer) => {
      //console.log(`Thank you for your valuable feedback: ${answer}`);
      //console.log(answer);
      userAnswers.music = answer;
      //console.log(userAnswers);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) " , (answer) => {
        //console.log(`Thank you for your valuable feedback: ${answer}`);
        //console.log(answer);
        userAnswers.meal = answer;
        //console.log(userAnswers);

        rl.question("What's your favourite thing to eat for that meal? " , (answer) => {
          //console.log(`Thank you for your valuable feedback: ${answer}`);
          //console.log(answer);
          userAnswers.dish = answer;
          //console.log(userAnswers);

          rl.question("Which sport is your absolute favourite? " , (answer) => {
            //console.log(`Thank you for your valuable feedback: ${answer}`);
            //console.log(answer);
            userAnswers.sport = answer;
            //console.log(userAnswers);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! " , (answer) => {
              console.log(`Thank you for your valuable feedback, ${userAnswers.name}`);
              //console.log(answer);
              userAnswers.superPower = answer;
              //console.log(userAnswers);
  
              rl.close();
              console.log(`${userAnswers.name} loves ${userAnswers.activity} while listening to ${userAnswers.music}, devouring ${userAnswers.dish} for ${userAnswers.meal}, prefers ${userAnswers.sport} over any other sport, and is amazing at ${userAnswers.superPower}.`);
            });
          });
        });
      });
    });
  });
});
