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
    document.querySelector(".task-container").classList.toggle("task-container--sidebar-collape")
})

fetch('/data/task-data.json').then(response => {
    return response.json();
}).then(data => {
    data.forEach((x,index) => {
        const card = document.createElement("div")
        card.classList.add("task-container__list--card")
        const title = document.createElement("p")
        title.classList.add("task-container__list--card--header--title")
        title.textContent = x.title
        const status = document.createElement("p")
        status.classList.add((x.status == "Completed"?"task-container__list--card--header--completed":(x.status == "Cancelled"?"task-container__list--card--header--cancelled":"task-container__list--card--header--Inprogress")))
        status.textContent = x.status
        const due = document.createElement("p")
        due.classList.add("task-container__list--card--font")
        console.log(due.classList);
        due.innerHTML = `<span class="details duedate">Due Date:</span>${x.due}`
        const location = document.createElement("p")
        location.classList.add("task-container__list--card--font")
        location.innerHTML = `<span class="details location">Location:</span>${x.location}`
        const innerDiv2 = document.createElement("div")
        innerDiv2.classList.add("task-container__list--card--header")
        const temp = document.createElement("p")
        temp.innerHTML = `<span class="details">Items:</span>`
        const items = document.createElement("p")
        items.classList.add("task-container__list--card--font","list")
        x.items.forEach((item)=>{items.innerHTML += `<li>${item}</li>`})
        const name = document.createElement("p")
        name.classList.add("task-container__list--card--font")
        name.textContent = x.name
        const innerDiv3 = document.createElement("div")
        innerDiv3.classList.add("task-container__list--card--header")
        const innerdiv1 = document.createElement("div")
        innerdiv1.classList.add("task-container__list--card--header")
        const more = document.createElement("p")
        more.classList.add("more")
        more.innerHTML = `<svg width="16" height="4" viewBox="0 0 16 4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 0C15.1 0 16 0.9 16 2C16 3.1 15.1 4 14 4C12.9 4 12 3.1 12 2C12 0.9 12.9 0 14 0ZM8 4C6.9 4 6 3.1 6 2C6 0.9 6.9 0 8 0C9.1 0 10 0.9 10 2C10 3.1 9.1 4 8 4ZM2 4C0.9 4 0 3.1 0 2C0 0.9 0.9 0 2 0C3.1 0 4 0.9 4 2C4 3.1 3.1 4 2 4Z" fill="#95A5A6"/>
        </svg>`
        innerdiv1.appendChild(title)
        innerdiv1.appendChild(status)
        card.appendChild(innerdiv1)
        card.appendChild(due)
        card.appendChild(location)
        innerDiv2.appendChild(temp)
        innerDiv2.appendChild(items)
        card.appendChild(innerDiv2)
        innerDiv3.appendChild(name)
        innerDiv3.appendChild(more)
        card.appendChild(innerDiv3)
        
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