function scuberGreetingForFeet(someValue){
  if (someValue <= 400) {
    return 'This one is on me!';
  } else if (someValue > 2500) {
    return "No can do.";
  } else if (someValue > 2000) {
    return "I will gladly take your thirty bucks."
  }
}

function ternaryCheckCity(someCity){
  return someCity === "NYC" ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(someTip){
  let response;
  switch (someTip) {
    case 'generous':
      response = "Thank you so much.";
      break;
    case 'not as generous':
      response = "Thank you."
      break;
    default:
      response = "Bye."
  }
  return response;
}