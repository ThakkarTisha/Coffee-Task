let card4 = document.querySelector(".grid-4");
let card3 = document.querySelector(".grid-3");
let card1 = document.querySelector(".grid-list");
let productrow = document.querySelector(".all-product-card");

card3.addEventListener("click", () => {
  document.querySelectorAll(".grid-btn button").forEach(el => el.classList.remove("active"));
  card3.classList.add('active');
  productrow.className = [`row g-4 row-cols-xxl-3 row-cols-sm-2 row-cols-1 all-product-card grid-3-view`];
});

card4.addEventListener("click", () => {
  document.querySelectorAll(".grid-btn button").forEach(el => el.classList.remove("active"));
  card4.classList.add('active');
  productrow.className = [`row g-4 row-cols-xxl-4 row-cols-xl-3 row-cols-sm-2 row-cols-1 all-product-card grid-4-view`];
});

card1.addEventListener("click", () => {
  document.querySelectorAll(".grid-btn button").forEach(el => el.classList.remove("active"));
  card1.classList.add('active');
  productrow.className = [`row g-4 row-cols-1 all-product-card list-view`];
});
