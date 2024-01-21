const input = document.getElementById("input");

let timeoutId;

const debounce = (callback) =>
{
    clearTimeout(timeoutId);

    timeoutId = setTimeout(callback , 1200);
}

input.addEventListener("input", () =>{
    debounce(()=>{
        console.log("Fetching Data from database....");
    })
})