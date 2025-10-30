const makeup = [
  {
    name: "Plumping Lip Gloss (pink)",
    category: "Lipss",
    instock: true,
    price: 9.99,
    img: "https://rembeauty.com/cdn/shop/files/01_plumping-lip-gloss-on-your-collar-shimmer-rem-fembot.png?v=1750190225&width=480"
  },
  {
    name: "Plumping Lip Gloss (purple)",
    category: "Lips",
    instock: true,
    price: 9.99,
    img: "https://media.ulta.com/i/ulta/2643725?w=200&h=200&fmt=auto",
  },
  {
    name: "Plumping Lip Gloss (white)",
    category: "Lips",
    instock: true,
    price: 9.99,
    img: "https://rembeauty.com/cdn/shop/files/01_plumping-lip-gloss-on-your-collar-shimmer-rem-fembot.png?v=1750190225&width=480"
  },
  {
    name: "Satin Matte Blush",
    category: "Blush",
    instock: true,
    price: 14.99,
    img: "",
  },
  {
    name: "Satin Matte Blush",
    category: "Blush",
    instock: true,
    price: 14.99,
    img: "",
  }
];

const productContainer = document.querySelector('.container');
const filterButtons = document.querySelectorAll('.filter-container button');

// Function to display products
function displayProducts(items) {
  productContainer.innerHTML = "";
  items.forEach(item => {
    const cardHTML = `
      <div class="card">
        <div class="img">
          <img src="${item.img}" alt="${item.name}">
        </div>
        <div class="h2"><h2>${item.name}</h2></div>
        <div class="h3"><h3>$${item.price.toFixed(2)}</h3></div>
        <div class="btn"><button>Add To Cart</button></div>
      </div>
    `;
    productContainer.insertAdjacentHTML("beforeend", cardHTML);
  });
}


// Show all products by default
displayProducts(makeup);

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    if (category === "All") {
      displayProducts(makeup);
    } else {
      const filtered = makeup.filter(item => item.category === category);
      displayProducts(filtered);
    }
  });
});