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
    document.querySelector(".content-wrapper").classList.toggle("content-wrapper--sidebar-collape")
})

const img = document.querySelectorAll('#imgs img');

let idx = 0;

function forward() {
  idx++;

  if (idx > img.length - 1) {
    idx = 0;
  }

  imgs.style.transform = `translateX(${-idx * 590}px)`;
}

function backward() {
    idx--;
  
    if (idx < img.length - 1) {
      idx = 0;
    }
  
    imgs.style.transform = `translateX(${idx * 590}px)`;
  }

document.querySelector(".carousel__next").addEventListener('click', () =>{
    forward()
})

document.querySelector(".carousel__previous").addEventListener('click', () => {
    backward()
})

fetch('/data/products.json').then(response => {
  return response.json()
}).then(data => {
  data.forEach((x) => {
    const parent = document.querySelector(".products-list")
    const cardHTML = `<div class="products-list__card">
    <img src="${x.picture}">
    <p>${x.device}</p>
    <div>`
    parent.innerHTML += cardHTML
  })
})