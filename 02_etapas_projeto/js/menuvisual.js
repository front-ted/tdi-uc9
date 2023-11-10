
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