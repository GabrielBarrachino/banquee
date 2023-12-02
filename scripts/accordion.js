const accordion = document.querySelectorAll('.jsAccordion')

accordion.forEach(acc => {
    acc.addEventListener('click', () => {
        let pai = acc.parentElement;
        pai.classList.toggle('active')
    })
})