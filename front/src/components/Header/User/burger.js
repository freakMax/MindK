window.onload = function(){
    const user = document.querySelector('.user-text')
    const menu = document.querySelector('.menu-block');
    user.addEventListener('click',()=>{
        menu.classList.toggle('active')
    })
}