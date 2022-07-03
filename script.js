const openMenu = () => {
    let menu = document.getElementById("menu");
    menu.style.animationName = "animation-open-menu";
    menu.style.animationFillMode = "both";
    menu.style.animationDuration = "1s";
    menu.style.right = "0";
    let btnMenu = document.getElementById("btn-menu");
    btnMenu.style.display = "none";
    // document.addEventListener("click", e => {
    //     const target = e.target;
    //     if(target.closest(".header_nav_adaptive_menu")){
    //         console.log(target);
    //     }
    //     else {
    //         closeMenu();
    //         btnMenu.style.display = "block";
    //     }
    // })
}

const closeMenu = () => {
    let menu = document.getElementById("menu");
    menu.style.animationName = "animation-close-menu";
    menu.style.animationDuration = "1s";
    menu.style.animationFillMode = "both";
    menu.style.right = "-166px";
    // if(menu.style.right === "-100px"){
    //     document.getElementById("btn-menu").style.display = "block";
    // }
}

const activateMenu = document.querySelector(".header_nav_hamburger-menu");
activateMenu.addEventListener("click", () => {
   openMenu(); 
})
document.addEventListener("click", e => {
    if(!e.target.closest(".header_nav_hamburger-menu") && !e.target.closest(".header_nav_adaptive_menu")){
        closeMenu();
        document.getElementById("btn-menu").style.display = "block";
    }else if(e.target.closest(".button-close") || e.target.closest(".header_item")){
        closeMenu();
        document.getElementById("btn-menu").style.display = "block";
    }
})
