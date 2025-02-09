const strings = ["flower", "flower", "flower", "flower"];

const longestSubstring = () => {
  if (strings.length == 1) {
    console.log("one");
    return strings[0].length;
  }
  for (let i = 0; i < strings[0].length; i++) {
    let sub = strings[0].slice(0, i + 1);

    for (let j = 1; j < strings.length; j++) {
      if (strings[j].slice(0, i + 1) !== sub) {
        return i;
      }
    }
  }
  return strings[0].length;
};
const res = longestSubstring(strings);
if (res > 0) {
  console.log(strings[0].slice(0, res));
} else {
  console.log(" empty");
}
