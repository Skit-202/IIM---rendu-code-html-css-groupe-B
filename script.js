let bouttonElement = document.getElementById("Switch")
let fond = document.body

bouttonElement.addEventListener("click", ()=> {
    fond.classList.toggle("darkMode")
    fond.classList.toggle("lightMode")

    if (fond.classList.contains("lightMode")) {
    bouttonElement.textContent = "Dark mode"
}else{
    bouttonElement.textContent = "Light mode"
}
})

