var navbar = document.querySelector(".navbar");
var navItems = document.querySelector(".items-list");
var burger = document.querySelector(".hamburger");

burger.addEventListener('click', function(){
    navItems.classList.toggle('open');
    burger.classList.toggle('isactive');
    // document.body.classList.toggle('open-nav');
})