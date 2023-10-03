let nav_list = document.getElementById("nav-list");
let openMenu = document.querySelector(".menu-open");
let cross = document.querySelector(".cross")

openMenu.addEventListener('click',()=>{

    nav_list.style.opacity = '100%'
    openMenu.style.display = 'none'
})

cross.addEventListener('click',() =>{

    nav_list.style.opacity = '0%'
    openMenu.style.display = 'block'

})