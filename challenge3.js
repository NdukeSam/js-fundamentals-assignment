let evenCount = 0;
let oddCount = 0;


for (let i = 1; i <= 20; i++) {

  if (i % 2 === 0) {
    console.log(`${i} is even`);
    evenCount++; 
  } else {
    console.log(`${i} is odd`);
    oddCount++; 
  }
}


console.log('');
console.log(`Summary: Even numbers: ${evenCount} Odd numbers: ${oddCount}`);