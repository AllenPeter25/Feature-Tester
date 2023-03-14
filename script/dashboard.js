fetch('/data/data.json').then(response => {
    return response.json();
  }).then(data => {

    data.forEach((x) => {
        const parent = document.querySelector(".task-status__data-list")
        parent.innerHTML += `
        <div class="task-status__data-list--card">
            <div>
                <div class="task-status__data-list--title">
                    <p class="task-status__data-list--title--product">${x.title}</p>
                    <p class="${(x.status == "Completed")?"task-status__data-list--title--completed":"task-status__data-list--title--inprogress"}">${x.status}</p>
                </div>
            </div>
            <p class="task-status__data-list--title--location">
                <span class="location">Location:</span>${x.location}</p>
            <div class="task-status__data-list--title">
                <p>
                    <svg class="task-status__data-list--pfp">
                        <use xlink:href="#pfp"></use>
                    </svg>
                </p>
                <p class="task-status__data-list--title--location">${x.name}</p>
                <p class="more">
                    <svg class="task-status__data-list--pfp">
                        <use xlink:href="#more"></use>
                    </svg>
                </p>
            </div>
        </div>
        `
    })
  })

document.querySelector(".task-status__show-more")
  .addEventListener('click',() => {
    document.querySelector(".deals_header--selector")
            .classList?.remove("show")
    document.querySelector(".task-status__heading--selector")
            .classList?.remove("show")
    document.querySelector(".tasks__header--selector")
            .classList?.remove("show")
    document.querySelector(".task-status__data-list")
        .classList.toggle("task-status__data-list--full-list")

    document.querySelector(".task-status__show-more")
        .classList.toggle("task-status__show-more--disable")
})

document.querySelector(".dropdown")
    .addEventListener('click', () => {
        document.querySelector(".deals_header--selector")
            .classList?.remove("show")
        document.querySelector(".tasks__header--selector")
            .classList?.remove("show")
        document.querySelector(".task-status__heading--selector").classList.toggle("show")
})

document.querySelectorAll(".dropdown")[1]
    .addEventListener('click', () => {
        document.querySelector(".task-status__heading--selector")
            .classList?.remove("show")
        document.querySelector(".tasks__header--selector")
            .classList?.remove("show")
        document.querySelector(".deals_header--selector").classList.toggle("show")
})

document.querySelectorAll(".dropdown")[2]
    .addEventListener('click', () => {
        document.querySelector(".task-status__heading--selector")
            .classList?.remove("show")
        document.querySelector(".deals_header--selector")
            .classList?.remove("show")
        document.querySelector(".tasks__header--selector").classList.toggle("show")
})