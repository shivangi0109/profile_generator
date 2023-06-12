// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profile = {};

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

const generateProfile = () => {
  console.log("\n--- Profile ---");
  console.log(`Name: ${profile[1]}`);
  console.log(`Activity: ${profile[2]}`);
  console.log(`Music: ${profile[3]}`);
  console.log(`Favorite Meal: ${profile[4]}`);
  console.log(`Favorite Food: ${profile[5]}`);
  console.log(`Favorite Sport: ${profile[6]}`);
  console.log(`Superpower: ${profile[7]}`);
  console.log("----------------");
};

const askQuestion = (index) => {
  if (index >= questions.length) {
    generateProfile();
    rl.close();
    return;
  }

  rl.question(questions[index] + ' ', (answer) => {
    profile[index + 1] = answer;
    // console.log(profile);
    askQuestion(index + 1);
  });
};

askQuestion(0);