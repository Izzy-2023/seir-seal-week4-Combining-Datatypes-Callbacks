// *******************************************
// Common Programming Principles
// *******************************************

// DRY
// - principle used to reduce repetition and avoids redundancy 
// KISS
// - code that is simple and doesn't compromise functionality
// Avoid creating a YAGNI
// - only implement features as needed and optimize code as early as possible
// Do the simplest thing that could possibly work
// - When programming ask yourself the question, what is the simplest thing that could possibly work.
// Don't make me think
// - Code should be simplified so it is easy to read and understood with a minimum of effort required.
// Write code for the maintainer
// - write code that is easy to understand, modify, and maintain for future developers
// Single responsibility principle
// - A class or module should have only one reason to change. This ensures that code is maintainable
// Avoid premature optimization
// - Don’t think about optimization unless your code is working
// Separation of concerns
// - Different areas of functionality should be managed by distinct and minimally overlapping modules of code.

// Answer

// Which ones surprise you (if any)? What surprised me is the YAGNI principle because as a developer we are encouraged to design for the future and anticipate future needs. However, the YAGNI principle suggests that it's better to focus on immediate needs and avoid unnecessary complexity.
// Which one is currently giving you the most struggle? 
// The principle that I struggle is the Single Responsibility Principle (SRP), bcause it is challenging to identify the single responsibility of a class or module and that it can conflict with other design principles, such as DRY because it suggests to avoid code duplication.

// ******************************************
// Commenting Code
// ******************************************

// Define a function named 'f' that takes an integer 'l' as input. 
const f = l => {
// Declare four variables: 'es', 'p', 'c', and 'n'.
    let es = 0, p = 0, c = 1, n = 0
// This is a while loop that iterates as long as 'c' is less than or equal to 'l'.
    while (c <= l) {
// Calculate the sum of 'c' and 'p' and stores the result in 'n'.
      n = c + p;
// Swap the values of 'c' and 'p' using array destructuring.
      [c, p] = [n, c]
// Add the value of 'c' to 'es' if 'c' is even, or 0 if 'c' is odd.
      es += (c % 2 === 0) ? c : 0
// While loop ends.
    }
// Return the value of 'es'.
    return es
  }
// Call the 'f' function with the argument 55 and print the returned value to the console.
  console.log(f(55))


  
  const f2 = (limit) => {
    let evenSum = 0;
    let previous = 0;
    let current = 1;
    while (current <= limit) {
      let next = current + previous;
      previous = current;
      current = next;
      if (current % 2 === 0) {
        evenSum += current;
      }
    }
    return evenSum;
  }
  
  
  console.log(f2(55))

//   Answer with comments:

// In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a classic ) - are there any other variable names or things that would make this code easier to read and understand?
// -- A more semantic name for this function could be sumEvenNumbers

// If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with f or f2?
// -- If the task involves expanding the functionality to include both even and odd Fibonacci sums, the f2 code would be a better starting point. 

// Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// -- The semi-colon on the fourth line is necessary and it does affect code execution because it doesn't run.