// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

/* Explanation: 
The function, nestedFunction uses closure in order to access the variable internal. This is because nestedFunction is nested inside of myFunction. Therefore, nestedFunction is able to access any variable declared and created in myFunction and the global scope.
*/

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

const summation = (num) => {
  let counter = 0;
  for(let i=1;i<num+1; i++)
  {
    counter += i;
  }
  return counter;
}

console.log(summation(10));