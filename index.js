function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  if (someValue <= 400) {
      return 'This one is on me!';
  } else if (someValue > 2000 && someValue < 2500) {
      return 'I will gladly take your thirty bucks.';
  } else if (someValue > 2500) {
      return 'No can do.'
  }

}

function ternaryCheckCity(city){
  let answer
  
  city === "NYC" ? (answer = 'Ok, sounds good.') : (answer = 'No go.');

  return answer;
}


function switchOnCharmFromTip(tipKind) {
  switch (tipKind) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.'
  }
}
