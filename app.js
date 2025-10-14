const makeup = [
{
    name: "Eternal Sunshine",
    category: Gloss,
    instock: true, 
    price: 14.99,
    img: "img/pinklipgloss",
    alt: "5ml pink gloss for lips",
}
]

// create inject function
function inject(item) {
    //do something
    let name= testing
    const container = document.querySelector(".container");
    container.insertAdjacentHTML("afterbegin", '<h1> {testing} </h1>');
    //query the container
    //using adjacent html push card into container
}
inject(products[0]);
//loop through items

function addToCart() {
const butons = document.querySelectorAll("button");
console.log(buttons)
btnArray.forEach(btn) => btn.addEventListener("click", function (event) {
    console.log(event.target.textContent);
     console.log(event.target.closest(".details").getAttribute("data-title")
);
})
};
//find the item in the array
//take that object and push into cart
addToCart();