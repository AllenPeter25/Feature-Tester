fetch('/data/task-data.json').then(response => {
    return response.json();
}).then(data => {
    data.forEach((x,index) => {
        list = ""
        x.items.forEach((item) => list+=`<li>${item}</li>`)
        const card = document.createElement("div")
        card.innerHTML = `
            <div class="task-container__list--card">
                <div class="task-container__list--card--header">
                    <p class="task-container__list--card--header--title">${x.title}</p>
                    <p class="${(x.status == "Completed"?"task-container__list--card--header--completed":(x.status == "Cancelled"?"task-container__list--card--header--cancelled":"task-container__list--card--header--Inprogress"))}">${x.status}</p>
                </div>
                <p class="task-container__list--card--font">
                    <span class="details duedate">Due Date:</span>${x.due}
                </p>
                <p class="task-container__list--card--font"><span class="details location">Location:</span>${x.location}</p>
                <div class="task-container__list--card--header">
                    <p><span class="details">Items:</span></p>
                    <ul class="task-container__list--card--font list">`+list+`</ul>
                </div>
                <div class="task-container__list--card--footer">
                    <p>
                        <svg  class="pfp">
                            <use xlink:href="#pfp"></use>
                        </svg>
                    </p>
                    <p class="task-container__list--card--font">${x.name}</p>
                    <p class="more">
                        <svg>
                            <use xlink:href="#more"></use>
                        </svg>
                    </p>
                </div>
            </div>`
        if(index % 2 == 0){
            if(data.length%2==1 && data.length-1 == index)
                document.querySelector(".task-container__list2").appendChild(card)
            else
            document.querySelector(".task-container__list1").appendChild(card)
        }
        else{
            document.querySelector(".task-container__list2").appendChild(card)
        }
    })
})

document.querySelector(".task-container__function-bar--listview")
    .addEventListener('click', () => {
        document.querySelector(".task-container").classList.toggle("task-container__listview")
        document.querySelector(".task-container__list--card").classList.toggle("task-container__list--card--list-view")
    })