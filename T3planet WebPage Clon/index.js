let burger = document.querySelector(".burger")
let navbar = document.querySelector(".navigation")

let navList = document.querySelector(".nav-list")

burger.addEventListener("click", ()=>{


    navbar.classList.toggle('h-visiblity')
    navList.classList.toggle('h-visiblity')


})