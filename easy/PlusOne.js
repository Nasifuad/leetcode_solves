const digits = [9, 9, 9, 9];

const plusOne = (digits) => {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    digits[i] += carry;
    carry = 0;
    if (digits[i] === 10) {
      digits[i] = 0;
      carry = 1;
    } else {
      return digits;
    }
  }
  digits.unshift(carry);
  return digits;
};

console.log(plusOne(digits));
