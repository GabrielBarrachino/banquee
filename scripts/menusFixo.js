const header = document.getElementById('jsHeader')

function fixedMenu(){
    if(window.pageYOffset > 80) {
        header.classList.add('fixedMenu');
    } else{
        header.classList.remove('fixedMenu');
    }
}

document.addEventListener('scroll', fixedMenu);