function factorial(n) {
  if (isNaN(n) || n < 0) return 1; // لو مش رقم أو رقم سالب، نرجع 1
  if (n === 0 || n === 1) return 1; // الشرط الأساسي
  return n * factorial(n - 1); // recursion
}

const num = parseInt(process.argv[2]);

console.log(factorial(num));
