function Menu(){
    const menuIconDiv = document.getElementById("menu-icon-div");
    const menuIcon = document.getElementById("menu-icon");
    const mainSection = document.getElementById("main-section");
    const footerSection = document.getElementById("footer-section")
    if(menuIcon.classList.contains("fa-bars")){
        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark")
        menuIconDiv.classList.add("mt-[-50.5rem]")
        mainSection.classList.add("hidden")
        footerSection.classList.add("hidden")
        menuItem("remove");
    } else if(menuIcon.classList.contains("fa-xmark")){
        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars")
        menuIconDiv.classList.remove("mt-[-50.5rem]")
        mainSection.classList.remove("hidden")
        footerSection.classList.remove("hidden")
        menuItem("add");
    }
}

function menuItem(action){
    const mobileMenuItem = document.getElementById("mobile-menu-item");
    const logo = document.getElementById("logo");
    if(action == "remove"){
        mobileMenuItem.classList.remove('hidden');
        logo.classList.add('hidden')
    } else if(action == "add"){
        mobileMenuItem.classList.add('hidden')
        logo.classList.remove('hidden')
    }
  
}