function calculateSum(n, callback) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  callback(sum);
}

console.log('Before function call');

setTimeout(() => {
  calculateSum(1_000_000, (result) => {
    console.log('Inside function');
    console.log('Sum =', result);
  });
}, 2000);

console.log('After function call');
