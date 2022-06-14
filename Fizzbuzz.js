//FizzBuzz

for (let counter = 1; counter <= 100; counter++){
//Print "FizzBuzz" for numbers that are divisible by both 3 and 5
    if (counter % 3 === 0 && counter % 5 === 0){
        console.log('FizzBuzz');
    }
//For numbers divisible by 3, print "Fizz" instead of the number
    else if (counter % 3 === 0) {
      console.log("Fizz");
    }
//For numbers divisible by 5 (and not 3), print "Buzz"
    else if (counter % 5 === 0) {
      console.log("Buzz");
    } 
//For all other cases
    else {
      console.log(counter);
    }
}



