function scuberGreetingForFeet(length){
  
  if (length < 400) {
    return 'This one is on me!';
  } else if (length > 400 && length < 2002) {
    return 'I will gladly take your thirty bucks.';
  } else if (length > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  let answer; 
  
  city === 'NYC' ? (answer = 'Ok, sounds good.') : (answer = 'No go.');

  return answer;
}

function switchOnCharmFromTip(tip){
  let answer; 

  switch (tip) {
    case 'generous':
      return answer = 'Thank you so much.';
      break;
    case 'not as generous':
      return answer = 'Thank you.';
      break;
    case 'thanks for everything':
      return answer = 'Bye.';
  }
}

