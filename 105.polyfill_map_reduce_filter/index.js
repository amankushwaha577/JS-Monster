/******** MAP =  START WRITING CODE HERE *************/

Array.prototype.mymap = function (callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }
  
    const array = this;
    const length = array.length;
    const mappedArray = new Array(length);
  
    for (let i = 0; i < length; i++) {
      if (i in array) {
        mappedArray[i] = callback.call(thisArg, array[i], i, array);
      }
    }
  
    return mappedArray;
  };

  let arr = [1,2,3];
  arr= arr.mymap((element)=>element+1);
  console.log(arr);
  
/****************** CODE EDITING BLOCK ENDS HERE *************/


/******** FILTER =  START WRITING CODE HERE *************/
Array.prototype.myfilter = function(callback, thisArg) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }
  
    const array = this;
    const length = array.length;
    const filteredArray = [];
  
    for (let i = 0; i < length; i++) {
        if (callback.call(thisArg, array[i], i, array)) {
          filteredArray.push(array[i]);
        }
    }
  
    return filteredArray;
  };

  const numbers = [1, 2, 3, 4, 5];
  const evenNumbers = numbers.myfilter(num => num % 2 === 0);
  console.log(evenNumbers); // Output: [2, 4]

/****************** CODE EDITING BLOCK ENDS HERE *************/


/******** REDUCE =  START WRITING CODE HERE *************/
Array.prototype.myreduce = function (callback, initialValue) {
    if (typeof callback !== 'function') {
      throw new TypeError('Callback must be a function');
    }
  
    const array = this;
    const length = array.length;
  
    // Check if the array is empty and no initial value is provided
    if (length === 0 && initialValue === undefined) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
  
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startIndex; i < length; i++) {
      if (i in array) {
        accumulator = callback(accumulator, array[i], i, array);
      }
    }
  
    return accumulator;
  };

  const numbers2 = [1, 2, 3, 4, 5];
  // Example usage
  const sum = numbers2.myreduce((acc, num) => acc + num, 0);
  console.log(sum); // Output: 15

  
  /****************** CODE EDITING BLOCK ENDS HERE *********************/
  