const openModalLogin = document.getElementById('jsBtnLogin');
const closeModalLogin = document.getElementById('jsBtnCloseLogin');
const closeModalOverlayLogin = document.getElementById('overlayModal');
const openModalLoginMobile = document.getElementById('jsBtnLoginMobile');

openModalLogin.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.add('showModalLogin')
})

openModalLoginMobile.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.add('showModalLogin')
})

closeModalLogin.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModalLogin')
})

closeModalOverlayLogin.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModalLogin')
})

const openModalAccount = document.getElementById('jsBtnOpen')
const closeModalAccount = document.getElementById('jsBtnCloseOpen')
const closeModalOverlayAccount = document.getElementById('jsCloseOverlayOpen')
const openModalAccountMobile = document.getElementById('jsBtnAccountMobile');
const jsBtnAccountHome = document.getElementById('jsBtnAccountHome');
const jsBtnAccountCards = document.getElementById('jsBtnAccountCards');

openModalAccount.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.add('showModalOpen')
})

openModalAccountMobile.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.add('showModalOpen')
})

closeModalAccount.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModalOpen')
})

closeModalOverlayAccount.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModalOpen')
})

jsBtnAccountHome.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.add('showModalOpen')
})

jsBtnAccountCards.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.add('showModalOpen')
})