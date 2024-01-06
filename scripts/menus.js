const menuHover = document.querySelector('.menuHover');
const submenu = document.querySelector('.submenuCompare');
const overlayCompare = document.querySelector('.overlayCompare');

menuHover.addEventListener('click', function(event) {
    event.preventDefault();
    submenu.classList.toggle('showMenu');
    if (submenu.classList.contains('showMenu')) {
        submenuBlog.classList.remove('showMenu');
    }
});

overlayCompare.addEventListener('click', function() {
    submenu.classList.remove('showMenu');
});

// Menu Blog
const menuHoverBlog = document.querySelector('.menuHoverBlog');
const submenuBlog = document.querySelector('.submenuBlog');
const overlayBlog = document.querySelector('.overlayBlog');

menuHoverBlog.addEventListener('click', function(event) {
    event.preventDefault();
    submenuBlog.classList.toggle('showMenu');
    if (submenuBlog.classList.contains('showMenu')) {
        submenu.classList.remove('showMenu');
    }
});

overlayBlog.addEventListener('click', function() {
    submenuBlog.classList.remove('showMenu');
});


// Menu Mobile
const abrirMenu = document.getElementById('openMenu');
const fecharMenu = document.getElementById('closeMenu');

function openMenu(){
    document.documentElement.classList.add('menuOpened')
}

function closeMenu() {
    document.documentElement.classList.remove('menuOpened')
}

abrirMenu.addEventListener('click', openMenu);
fecharMenu.addEventListener('click', closeMenu);