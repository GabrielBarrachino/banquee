const openModalLogin = document.getElementById('jsBtnLogin');
const closeModalLogin = document.getElementById('jsBtnClose');
const closeModalOverlayLogin = document.getElementById('overlayModal');
const openModalLoginMobile = document.getElementById('jsBtnLoginMobile');

openModalLogin.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.add('showModal')
})

openModalLoginMobile.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.add('showModal')
})

closeModalLogin.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModal')
})

closeModalOverlayLogin.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModal')
})