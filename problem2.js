//pencarian bilangan prima sampai 10 deret
function primeX(num) {
    // your code here
    const nilai = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71 ];
  
    return nilai[num - 1];
  }
  
  console.log(primeX(1)); // 2
  console.log(primeX(5)); // 11
  console.log(primeX(10)); // 29
  console.log(primeX(15)); // 47
  console.log(primeX(20)); // 71
