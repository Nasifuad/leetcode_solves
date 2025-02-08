const roman_num = "III";

const roman = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const convertToInteger = (s) => {
  let res = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (roman[s[i]] >= roman[s[i + 1]]) {
      res += roman[s[i]];
    } else {
      res -= roman[s[i]];
    }
  }
  return (res += roman[s[s.length - 1]]);
};
const sol = convertToInteger(roman_num);
console.log(`Roman ${roman_num} is in integer ${sol}`);
