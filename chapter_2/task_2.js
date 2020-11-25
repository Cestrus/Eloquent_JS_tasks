let sign;
for (let i = 1; i <= 100; i++){
  if (i%3 === 0 && i%5 === 0) sign = 'FizzBuzz';
  else if (i%5 === 0) sign = 'Buzz';
  else if (i%3 === 0) sign = 'Fizz';
  else sign = i;
  console.log (sign);
}