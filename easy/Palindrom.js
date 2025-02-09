const a = 121;

const findPalindrom = (a) => {
  return a.toString().split("").reverse().join("") == a;
};

const res = findPalindrom(a);

console.log(`the number ${a} is palindrom? - ${res}`);
