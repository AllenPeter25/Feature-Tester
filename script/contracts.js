fetch('/data/contracts.json').then(resopnse => {
    return resopnse.json()
}).then(data => {
    data.forEach((x) => {
        const parent = document.querySelector(".contracts-list")
        parent.innerHTML += `
        <div class="contracts-list__card">
            <div class="contracts-list__card--header">
                <p class="contracts-list__card--header--title">${x.title}</p>
                <p class="${(x.status=="Signed"?"contracts-list__card--header--signed":(x.status=="Building"?"contracts-list__card--header--building":"contracts-list__card--header--inprogress"))}">${x.status}</p>
            </div>
            <p class="contracts-list__card--font"><span class="details company">Company:</span>${x.Company}</p>
            <p class="contracts-list__card--font"><span class="details location">Location:</span>${x.Location}</p>
            <p class="${x.Contract?"contracts-list__card--blue-link":"contracts-list__card--red-link"} contracts-list__card--font"><span class="details contract">Contract:</span>${(x.Contract?x.Contract:"Add condition")}</p>
            <p class="${x.Contract?"contracts-list__card--blue-link":"contracts-list__card--red-link"}"><span class="details">Assignee:</span>${(x.Assignee?x.Assignee:"Add Assignee")}</p>
            <div class="contracts-list__card--footer">
                <svg class="contracts-list__card--footer-pfp">
                    <use xlink:href="#pfp"></use>
                </svg>
                <p class="contracts-list__card--font">${x.name}</p>
                <svg class="more">
                    <use xlink:href="#more"></use>
                </svg>
            </div>
        </div>`
    })
})

document.querySelector(".task-container__function-bar--add").addEventListener('click',() => {
    document.querySelector(".content-wrapper__modal-window").classList.toggle("content-wrapper__modal-window--activate")
    document.querySelector(".overlay").classList.toggle("hidden")
})

document.querySelector(".content-wrapper__modal-window--title--cancel").addEventListener('click', () => {
    document.querySelector(".content-wrapper__modal-window").classList.toggle("content-wrapper__modal-window--activate")
    document.querySelector(".overlay").classList.toggle("hidden")
})