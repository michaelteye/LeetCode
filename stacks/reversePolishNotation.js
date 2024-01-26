function reversePolishNotation(tokens) {
    // Write your code here.
    let stack = [];
  
    for(let i = 0; i < tokens.length; i++){
      let char = tokens[i];
  
      if(char === "+"){
        stack.push(stack.pop() + stack.pop());
      } else if(char === "-"){
        let num1 = stack.pop();
        stack.push(stack.pop() - num1);
      } else if(char === "*"){
        stack.push(stack.pop() * stack.pop());
      } else if(char === "/"){
        let num1 = stack.pop();
        stack.push(Math.trunc(Number(stack.pop() / num1)));
      } else {
        stack.push(Number(char));
      }
    }
    return Math.trunc(stack.pop()); // Removed Math.floor here
}
  