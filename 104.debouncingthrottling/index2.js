const input = document.querySelector("input");

let isThrottled = false;

const throttle = (callback, delay) => {
  if (isThrottled != true) {
    isThrottled = true;
    setTimeout(() => {
      callback();
      isThrottled = false;
    }, delay);
  }
};

input.addEventListener("input", () => {
  throttle(() => {
    console.log("Throttling Fetching Data from database....");
  }, 1200);
});
