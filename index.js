function scuberGreetingForFeet(arg){
  // Write your code here!
  let answer = '';
if (arg <= 400){
answer = 'This one is on me!';
} else if (arg > 2000 && arg < 2500){
answer = "I will gladly take your thirty bucks.";
} else {
  answer = "No can do."
}
return answer;
}

function ternaryCheckCity(city){
  // Write your code here!
  let answer ='';
  city === "NYC" ? (answer = "Ok, sounds good.") : (answer = "No go.");
  return answer;
}

function switchOnCharmFromTip(word){
  // Write your code here!
  let answer = '';
  if (word === "generous") {
    answer = 'Thank you so much.';
  } else if (word === "not as generous") {
    answer = "Thank you.";
  } else {
    answer = "Bye.";
  }
  return answer;
}
