let string = "helloworld";
let needle = "ll";

for (let i = 0; i < string.length; i++) {
  if (string[i] === needle[0]) {
    let j = 1;
    while (j < needle.length) {
      if (string[i + j] === needle[j]) {
        j++;
      } else {
        break;
      }
    }
    if (j === needle.length) {
      console.log(i);
    }
  }
}
