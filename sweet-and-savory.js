function sweetAndSavory(dishes, target) {
    // Write your code here.
    let result = [0,0]
    dishes.sort((a,b)=> a - b)
    let left = 0
    let right = dishes.length -1
    let bestDiff = Infinity
  
    while (dishes[left] < 0 && dishes[right] > 0){
      const dishSum = dishes[left] + dishes[right]
      console.log(dishes[left], dishes[right])
      if (dishSum > target) {
        right--
      }else{
        const currentDiff = target - dishSum
        if (currentDiff <= bestDiff) {
          bestDiff = currentDiff
          result = [dishes[left], dishes[right]]
        }
        left++
      }
    }
    return result;
  }
  
  // Do not edit the line below.
  exports.sweetAndSavory = sweetAndSavory;
  