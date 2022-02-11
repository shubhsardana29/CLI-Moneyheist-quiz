const chalk=require("chalk");
var readlineSync = require("readline-sync");
var playerName = readlineSync.question("Hello player. Professor wants to know your real name : \n");
var boldPlayer = chalk.red.bold(playerName);
console.log(chalk.red("Welcome"+" "+ boldPlayer + " "+"to this quiz on Money Heist!!! \n"));
console.log(chalk.blue("Rules of the game are given below : "));
console.log(chalk.blue(" *Write complete spellings of the answer. \n  *You can write the whole answer or the option. \n  *There will be three levels to this game. As the level progresses, the difficulty level increases.\n  *Every right answer will give you 1 mark. \n  *You can only reach the next level if you have achieved full marks in the last level in one chance. \n"));
var score =0;
  console.log("All the best!! \nHere comes your questions... \n")
  function heist(question, answer, option){
    var userAnswer = readlineSync.question("-->"+question+ "\nYour answer is : ");
    if (userAnswer.toUpperCase()===answer.toUpperCase() ||userAnswer.toUpperCase()===option.toUpperCase()){
      console.log(chalk.bgGreen("\nYou're correecctt!!"));
      score=score+1;
    }
    else{
      console.log(chalk.bgRed("I'm sorry, you're wrong!"));
      console.log(chalk.blue("The right answer is : ",answer.toUpperCase()));
    }
    console.log(chalk.yellow("Your score is : ",score));
    console.log(chalk.magenta("---------"));
  }



var questions = [

  {
    question : "Which instituition is the target of the heist in season 1 and season 2? \n a. Royal Mint of Spain \n b. Bank of spain \n c. The European Central Bank",
    answer : "Royal Mint of Spain",
    option : "a"
  },
  {
    question : "What are the special masks the group wears, and get famous for, called? \n a. Delhi masks \n b. Dali masks \n c. Demon mask",
    answer : "Dali masks",
    option : "b"
  },
  {
    question : "What does Arturo Roman begin to do after survivng the first heist? \n a. He joins the Professor's team \n b. He becomes a public motivational speaker \n c. Who cares what he does? He is just as annoying",
    answer : "He becomes a public motivational speaker",
    option : "b"
  },
  {
    question : "How does Nairobi die? \n a. She is shot by Alicia Sierra \n b. She is shot by Gandia \n c. She is shot by Arturo",
    answer : "She is shot by Gandia",
    option : "b"
  },
  {
    question : "Which of the following is not a code-name used by the professor's team members? \n a. Lisbon \n b. Paris \n c. Marseille",
    answer : "Paris",
    option : "b"
  },
  {
    question : "How many days did the first heist continue? \n a. 6 \n b. 8 \n c. 11",
    answer : "11",
    option : "c"
  },
  {
    question : "Which of these famous footballer made a cameo in Money Heist? \n a. Neymar da Silva Santos Junior \n b. Sunil Chhetri \n c. Lionel Messi",
    answer : "Neymar da Silva Santos Junior",
    option : "a"
  },
  {
    question : "What is the name of raquel's daughter? \n a. Paula \n b. Alison Parker \n c. Ibiza",
    answer : "Paula",
    option : "a"
  },
  {
    question : "Raquel’s mother suffers from what medical condition?? \n a. Alzheimer’s Disease \n b. Cancer \n c. Post-Traumatic Stress Disorder",
    answer : "Alzheimer’s Disease",
    option : "a"
  },
  {
    question : "What is the name of Berlin's girlfriend who comes to visit at the monastery? \n a. Alicia \n b. Monica \n c. Tatiana",
    answer : "Tatiana",
    option : "c"
  },
  {
    question : "The show is actually called La Casa de Papel, which literally translates to what?? \n a. The House of Outcasts \n b.The Paper House  \n c. The House",
    answer : "The Paper House",
    option : "b"
  },
  {
    question : "who was the first one to die in money heist? \n a. Nairobi  \n b. Helsinki \n c. Oslo",
    answer : "Oslo",
    option : "c"
  },
  {
    question : "How is Rafael related to Berlin? \n a. Son \n b. Nephew \n c. cousin brother",
    answer : "Son",
    option : "a"
  },
  {
    question : "Who was the first one to join Professor's team? \n a. Nairobi \n b. Manilla \n c. Tokyo",
    answer : "Tokyo",
    option : "c"
  },
  {
    question : "Moscow is the father of? \n a. Denver \n b. Rio \n c. Berlin",
    answer : "Denver",
    option : "a"
  },
];
for(var j=0;j<1; j++){


if (score<6){
  for(var i=0; i<5;i++)
  {
    heist(questions[i].question, questions[i].answer, questions[i].option)
  }
  if(score===5){
    console.log("Yayyyy, you completed Level 1!! \n");
  }
  else{
    console.log("Sorry "+playerName+" You needed to score 5 marks for going into next level!!");
    break;
  }
}
if (score>4 && score<11){
  console.log("You just entered Level 2... \n");
  for(var i=5; i<10;i++){
    heist(questions[i].question, questions[i].answer, questions[i].option)
  }
  if(score===10){
    console.log("Don't worry, this is a part of professor's plan! Try again next time\n");
  }
  else{
    console.log("You played this far, that's awesome!! Try to reach the next level next time by scoring a perfect 10...");
    break;
  }
}
if(10<=score){
  console.log("congrats! You just entered Level 3!! \n");
  for(var i=10; i<15;i++){
    heist(questions[i].question, questions[i].answer, questions[i].option)
  }
  if(score===15){
  console.log("You are officially the best robber. You just robbed the heart of professor by scoring a perfect 15!!!! Congrats!! \n")
  }
  else{
    console.log("No worries, this is also a part of professor's plan. Try again next time to score a perfect 15")
  }
}
}
console.log("Thank you for playing!!!")