<<<<<<< HEAD
let menu = document.querySelector('#menu-btn');
let navBar = document.querySelector(".navBar");

/*
=======
/*let menu = document.querySelector('#menu-btn');
let navBar = document.querySelector(".navBar");


>>>>>>> 0f327dc48a06dca72623c4513f3da9efc211099b

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}
window.scroll =()=>{
    menu.classList.remove('fa-times');
    navBar.classList.remove('active');
   

}*/

var sidemenu = document.querySelector(".side-menu");
var bars= document.querySelector(".fa-solid");
function penMenu(){
    sidemenu.style.display ="block"
}
function closemenu(){
    sidemenu.style.display ="none"
}
function showsideBar(){
    sidemenu.style.display ="block"

}



