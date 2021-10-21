//ScrollBar
window.onscroll = () => {
    if (window.scrollY > 80) {
        document.querySelector(".header .header-2").classList.add("active");
    } else {
        document.querySelector(".header .header-2").classList.remove("active");
    }
};

window.onload = () => {
    if (window.scrollY > 80) {
        document.querySelector(".header .header-2").classList.add("active");
    } else {
        document.querySelector(".header .header-2").classList.remove("active");
    }
};

searchForm = document.querySelector(".search-form");
document.querySelector("#search-btn").onclick = () => {
    searchForm.classList.toggle("active");
};

//Open login form
let loginForm = document.querySelector(".login-form-container");

document.querySelector("#login-btn").onclick = () => {
    loginForm.classList.toggle("active");
};
//Close login form
document.querySelector("#close-login-btn").onclick = () => {
    loginForm.classList.remove("active");
};