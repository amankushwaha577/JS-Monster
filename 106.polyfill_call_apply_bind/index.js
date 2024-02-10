function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const person = {
  name: 'John'
};

/****************** CALL() = START WRITING CODE HERE *************************/
Function.prototype.myCall = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Function.prototype.myCall - the object is not callable');
  }

  // If context is not provided, default to the global object (window in a browser)
  context = context || globalThis;

  // Create a unique key to avoid overwriting properties on the context object
  const uniqueKey = Symbol();
  context[uniqueKey] = this;

  // Call the function with the modified context and arguments
  const result = context[uniqueKey](...args);

  // Remove the temporary property from the context object
  delete context[uniqueKey];

  return result;

};
greet.myCall(person, 'Hello');
/****************** CODE EDITING BLOCK ENDS HERE *********************/



/****************** START WRITING CODE HERE *************************/
Function.prototype.myApply = function(context, argsArray) {
  if (typeof this !== 'function') {
    throw new TypeError('Function.prototype.myApply - the object is not callable');
  }

  // If context is not provided, default to the global object (window in a browser)
  context = context || globalThis;

  // Ensure argsArray is an array or array-like object
  argsArray = Array.isArray(argsArray) ? argsArray : Array.from(argsArray);

  // Create a unique key to avoid overwriting properties on the context object
  const uniqueKey = Symbol();
  context[uniqueKey] = this;

  // Call the function with the modified context and arguments array
  const result = context[uniqueKey](...argsArray);

  // Clean up by removing the temporary property from the context object
  delete context[uniqueKey];

  return result;
};
greet.myApply(person, ['Hello']);
/****************** CODE EDITING BLOCK ENDS HERE *********************/


/****************** START WRITING CODE HERE *************************/
Function.prototype.myBind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Function.prototype.myBind - the object is not callable');
  }

  // Save a reference to the current function
  const originalFunction = this;

  // Return a new function that, when called, will apply the original function with the specified context and arguments
  return function(...innerArgs) {
    // Apply the original function with the context and concatenated arguments
    return originalFunction.apply(context, args.concat(innerArgs));
  };
};
// Bind the greet function to the person object
const boundGreet = greet.myBind(person, 'Hello');
boundGreet('!'); // Output: Hello, Alice!
/****************** CODE EDITING BLOCK ENDS HERE *********************/



