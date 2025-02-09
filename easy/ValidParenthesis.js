const check = "([])";

const isValid = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let sub = s[i];
    if (stack.length) {
      let last = stack[stack.length - 1];

      if (
        (last === "(" && sub === ")") ||
        (last === "[" && sub === "]") ||
        (last === "{" && sub === "}")
      ) {
        stack.pop();
        continue;
      }
    }
    stack.push(sub);
  }
  return stack.length === 0;
};

console.log(isValid(check));
