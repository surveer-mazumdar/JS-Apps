//https://www.hackerrank.com/challenges/apple-and-orange/problem


// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    let applesLanded = getCount(apples, s, t, a);
    let orangesLanded = getCount(oranges, s, t, b);
    
     console.log(applesLanded);
     console.log(orangesLanded);
  
}

  function getCount(fruits, s , t, distance){
    let fruitsLanded = 0;
    fruits.forEach((value) => {
        let landed = value + distance;
        if( landed >= s && landed <= t){
            fruitsLanded++;
        }
    });   

    return fruitsLanded;
  }
  let s= 7; t = 10; a= 4; b =12; 
  let apples = [2, 3, -4]; 
  let oranges = [3, -2, -4];
  countApplesAndOranges(s, t, a, b, apples, oranges);