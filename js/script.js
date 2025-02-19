/*

*/

// for (let i = 1; i <= 100; i++ ) { 
//     console.log(i); 
//  }


for( let i = 0; i <= 100; i++){
     let fizzBuzz;
     if(i % 3 === 0){
         fizzBuzz = "fizz";
    }else if(i % 5 === 0){
         fizzBuzz = "buzz";
    }else if ( i % 3, i % 5 === 0){
        fizzBuzz = "fizzBuzz";
    }
    console.log( fizzBuzz);
}

for(let i = 1; i <= 10; i++){
   const multiply = 5 * i;
    console.log(`Iterazione $(i): 5 * $(i) = $(multiply)`);    
}



