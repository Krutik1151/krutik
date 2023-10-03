let nav = document.querySelector(".navigation")
let burger = document.querySelector(".burger")
let navList = document.querySelector(".nav-list")


burger.addEventListener("click",()=>{

    nav.classList.toggle("v-opacity")
    navList.classList.toggle("v-opacity")

})