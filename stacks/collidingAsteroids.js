function collidingAsteroids(asteroids) {
    // Write your code here.
    for(let i = 0; i < asteroids.length-1; i++){
      if(asteroids[i] > 0 && asteroids[i+1] < 0){
        if (Math.abs(asteroids[i]) === Math.abs(asteroids[i+1])) {
          asteroids.splice(i,2);
          console.log('the splice values are >>>', asteroids.splice(i,2))
          console.log('the value of i is decrease by', i =-1)
           i =- 1;
        }
        if(Math.abs(asteroids[i]) > Math.abs(asteroids[i+1])){
          asteroids.splice(i+1, 1);
          i =- 1;
        }
        if(Math.abs(asteroids[i]) < Math.abs(asteroids[i+1])){
          asteroids.splice(i,1)
          i = -1;
        }
      }
    }
    return asteroids;
  }
console.log(collidingAsteroids([-3,5,-8,6,7,-4,-7]))