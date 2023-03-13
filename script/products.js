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

document.querySelector(".carousel__next").addEventListener('click', forward)
document.querySelector(".carousel__previous").addEventListener('click', backward)

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