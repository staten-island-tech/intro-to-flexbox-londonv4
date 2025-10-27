const makeup = [
{
    name: "Plumping Lip Gloss (pink)",
    category: "Gloss",
    instock: true, 
    price: 14.99,
    img: "img/pinklipgloss",
}
,{
    name: "Plumping Lip Gloss (purple)",
    category: "Gloss",
    instock: true, 
    price: 14.99,
    img: "img/pinklipgloss",
}
,{
    name: "Plumping Lip Gloss (white)",
    category: "Gloss",
    instock: true, 
    price: 14.99,
    img: "img/pinklipgloss",
}
]

// create inject function
function inject(makeup) {
    //do something
      const container = document.querySelector(".container")
      container.insertAdjacentHTML("afterbegin", `<div class="card">
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
        </div>`);
          
    //query the container
    //using adjacent html push card into container
    // Select the container using querySelector
const productContainer = document.querySelector('.product-container');
// Loop through products and display them
Makeup.forEach(item => {
  const cardHTML = `
    <div class="container">
      <div class="card">
            <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="btn">Add To Cart</button>
      </div>
    </div>
  `;

  // Insert each card into the container
  productContainer.insertAdjacentHTML("beforeend", cardHTML);
});

}
const productContainer = document.querySelector('.container');
const filterButtons = document.querySelectorAll('.filter-buttons button');

// Function to display products
function displayProducts(items) {
  productContainer.innerHTML = ""; // Clear existing cards

  items.forEach(item => {
    const cardHTML = `
      <div class="card">
        <img src="${item.image}">
          <h3>${item.name}</h3>
          <p>$${item.price.toFixed(2)}</p>
          <button class="btn">Add To Cart</button>
        </div>
      </div>
    `;
    productContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
}

// Show all by default
displayProducts(makeup);

// Add click event for filters
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    if (category === "all") {
      displayProducts(makeup);
    } else {
      const filtered = makeup.filter(item => item.category === category);
      displayProducts(filtered);
    }
  });
});




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
