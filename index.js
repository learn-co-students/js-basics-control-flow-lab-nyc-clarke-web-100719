function scuberGreetingForFeet(number){
  if(number <= 400){
    return 'This one is on me!';
  }
  else if (number <= 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if (number > 2500){
    return 'No can do.';
  }

}

function ternaryCheckCity(location){
   if(location === 'NYC'){
    return 'Ok, sounds good.';
   }
   else return 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip){
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.';
      break;
    case 'thanks for everything':
      return 'Bye.';
      break;
  }
}