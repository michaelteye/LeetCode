const findMaxBid = function(bids){
  let maxBid = bids[0]
  mindBid = bids[0]

  for(let i =0; i < bids.length; i++){
    for(let j = 0; j < bids.length; j++){
      if(bids[i] > bids[j] && bids[i] > maxBid){
        maxBid = bids[i]
      }else if(bids[i] < bids[j] && bids[i] < mindBid){
        mindBid = bids[i]
      }
    }
  }
  return [mindBid, maxBid]
}

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