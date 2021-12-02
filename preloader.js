document.addEventListener("DOMContentLoaded", function (){
    window.onload = function () {
    let preloader = document.getElementById("preloader")
    preloader.classList.add("hide_preloader")
    setInterval(function () {
        preloader.classList.add("preloader_hidden")
    }, 990)
    }
})
