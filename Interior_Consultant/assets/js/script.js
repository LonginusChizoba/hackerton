function Menu(){
    const menuIcon = document.getElementById("menu-icon");
    if(menuIcon.classList.contains("fa-bars")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark")
        menuItem("remove");
    } else if(menuIcon.classList.contains("fa-xmark")){
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars")
        menuItem("add");
    }
}

function menuItem(action){
    const menuItem = document.getElementById("menu-item");
    const mobileMenuItem = document.getElementById("mobile-menu-item");
    const logo = document.getElementById("logo");
    const main = document.getElementById("main")
    if(action == "remove"){
        mobileMenuItem.classList.remove('hidden');
        logo.classList.add('hidden')
        main.classList.add('hidden')
    } else if(action == "add"){
        mobileMenuItem.classList.add('hidden')
        logo.classList.remove('hidden')
        main.classList.remove('hidden')
    }
    
}