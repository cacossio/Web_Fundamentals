//#1 Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].

function big (array) {  
    for (var i = 0; i < array.length; i++){  
         if(array[i] > 0){ 
            array[i] = "big";           
            } 
        else if(array[i] < 0){
            array[i] = array[i];
        }  

     }
     console.log(array);
     return array;
}

big ([1,-3,-10,5,-9,-76])


//#2 Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

function printReturn (array) {  
    var maximum = array[0];
    var minimum = array[0];
    for (var i = 0; i < array.length; i++){  
         if(array[i] > maximum){
                maximum = array[i];
            } 
        if(array[i] < minimum){
           minimum = array[i];
        }
     }
     console.log(minimum);
     console.log(maximum);
     return maximum;
}

printReturn ([1,-4,7,18])

// #3 Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.

function printReturn(array){
   console.log(array[array.length-2]);
   for (var i=0;i<array.length;i++){
     if(array[i] % 2 !== 0){
        return array[i];
     }
   }
  
 } 

console.log(printReturn([2,4,6,7,9,12]))

// #4 Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.

function doubleVision(array){
   for(var i=0;i<array.length;i++){
      array[i] = array[i] * 2;
      console.log(array[i]);
   }

}

doubleVision([2,4,6,8])

// #5 Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.

function countpos(array){
   var count = 0
   for(var i=0;i<array.length;i++){
      if(array[i] > 0){
         count = count + 1;
      }   
   }
      array[array.length-1] = count;
      console.log(array);
}

countpos ([-2,-4,2,4,7,1,6])

//#6 Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".

function evensOdds(array){

   for(var i = 0; i < array.length; i++){
      if(array[i] % 2 !== 0){
         if(array[i + 1] % 2 !== 0){
            if(array[i + 2] % 2 !==0){
               console.log( "That's odd");
            }  
         }
      }
      if(array[i] % 2 == 0){
         if(array[i + 1] % 2 == 0){
            if(array[i + 2] % 2 ==0){
                console.log( "Even more so!");
            }  
         }
      }
   }
}

   evensOdds([2,4,3,7,3])






