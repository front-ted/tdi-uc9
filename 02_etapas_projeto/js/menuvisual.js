
window.addEventListener("scroll", function() {
    const divInicial = 80;
    const menuTopo = document.getElementsByClassName("menu");

    // Obtém a altura da primeira div
    const divInicialHeight = divInicial.clientHeight;

    // Obtém a posição atual de rolagem vertical
    const scrollTop = window.scrollY;

    // Verifica se o usuário rolou além da primeira div
    if (scrollTop > divInicialHeight) {
        menuTopo.classList.add("fixedmenu");
    } else {
        menuTopo.classList.remove("fixedmenu");
    }
});

//codigo para rolagem do menu - inicia em 80 px e depois zera//
document.addEventListener("DOMContentLoaded", function() {
    var menu = document.getElementById("fixedMenu");
    var initialMarginTop = 80;

    // Adiciona um ouvinte de rolagem à página
    window.addEventListener("scroll", function() {
        // Verifica se o usuário já rolou a página
        if (window.scrollY > 0) {
            // Se sim, ajusta a margem superior para 0
            menu.style.marginTop = "0";
        } else {
            // Caso contrário, mantém a margem inicial
            menu.style.marginTop = initialMarginTop + "px";
        }
    });
});