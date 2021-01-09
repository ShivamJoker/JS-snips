const printIfPerfect = (num) => {
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
      //console.log(sum)
    }
  }
  if (sum === num) {
    console.log(`${num} is a perfect number`);
  }
};
let num = 137438691328;
while (num) {
  printIfPerfect(num);
  num++;
}
