const menuEvent = () =>{
    const icon = document.querySelector(".button-menu")
    const navbar = document.querySelector(".list__items")
    console.log(navbar)
    icon.addEventListener("click",() =>
        navbar.classList.toggle("list__show")
    )
}
menuEvent()