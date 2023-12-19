// sessionStorage.getItem("name")
// sessionStorage.clear()
// sessionStorage.removeItem("name")
// sessionStorage.setItem("name", "Aman")
// sessionStorage.removeItem("name")


window.onstorage = (e) => {
        alert("changed")
        console.log(e)
}