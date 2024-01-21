burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
nav_list = document.querySelector('.nav_list')
nav_search = document.querySelector('.nav_search')

burger.addEventListener('click',()=>{
    nav_search.classList.toggle('v-class-resp');
    nav_list.classList.toggle('v-class-resp');
    navbar.classList.toggle('nav_height');
})