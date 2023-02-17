/* Подключение navbar во все элементы с id="nav" */
$("#nav").load("/components/navbar.html");
$("#menu").load("/components/navbar.html");

if (localStorage.getItem("darkMode") === "dark") {
    document.body.classList.add("dark");
}

$(document).on('click', '.change-theme-btn', () => {
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("darkMode", "dark");
    } else {
        localStorage.setItem("darkMode",  "light");
    }
})

$(document).on('click', '.menu-btn-open', () => {
    document.body.classList.toggle("menu-opened")
})

$(document).on('click', '.menu-btn-close', () => {
    document.body.classList.toggle("menu-opened")
})

function openDropdown() {
    const menuDropdown = document.querySelectorAll(".dropdown__content")[0];
    const menuBtnDropdown = document.querySelectorAll(".dropdown__btn")[0];

    if (menuDropdown.id.length === 0) {
        menuDropdown.id = "mobile";
        menuBtnDropdown.innerHTML = "Projects <i class='fa-solid fa-caret-down rotate180'></i>";
    } else {
        menuDropdown.id = "";
        menuBtnDropdown.innerHTML = "Projects <i class='fa-solid fa-caret-down'></i>";
    }
}
