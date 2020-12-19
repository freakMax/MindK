window.onload = function(){
    const user = document.querySelector('.user-text')
    const menu = document.querySelector('.menu-block');
    const profile = document.querySelector('.menu__text')
    user.addEventListener('click',()=>{
        menu.classList.toggle('active')
    })
    profile.addEventListener('click',()=>{
        menu.classList.remove('active')
    })
}