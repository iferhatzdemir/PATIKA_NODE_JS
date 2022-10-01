const inputArray = process.argv.slice(2);
let showPrimeNumbers = (lowNumber, highNumber) => {
  if (lowNumber > highNumber) {
    for (let i = highNumber; i <= lowNumber; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(i);
      }
    }
  } else {
    for (let i = lowNumber; i <= highNumber; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        console.log(i);
      }
    }
  }
};
console.table(showPrimeNumbers(inputArray[0], inputArray[1]));

showPrimeNumbers(inputArray[0] * 1, inputArray[1] * 1); //1 ile çarptığımız da number tipine çeviriyoruz.
console.log(process.argv.slice(2));
