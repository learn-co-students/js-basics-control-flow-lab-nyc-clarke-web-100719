function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return "This one is on me!";
  }
  else if(distance > 2000 && distance < 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else if(distance > 2500) {
    return "No can do.";
  }
}

function ternaryCheckCity(cityName){
  // Write your code here!

 return cityName == "NYC" ? "Ok, sounds good." : "No go.";

}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!

  switch(tipAmount){
    case "generous" : return "Thank you so much.";
    case "not as generous" : return "Thank you.";
    default: return "Bye."
  }
}