// const weeklysales = [23, 12, 10, 5, 1]
// const totalsales = new Array(weeklysales.length).fill(0)
// console.log(totalsales)

// for(let i = 0; i < weeklysales.length; i++){
//     console.log('the totalsale is >>>',totalsales[i])
//     console.log('the weeklysales is >>>',weeklysales[i])
//     let sum =  totalsales[i] += weeklysales[i]
//     console.log('the sum is >>',sum)
// }

// console.log(totalsales)

function arrayOfProducts(array) {
    // Write your code here.
     const n = array.length;
    //Initializing left and right product arrays
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    const output = new Array(n);
  
    // Calculating the leftProduct
    for( let i = 1; i < n; i++){
    console.log('the left product is given as',leftProducts[i-1])
    console.log('the element is >>>',array[i-1])
      leftProducts[i]= leftProducts[i-1] * array[i-1];
      console.log('the leftvalue is >>>',leftProducts[i])
    }
  
    for(let i = n-2; i >= 0; i --){
      rightProducts[i] =  rightProducts[i + 1] * array[i + 1];
      console.log('the rightvalue is >>>',rightProducts[i])
    }
  
    for(let i = 0; i < n; i ++){
      output[i] = leftProducts[i] * rightProducts[i]
    }
    return output;
  }

console.log(arrayOfProducts([5,1,4,2]))