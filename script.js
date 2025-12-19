// le dark mode

let bouttonElement = document.getElementById("Switch")
let fond = document.body

bouttonElement.addEventListener("click", function () {
    fond.classList.toggle("darkMode")
    fond.classList.toggle("lightMode")

    if (fond.classList.contains("lightMode")) {
    bouttonElement.textContent = "Dark mode"
}else{
    bouttonElement.textContent = "Light mode"
}
})

// simulateur de combat

function precision(personnage) {
    return Math.random() < personnage.precision
}

function attaquer(attaquant, defenseur) {
    
}
