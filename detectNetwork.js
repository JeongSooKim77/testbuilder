// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var isDinersClub = function(cardNumber){
  return (cardNumber.slice(0, 2) === '38' || cardNumber.slice(0, 2) === '39') && cardNumber.length === 14;
}

var isAmex = function(cardNumber){
  return (cardNumber.slice(0, 2) === '34' || cardNumber.slice(0, 2) === '37') && cardNumber.length === 15;
}

var isVisa = function(cardNumber){
  return cardNumber[0] === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19);
}

var isMasterCard = function(cardNumber){
  return (Number(cardNumber.slice(0, 2)) >= 51 && Number(cardNumber.slice(0, 2)) <= 55) && cardNumber.length === 16;
}

var isDiscover = function(cardNumber){
  return (cardNumber.slice(0, 4) === '6011' || (Number(cardNumber.slice(0, 6)) >= 622126 && Number(cardNumber.slice(0, 6)) <= 622925) 
    || (Number(cardNumber.slice(0, 4)) >= 644 && Number(cardNumber.slice(0, 4)) <= 649) || cardNumber.slice(0, 2) === '65')
    && (cardNumber.length === 16 || cardNumber.length === 19);
}

var isMaestro = function(cardNumber){
  return ((cardNumber.slice(0, 4) === '5018') || (cardNumber.slice(0, 4) === '5020') 
    || (cardNumber.slice(0, 4) === '5038') || (cardNumber.slice(0, 4) === '6304') 
    || (cardNumber.slice(0, 4) === '6761') || (cardNumber.slice(0, 4) === '6763')) 
    && (cardNumber.length >= 12 && cardNumber.length <= 19);
}

var isChinaUnionPay = function(cardNumber){
  return (Number(cardNumber.slice(0, 3) >= 624 && Number(cardNumber.slice(0, 3)) <= 626)) 
    || (Number(cardNumber.slice(0, 4)) >= 6282 && Number(cardNumber.slice(0, 4)) <= 6286)
    && (Number(cardNumber.length) >= 16 && Number(cardNumber.length) <= 19);
}

var isSwitch = function(cardNumber){
  return (cardNumber.slice(0, 4) === '4903' || cardNumber.slice(0, 4) === '4905' || cardNumber.slice(0, 4) === '4911' 
    || cardNumber.slice(0, 4) === '4936' || cardNumber.slice(0, 6) === '564182' || cardNumber.slice(0, 6) === '633110' 
    || cardNumber.slice(0, 4) === '6333' || cardNumber.slice(0, 4) === '6759')
    && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19);
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if(isDinersClub(cardNumber)){
  	return 'Diner\'s Club';
  } else if(isAmex(cardNumber)){
    return 'American Express';
    //Switch is put before Visa because some Visa cards qualify as Switch cards but not visa versa
  } else if(isSwitch(cardNumber)){
    return 'Switch';
  } else if(isVisa(cardNumber)){
    return 'Visa';
  } else if(isMasterCard(cardNumber)){
    return 'MasterCard';
    //Discover must come before Maestro and China UnionPay
  } else if(isDiscover(cardNumber)){
    return 'Discover';
  } else if(isMaestro(cardNumber)){
    return 'Maestro';
  } else if(isChinaUnionPay(cardNumber)){
    return 'China UnionPay';
  }
  
  return 'invalid card number';
};


