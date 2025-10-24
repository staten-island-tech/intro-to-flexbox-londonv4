const makeup = [
{
    name: "Plumping Lip Gloss (pink)",
    category: "Gloss",
    instock: true, 
    price: 14.99,
    img: "img/pinklipgloss",
    alt: "5ml pink gloss for lips",
}
,{
    name: "Plumping Lip Gloss (purple)",
    category: "Gloss",
    instock: true, 
    price: 14.99,
    img: "img/pinklipgloss",
    alt: "5ml purple gloss for lips",
}
,{
    name: "Plumping Lip Gloss (white)",
    category: "Gloss",
    instock: true, 
    price: 14.99,
    img: "img/pinklipgloss",
    alt: "5ml white gloss for lips",
}
]

// create inject function
function inject(makeup) {
    //do something
      const container = document.querySelector(".container");\
      container.insertAdjacentHTML("afterbegin", `<h1>${item.name}</h1>`);
          <div class="card">
        <div class="img">
          <img
            src="https://rembeauty.com/cdn/shop/files/01_plumping-lip-gloss-on-your-collar-shimmer-rem-fembot.png?v=1750190225&width=480"
          />
        </div>
        <div class="h2">
          <h2>Plumping Lip Gloss (pink)</h2>
        </div>
        <div class="h3">
          <h3>$9.99</h3>
        </div>
        </div>
    //query the container
    //using adjacent html push card into container
}
inject(makeup[0]);
{
  makeup.forEach (makeup => {
    if ()
  }

,  function filterByCategory() {
  const cards= document.querySelectorAll("card");
  cards.forEach((card)) => {
    const CardCategory = card.getAttribute("data-category");
    if (category === cardCategory) {
      card.style.display = "";
          }

  }


}


}
/* function addToCart() {
const butons = document.querySelectorAll("button");
console.log(buttons)
btnArray.forEach((btn) => btn.addEventListener("click", function (event) {
    console.log(event.target.textContent);
     console.log(event.target.closest(".card").getAttribute("data-title")
);
})
} */
//find the item in the array
//take that object and push into cart
