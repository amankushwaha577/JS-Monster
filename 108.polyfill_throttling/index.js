/****************** START WRITING CODE HERE *************************/
function throttle(func, delay) {
  let isThrottled = false;
  
  return function(...args) {
    if (!isThrottled) {
      // Execute the function
      func.apply(this, args);
      
      // Set throttle flag to prevent further execution until the delay period ends
      isThrottled = true;
      
      // Reset the throttle flag after the delay period
      setTimeout(() => {
        isThrottled = false;
      }, delay);
    }
  };
}
/****************** CODE EDITING BLOCK ENDS HERE *********************/

/****************** START WRITING CODE HERE *************************/

// Define a function to be throttled
function handleClick() {
  console.log('Button clicked');
}

// Throttle the handleClick function with a delay of 500 milliseconds
const throttledClick = throttle(handleClick, 500);

// Attach throttledClick as the event listener for a button click event
document.getElementById('myButton').addEventListener('click', throttledClick);

/****************** CODE EDITING BLOCK ENDS HERE *********************/


