

// TOGGLE SIDEBAR
const menuBar = document.querySelector("#content nav .bx.bx-menu");
const sidebar = document.getElementById("sidebar");

menuBar.addEventListener("click", function () {
    sidebar.classList.toggle("hide");
});

const switchMode = document.getElementById("switch-mode");

document.addEventListener("DOMContentLoaded", function () {
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    if (isDarkMode) {
        document.body.classList.add("dark");
        switchMode.checked = true;
    }
});

// Menyimpan perubahan mode di localStorage
switchMode.addEventListener("change", function () {
    if (this.checked) {
        document.body.classList.add("dark");
        localStorage.setItem("dark-mode", "true");
    } else {
        document.body.classList.remove("dark");
        localStorage.setItem("dark-mode", "false");
    }
});
