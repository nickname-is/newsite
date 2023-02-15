/* Подключение navbar во все элементы с id="nav" */
$("#nav").load("../components/navbar.html");
$("#menu").load("../components/navbar.html");

$(document).on('click', '.menu-btn-open', () => {
    document.body.classList.toggle("menu-opened")
})

$(document).on('click', '.menu-btn-close', () => {
    document.body.classList.toggle("menu-opened")
})