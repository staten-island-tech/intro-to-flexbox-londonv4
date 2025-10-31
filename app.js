const makeup = [
  {
    name: "Plumping Lip Gloss (pink)",
    category: "Lips",
    instock: true,
    price: 9.99,
    img: "https://rembeauty.com/cdn/shop/files/01_plumping-lip-gloss-on-your-collar-shimmer-rem-fembot.png?v=1750190225&width=480"
  },
  {
    name: "Plumping Lip Gloss (purple)",
    category: "Lips",
    instock: true,
    price: 99.99,
    img: "https://media.ulta.com/i/ulta/2643725?w=200&h=200&fmt=auto",
  },
  {
    name: "Plumping Lip Gloss (white)",
    category: "Lips",
    instock: true,
    price: 99.99,
    img: "https://media.ulta.com/i/ulta/2643795?w=500&h=500",
  },
  {
    name: "Satin Matte Blush (Strawberry Nebula)",
    category: "Blush",
    instock: true,
    price: 149.99,
    img: "https://rembeauty.com/cdn/shop/files/01_45.png?v=1740783834&width=480"
  },
  {
    name: "Satin Matte Blush (Bronze)",
    category: "Blush",
    instock: true,
    price: 149.99,
    img: "https://media.ulta.com/i/ulta/2613125?w=200&h=200&fmt=auto"
  },
  {
    name: "Satin Matte Blush (Peach Planet)",
    category: "Blush",
    instock: true,
    price: 149.99,
    img: "https://i8.amplience.net/i/liberty/000830288-R620614006-1?$small$&qlt=90&fmt=auto&strip=true"
  },
  {
    name: "Satin Matte Blush (Skinny Dipped)",
    category: "Blush",
    instock: true,
    price: 149.99,
    img: "https://media.ulta.com/i/ulta/2613120?w=500&h=500"
  },
  {
    name: "Sweetener Concealer (Light)",
    category: "Concealer",
    instock: true,
    price: 199.99,
    img: "https://phorcys-static.ewg.org/cdn-cgi/image/width=240,height=240,quality=60/https://phorcys-static.ewg.org/image/contents/760154/original."
  },
  {
    name: "Sweetener Concealer (Medium)",
    category: "Concealer",
    instock: true,
    price: 199.99,
    img: "https://rembeauty.com/cdn/shop/files/REM_Concealer_PDP_Closed_Deep4C.png?crop=center&height=1024&v=1691443958&width=1024"
  },
  {
    name: "Sweetener Concealer (Dark)",
    category: "Concealer",
    instock: true,
    price: 199.99,
    img: "https://rembeauty.com/cdn/shop/files/REM_Concealer_PDP_Closed_Rich10.png?v=1691443348&width=480"
  },
  {
    name: "REM Brushes",
    category: "Eyes",
    instock: true,
    price: 99.99,
    img: "https://media.ulta.com/i/ulta/2635991?w=800&$ProductCardNeutralBGLight$&h=800&fmt=auto"
  },
  {
    name: "Flourishing Lengthening Mascara (Midnight Black)",
    category: "Eyes",
    instock: true,
    price: 149.99,
    img: "https://rembeauty.com/cdn/shop/files/01_5e95d263-609e-48b4-8188-844036298f69.png?crop=center&height=1024&v=1735695213&width=1024"
  },
  {
    name: "Eyeliner Marker (Borderline Midnight Black)",
    category: "Eyes",
    instock: true,
    price: 149.99,
    img: "https://media.ulta.com/i/ulta/2595495?w=400&h=400&fmt=auto"
  },
  {
    name: "REM Beauty Dream Lashes",
    category: "Eyes",
    instock: true,
    price: 79.99,
    img: "https://rembeauty.com/cdn/shop/files/REM_Ch2_DreamLashes_PDP_Closed_Provocateur_right_fa36140a-957a-4359-a710-aeddd89dd8f8.png?crop=center&height=1024&v=1691456404&width=1024"
  },
  {
    name: "Midnight Shadows Eyeshadow Palette",
    category: "Eyes",
    instock: true,
    price: 249.99,
    img: "https://media.ulta.com/i/ulta/2595443?w=500&h=500",
  },
  {
    name: "GoGo Boots Eyeshadow Palette",
    category: "Eyes",
    instock: true,
    price: 249.99,
    img: "https://rembeauty.com/cdn/shop/files/REM_Ch2_Palette_PDP_Open_GogoBoots_14158862-2079-477a-a656-8752ab598d91.png?v=1710374787&width=480"
  },
  {
    name: "Starlet Lustrous Eyeshadow Palette",
    category: "Eyes",
    instock: true,
    price: 249.99,
    img: "https://rembeauty.com/cdn/shop/files/Rapid_Palette_PDP_Open_midnightsnack_cb6c3595-9012-4d12-b3dc-d588ac54365b.png?crop=center&height=480&v=1710374787&width=480"
  },
  {
    name: "Perfume",
    category: "Fragrances",
    instock: true,
    price: 199.99,
    img: "https://www.fragranceoutlet.com/cdn/shop/files/Ariana_Grande_REM_1024x1024.jpg?v=1728937101"
  },
  {
    name: "Cherry Eclipse Perfume",
    category: "Fragrances",
    instock: true,
    price: 199.99,
    img: "https://www.beautybase.com/images/ariana-grande-r-e-m-cherry-eclipse-eau-de-parfum-30ml-spray-p84138-39196_thumb.jpg"
  },
  {
    name: "Cloud Perfume",
    category: "Fragrances",
    instock: true,
    price: 199.99,
    img: "https://makeuphavencosmetic.com/cdn/shop/files/IMG-4024_800x.jpg?v=1704273801"
  },
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