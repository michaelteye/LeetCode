function bestDigits(number, numDigits){
     let stack  = [];
     let simp = numDigits

     for(let i = 0; i < number.length; i++){
      let currentValue = number[i]
      while(numDigits > 0 && stack.length > 0 && currentValue > stack[stack.length-1]){
        stack.pop()
        numDigits--
      }
      stack.push(currentValue)
      if(numDigits ===0){
        break
      }
     }
     return stack
}