var isValid = function(s) {  
  const stack = [];
  for (i = 0; i < s.length; i++) {
      let c = s.charAt(i);
      switch (c) {
        case '(': stack.push(')');
          break;
        case '{': stack.push('}');
          break;
        case '[': stack.push(']');
          break;
        default :
          if (c !== stack.pop()) {
            return false;
          }
      }
  }
  console.log(stack)
  return stack.length === 0;
}
  
