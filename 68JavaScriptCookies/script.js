console.log(document.cookie)
document.cookie = "name=Aman1122334400"
document.cookie = "name2=Aman11223344002"
document.cookie = "name=Aman"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)