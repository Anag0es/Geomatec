class MobileNavbar{
    constructor(mobileMenu){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navlist = document.querySelector(navList)
        this.navLinks = document.querySelector(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind();
    }

    animateLinks(){
        this.navLinks.forEach((link, index) =>{
            console.log(index / 7 + 0.3);
            link.style.animation
            ?(link.style.animation = "")
            :(link.style.animation = 'navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s');
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        console.log(this);
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if(this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);
mobileNavbar.init();