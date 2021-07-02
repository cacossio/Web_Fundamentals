

    // #1 Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.

    function createArray(num) {        
        var newArray = [];        
        for (var i = 0; i <= num; i++) {                
            newArray.push(i);
        
        }        
        console.log (newArray);
        return newArray;        
    }
    var x= createArray(255);   

    
    
     
     // #2 Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
    
    function sum_even(num){
        var sum=0
        for (var i=1; i<=num; i++) {
            if(i % 2 == 0){
                sum= sum + i ;
            }   
        }
                console.log(sum); 
                return sum;
                
    }
    var y = sum_even (1000) 

    // #3 Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).

    function sumOdd(num){
        var sum=0
        for (var i=1; i<=num; i++) {
            if(i % 2 != 0){
                sum= sum + i ;
            }   
        }
                console.log(sum); 
                return sum;
    }
    var sumOdd = sumOdd (5000) 

    // #4 Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).


    function iterrArray(array) {  
        sum = 0     
        for (var i = 0; i < array.length; i++) {           
            sum = sum + array[i]; 
        }     
            console.log(sum)
            return sum;        
    }

    var sumTotal= iterrArray([1,2,5,10]); 

    // #5 Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)

     
    function maxOfArray(array) {
        var maximum = array[0];
        for(var i=0; i<array.length; i++) {
            if(maximum < array[i]){   
                 maximum = array[i];
            }     
        }
             console.log(maximum);
             return maximum;
    }

    var maximum = maxOfArray([8,4,6,45]); 


    // #6 Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)

    function average(array){
        var sum=0
        for (var i=0; i<array.length; i++) {
            sum = array[i] + sum;
            }

            console.log(sum / array.length); 
            return sum / array.length;
        }
                     
    var average = average ([2,4,6,12]) 

        
    // #7 Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
          
    function retOddArray() {     
            var newArray = [];        
            for (var i = 0; i <= 50; i++) {
                 if( i % 2 != 0){
                     newArray.push(i);  
                 }                         
            }        
            console.log(newArray);
            return newArray        
        }
        var retOddArray = retOddArray () 

    
    // #8 Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).


    function retNumbers(array) {     
            var y = 4
            count = 0      
            for (var i = 0; i < array.length; i++){
                 if( array[i] > y){
                     count= count + 1;  
                 }                         
            }       
                console.log(count);
                return count;
        }
        var retNumbers = retNumbers ([18,3,4,5,9,14])  

    // #9 Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])

    function squArray(array) {     
            var newArray = [];        
            for (var i = 0; i < array.length; i++) {
                 array[i] = array[i] * array[i]
                     newArray.push(array [i]);  
                                          
            }        
            console.log(newArray);
            return newArray        
        }
        var squArray = squArray ([2,3,4,5,]) 

    // #10 Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])

    function replaceneg(array) {     
            var y = 0        
            for (var i = 0; i < array.length; i++) {
                    if(array[i] < y){
                        array[i] = 0;
                    }                     
            }        
            console.log(array);
            return array;
        }
        var replaceneg = replaceneg ([-23,2,3,4,5,-6,8,-9]) 


    // #11 Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])

    function newValues(array) {     
            var newArray = [];    
            var maximum = array[0]
            var minimum = array[0]
            var sum = 0 
            for (var i = 0; i < array.length; i++) {
            if(maximum < array[i]){   
                maximum = array[i];           
            } 
            else if (minimum > array[i]){
                minimum = array [i];
            }   
            sum = sum + array[i];
           
        }
          newArray = [maximum, minimum, sum/array.length];
          console.log(newArray);
          return newArray;
    }
        var newValues = newValues ([2,5,70,10,-2,22]) 

     
     //#12 Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).

     function swap(array){   
                var aux = array [0];
                array[0] = array[array.length-1];
                array[array.length-1] = aux;
          
            console.log(array);
            return array;
        }

        var swap = swap ([2,5,70,10,-2,22]) 


    // #13 Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
    
    function replaceValues (array) {
                var x = 0    
                for (var i = 0; i < array.length; i++){  
                     if(array[i] < x){   
                        array[i] = "Dojo";           
                    } 
                    else if(array[i] >= x){
                        array[i] = array[i];
                    }  

                 }
                 console.log(array);
                 return array;
            }
         
        var replaceValues = replaceValues ([1,3,-10,5,-9,-76])

       
     