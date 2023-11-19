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


// Submenu Mobile
const menuHoverMobile = document.querySelector('.menuHoverMobile');
const submenuMobile = document.querySelector('.submenuCompareMobile');

menuHoverMobile.addEventListener('click', function(event) {
    event.preventDefault();
    submenuMobile.classList.toggle('showMenuMobile');
    if (submenuMobile.classList.contains('showMenuMobile')) {
        submenuBlogMobile.classList.remove('showMenuMobile');
    }
});

const menuHoverBlogMobile = document.querySelector('.menuHoverBlogMobile');
const submenuBlogMobile = document.querySelector('.submenuBlogMobile');

menuHoverBlogMobile.addEventListener('click', function(event) {
    event.preventDefault();
    submenuBlogMobile.classList.toggle('showMenuMobile');
    if (submenuBlogMobile.classList.contains('showMenuMobile')) {
        submenuMobile.classList.remove('showMenuMobile');
    }
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