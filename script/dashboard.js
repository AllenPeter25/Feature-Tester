const blackElements = document.querySelectorAll(".sidebar__links--text-black");

document.querySelectorAll(".sidebar__links")[5].addEventListener('click',() => {
    blackElements.forEach((x) => x.classList.toggle("collapse"))
    document.querySelectorAll(".sidebar__links--text-blue").forEach((x) => {
        x.classList.toggle("collapse")
    })
    document.querySelectorAll(".sidebar__links--toggle-theme").forEach((x) => {
        x.classList.toggle("collapse")
    })
    document.querySelector(".sidebar").classList.toggle("sidebar--width")
    document.querySelectorAll(".sidebar__links")[5].childNodes[1].classList.toggle("expand-btn")
})