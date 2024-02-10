/****************** START WRITING CODE HERE *************************/

function debounce(func, delay) {
  let timerId;
  
  return function(...args) {
    clearTimeout(timerId);
    
    timerId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

/****************** CODE EDITING BLOCK ENDS HERE *********************/

/****************** START WRITING CODE HERE *************************/

// Define a function to be debounced
function handleClick() {
  console.log('Button clicked');
}

// Debounce the handleClick function with a delay of 500 milliseconds
const debouncedClick = debounce(handleClick, 500);

// Attach debouncedClick as the event listener for a button click event
document.getElementById('myButton').addEventListener('click', debouncedClick);

/****************** CODE EDITING BLOCK ENDS HERE *********************/

