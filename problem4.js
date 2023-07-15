function primeNumber(num) {
    if (num <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(primeNumber(11)); // true
  console.log(primeNumber(13)); // true
  console.log(primeNumber(17)); // true
  console.log(primeNumber(20)); // false
  console.log(primeNumber(35)); // false
  