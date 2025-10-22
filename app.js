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
    alt: "5ml pink gloss for lips",
}
,{
    name: "Plumping Lip Gloss ()",
    category: "Gloss",
    instock: true, 
    price: 14.99,
    img: "img/pinklipgloss",
    alt: "5ml pink gloss for lips",
}
]

// create inject function
function inject(item) {
    //do something
  
    const container = document.querySelector(".container");\
    //add card code below
    container.insertAdjacentHTML("afterbegin", `<h1>${item.name}</h1>`);
    //query the container
    //using adjacent html push card into container
}
//test then for each loop thorugh makeup
inject(makeup[0]);
//loop through items

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



const DOMSelectors = {
    button: document.getElementById("btn"),
    text: document.querySelector("#text"),
    point: document.querySelectorAll(".point"),
    pointTwo: document.getElementById("pointTwo"),
};
console.log(DOMSelectors.pointTwo)