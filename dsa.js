
function fibNumberFinder(times) {
  if (times <= 1) return times;

  return fibNumberFinder(times - 1) + fibNumberFinder(times - 2);
}
console.log(fibNumberFinder(30));
