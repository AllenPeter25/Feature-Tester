const blackElements = document.querySelectorAll(".sidebar__links--text-black");
const toggleBtn = document.querySelectorAll(".sidebar__links")[5];
toggleBtn.addEventListener('click',() => {
    blackElements.forEach((x) => x.classList.toggle("collapse"))
    document.querySelectorAll(".sidebar__links--text-blue").forEach((x) => {
        x.classList.toggle("collapse")
    })
    document.querySelectorAll(".sidebar__links--toggle-theme").forEach((x) => {
        x.classList.toggle("collapse")
    })
    document.querySelector(".sidebar").classList.toggle("sidebar--width")
    toggleBtn.childNodes[1].classList.toggle("expand-btn")
    document.querySelector(".task-status")?.classList.toggle("task-status--sidebar-collape")
    document.querySelector(".task-container")?.classList.toggle("task-container--sidebar-collape")
    document.querySelector(".content-wrapper")?.classList.toggle("content-wrapper--sidebar-collape")
})