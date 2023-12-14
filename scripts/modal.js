const openModal = document.getElementById('jsBtnLogin');
const closeModal = document.getElementById('jsBtnClose');
const closeModalOverlay = document.getElementById('overlayModal');

openModal.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.add('showModal')
})

closeModal.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModal')
})

closeModalOverlay.addEventListener('click', () => {
    let html = document.documentElement;
    html.classList.remove('showModal')
})