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

fetch('/data.json').then(response => {
    return response.json();
  }).then(data => {

    data.forEach((x) => {
        const parent = document.querySelector(".task-status__data-list")
        const ele = document.createElement("div")
        ele.classList.add("task-status__data-list--card")
        const div = document.createElement("div")
        const innerDiv = document.createElement("div")
        innerDiv.classList.add("task-status__data-list--title")
        const title = document.createElement("p")
        title.classList.add("task-status__data-list--title--product")
        title.textContent = x.title
        const status = document.createElement("p")
        status.classList.add((x.status == "Completed")?"task-status__data-list--title--completed":"task-status__data-list--title--inprogress")
        status.textContent = x.status
        const location = document.createElement("p")
        location.classList.add("task-status__data-list--title--location")
        location.innerHTML = `<span class="location">Location:</span> ${x.location}`
        const name = document.createElement("p")
        name.classList.add("task-status__data-list--title--location")
        name.textContent = x.name
        innerDiv.appendChild(title)
        innerDiv.appendChild(status)
        div.appendChild(innerDiv)
        ele.appendChild(div)
        ele.appendChild(location)
        ele.appendChild(name)
        parent.appendChild(ele)
    })
  })

document.querySelector(".task-status__show-more")
  .addEventListener('click',() => {
    document.querySelector(".task-status__data-list")
        .classList.toggle("task-status__data-list--full-list")

    document.querySelector(".task-status__show-more")
        .classList.toggle("task-status__show-more--disable")
})

document.querySelector(".dropdown")
    .addEventListener('click', () => {
        document.querySelector(".task-status__heading--selector").classList.toggle("show")
})

document.querySelectorAll(".dropdown")[1]
    .addEventListener('click', () => {
        document.querySelector(".deals_header--selector").classList.toggle("show")
})

document.querySelectorAll(".dropdown")[2]
    .addEventListener('click', () => {
        document.querySelector(".tasks__header--selector").classList.toggle("show")
})