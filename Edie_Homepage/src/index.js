
const navbar = document.querySelector('header');

    //Mobile menu
    const hamburger = document.querySelector("#hamburger");
    const menu = document.querySelector("#menu");
    const main = document.querySelector("#main-section");
    const footer = document.querySelector("#footer-section");
    const hLink = document.querySelectorAll("#hLink");
    const faSolid = document.querySelector(".fa-solid");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle('hidden');
        if(menu.classList.contains('hidden')){
            main.classList.remove('hidden');
            footer.classList.remove('hidden');
        }else{
            main.classList.add('hidden');
            footer.classList.add('hidden');
        }
        
        faSolid.classList.toggle('fa-xmark')
    } )

    

      