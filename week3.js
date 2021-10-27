// 1.  Create an array called ages that contains the following 
//          values: 3, 9, 23, 64, 2, 8, 28, 93.
const ages = new Array(3, 9, 23, 64, 2, 8, 28, 93);
console.log(ages);

//      a.  Programmatically subtract the value of the first element 
//              in the array from the value in the last element of the 
//              array (do not use numbers to reference the last element, 
//              find it programmatically, ages[7] – ages[0] is not allowed). 
//              Print the result to the console.
console.log("Difference between last & first elements of ages array: " + (ages[ages.length-1]-ages[0]));

//      b.  Add a new age to your array and repeat the step above to 
//              ensure it is dynamic (works for arrays of different lengths).
const newages = new Array(3, 9, 23, 64, 2, 8, 28, 93,103);
console.log(newages);


//      c.  Use a loop to iterate through the array and calculate the 
//              average age. Print the result to the console.
console.log("Difference between last & first elements of newages array: " + (newages[newages.length-1]-newages[0]));

// 2.  Create an array called names that contains the following 
//          values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
const names = new Array("Sam", "Tommy", "Tim", "Sally", "Buck", "Bob");
console.log(names);

//      a.  Use a loop to iterate through the array 
//          and calculate the average number of letters per name. 
//          Print the result to the console.
var average = 0;
var sum = 0;

for (var index = 0; index < names.length; index++) {
    sum += names[index].length;
}
result = sum/names.length;
console.log("The average number of letters per name is: " + result);


//      b.  Use a loop to iterate through the array again 
//          and concatenate all the names together, separated by spaces, 
//          and print the result to the console.
var newString = "";
for (var index = 0; index < names.length; index++) {
    newString += names[index] + " ";
}
console.log("The concatenated string of names is: " + newString);


// 3.  How do you access the last element of any array?
console.log("The last element of names is: " + names[names.length-1]);

// 4.  How do you access the first element of any array?
console.log("The first element of names is: " + names[0]);

// 5.  Create a new array called nameLengths. 
//      Write a loop to iterate over the previously created names array 
//      and add the length of each name to the nameLengths array.

const nameLengths = [];
for (var index = 0; index < names.length; index++) {
    nameLengths[index] = names[index].length;
}
console.log("The nameLengths array: " + nameLengths);

// 6.  Write a loop to iterate over the nameLengths array 
//      and calculate the sum of all the elements in the array. 
//      Print the result to the console.
var sum = 0;
for (num of nameLengths) {
    sum += num;
}
console.log("The sum of all elements in nameLengths is: " + sum);

// Call to 7.
console.log("Result from call to function numConcat(Hello, 3): " + numConcat("Hello", 3));
console.log("Result from call to function numConcat(Goodbye, 5): " + numConcat("Goodbye", 5));
console.log("Result from call to function numConcat(Adios, 8): " + numConcat("Adios", 8));

// Call to 8.  createFullName(p1,p2)
console.log("Result from call to function createFullName:  " + createFullName("Mickey", "Mouse"));

// Call to 9.  sumAnArray(arrayName)

console.log("Result from call to function sumAnArray(ages):  " + sumAnArray(ages));
console.log("Result from call to function sumAnArray(newages):  " + sumAnArray(newages));

// Call to 10, returnAverageOfNumbers(arrayName)

console.log("Result from call to function returnAverageOfNumbers(ages): " + returnAverageOfNumbers(ages));
console.log("Result from call to function returnAverageOfNumbers(newages): " + returnAverageOfNumbers(newages));

// Call to 11, isGreaterThan(newages,ages)

console.log("Result of isGreaterThan! Is the average of numbers in newages greater than in ages: " + isGreaterThan(newages,ages));

// Call to 12, willBuyDrink (isHotOutside, moneyInPocket)

console.log("Result from call to function willBuyDrink (true, 20.00):  " + willBuyDrink (true, 20.00));
console.log("Result from call to function willBuyDrink (false, 20.00):  " + willBuyDrink (false, 20.00));
console.log("Result from call to function willBuyDrink (true, 10.00):  " + willBuyDrink (true, 10.00));

// Call to 13,  Write Own Function Here!!!!! -- reverseString()
console.log("Results from reverseString: " + reverseString("Hello"));
console.log("Results from my reverseString: " + reverseString("Goodbye"));
console.log("Results from my reverseString: " + reverseString("madam Im adam"));
console.log("Results from my reverseString: " + reverseString("tacocat"));

// Call to 13, Write Own Function Here!!!!! -- calcuatedDiscountedPrice()

console.log("Original Price is: 4000.  New Price: " + calculateDiscountedPrice(4000));
console.log("Original Price is: 3000.  New Price: " + calculateDiscountedPrice(3000));
console.log("Original Price is: 2000.  New Price: " + calculateDiscountedPrice(2000));
console.log("Original Price is: 1000.  New Price: " + calculateDiscountedPrice(1000));




// 7.  Write a function that takes two parameters, word and n, as arguments 
//      and returns the word concatenated to itself n number of times. 
//      (i.e. if I pass in ‘Hello’ and 3, I would expect the function to 
//                          return ‘HelloHelloHello’).

function numConcat(word, number) {
    var result = "";
    for (var index = 0; index < number; index++) {
        result += word;
    }
    return result;
}

// 8.  Write a function that takes two parameters, firstName and lastName, 
//      and returns a full name (the full name should be the first 
//                  and the last name separated by a space).
function createFullName(firstName, lastName) {
    return firstName + " " + lastName;    // The function returns the product of p1 and p2
  }


// 9.  Write a function that takes an array of numbers 
//      and returns true if the sum of all the numbers in the array is greater than 100.

function sumAnArray (newArray) {
    var sum = 0;
    for (number of newArray) {
        sum += number;
    } 
    return sum;  
}

// 10.  Write a function that takes an array of numbers 
//      and returns the average of all the elements in the array.

function returnAverageOfNumbers(newArray) {
    var sum = 0;
    for (number of newArray) {
        sum += number;
    }
    return sum/newArray.length;
}

// 11.  Write a function that takes two arrays of numbers 
//      and returns true if the average of the elements in the 
//          first array is greater than the average of the elements in the second array.

function isGreaterThan (arrayOne, arrayTwo) {
    let sum1 = returnAverageOfNumbers(arrayOne);
    let sum2 = returnAverageOfNumbers(arrayTwo);
    let result = (sum1 > sum2);
    return result;
}

// 12.  Write a function called willBuyDrink that takes a 
//          boolean isHotOutside, and a number moneyInPocket, 
//      and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket) {
    return ((isHotOutside) && (moneyInPocket > 10.50));
}

// 13.  Create a function of your own that solves a problem. 
//      In comments, write what the function does and why you created it.

//
// reverseString(name)
//
// I wrote this function to reverse a string.  I created it to have fun!
// in addition, I love palindromes!
//
function reverseString(name) {
    var reverse = "";
    for (var index = name.length-1; index >=0; index--) {
        reverse += name[index];
    }
    return reverse;
}

//
// calculateDiscountedPrice(originalPrice)
//
// Calculate the discount for a particular price.
//  IF PRICE > $4000 --> the discount is 20%
//           > $3000 --> the discount is 15%
//           > $2000 --> the discount is 10%
//           ELSE discount is 5%.

function calculateDiscountedPrice(price) {
    if (price > 4000) {
        return price - (price * .20);
    } else if (price > 3000) {
        return price - (price * .15);
    } else if (price > 2000) {
        return price - (price * .10);
    } else {
        return price - (price * .05);
    }
}
