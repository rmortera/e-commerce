const btnMode = document.getElementById("mode-btn");
const body = document.body;
const cartBtnOpen = document.getElementById("cart-btn");
const cartBtnClose = document.getElementById("close-cart");
const cartContainer = document.getElementById("contenedor");
const menuContainer = document.getElementById("menu-container");
const menuBtnOpen = document.getElementById("menu-btn");
const menuBtnClose = document.getElementById("close-menu");

const homeBtnClose = document.getElementById("home-btn");
const productsBtnClose = document.getElementById("products-btn");

const darkModeChange = () => {
  /*
    if( body.classList.contains( "dark" ) ){
        body.classList.remove( "dark" )
    }else{
        body.classList.add("dark")
    }
    */

  //classList.toggle("clase")
  if (btnMode.classList.contains("bx-sun")) {
    btnMode.classList.replace("bx-sun", "bx-moon");
  } else {
    btnMode.classList.replace("bx-moon", "bx-sun");
  }

  body.classList.toggle("dark");
};

btnMode.addEventListener("click", () => darkModeChange());

cartBtnOpen.addEventListener("click", () =>
  cartContainer.classList.remove("hide")
);

cartBtnClose.addEventListener("click", () =>
  cartContainer.classList.add("hide")
);

menuBtnOpen.addEventListener("click", () =>
  menuContainer.classList.remove("hide")
);

menuBtnClose.addEventListener("click", () =>
  menuContainer.classList.add("hide")
);

homeBtnClose.addEventListener("click", () =>
  menuContainer.classList.add("hide")
);
productsBtnClose.addEventListener("click", () =>
  menuContainer.classList.add("hide")
);

const items = [
  {
    id: 1,
    name: "Hoodie",
    price: 14.0,
    image: "assets/images/featured1.png",
    category: "hoodies",
    quantity: 10,
  },
  {
    id: 2,
    name: "Shirt",
    price: 24.0,
    image: "assets/images/featured2.png",
    category: "shirts",
    quantity: 15,
  },
  {
    id: 3,
    name: "Sweatshirt",
    price: 24.0,
    image: "assets/images/featured3.png",
    category: "sweatshirts",
    quantity: 20,
  },
];

let cart = [];

/*
const cartProducts = [];


function addProduct(itemId) {
  let productSelected = cartProducts.find((product) => product.id === itemId);

  if (productSelected) {
    // si productSelected es !== undefined : buscas el indice de ese producto dentro del arreglo.
    //Condicion para saber si aun pueden seleccionar mas productos de ese tipo
    let index = cartProducts.indexOf(productSelected);
    // Si el producto ya existe dentro del arreglo, lo busca y se le suma 1 al quantity selected
    cartProducts[index].quantitySelected++;
  } else {
    //si no existe el producto, creas un item y buscas el identificador para agregarlo al arreglo por primera vez.
    const item = items.find((item) => item.id === itemId);
    // y agregas la propiedad quantity selected a ese nuevo item y lo metes al arreglo.
    item.quantitySelected = 1;
    cartProducts.push(item);
  }

  showProducts();
}

// Funcion encargada de mostrar los productos.
function showProducts() {
  const content = document.getElementById("cart-container");

  let fragment = "";
  cartProducts.forEach((product) => {
    fragment += `
      <section>
          <h2>${product.name}</h2>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet provident optio dolorem? Est accusantium quos consequuntur aliquam quia ad?
          </p>
      </section>
      `;
  });

  content.innerHTML = fragment;
}
*/

const container = document.querySelector("#container");
const showProducts = document.querySelector("#show-products");

items.forEach((product) => {
  const { id, name, price, image, category, quantity } = product;

  showProducts.innerHTML = `
  <ul class="main-show-products" id="show-products">
      <li class="one"
        >Show all <br />
        <span> show all products</span></li
      >
    
    <li class="two"
      >Shirts<br />
      <span>4 Products</span></li
    >
      <li class="three"
        >Hoodies<br />
        <span>3 Products</span></li
      >

    <li class="four"
      >Sweatshirts<br />
      <span>4 Products</span></li
    >
  </ul>
  `;

  container.innerHTML += `

<div class="cart-content">
<button onclick="addProduct(${id})" class="product-counter" id="product-counter">+</button>
<img class="card-img mt-2" src="${image}" alt="Card image cap">
<div class="card-body">
<p class="card-price"> <span>$${price}.00</span>    |  Stock: ${quantity}</p>
<h5 class="card-title"><span>${name}</span></h5>
</div>
</div>

`;
});

function addProduct(id) {
  const item = items.find((product) => product.id === id);
  cart.push(item);
  showCart();
}

const showCart = () => {
  const addCart = document.querySelector("#emptyCart");

  addCart.innerHTML = "";
  cart.forEach((product) => {
    const { id, name, price, image, category, quantity } = product;
    addCart.innerHTML += `
    
    <div  class="cart-products grid"> 
    <img class= "img-cart one" src=${image}>
    
    <div class = "product-info two">
    <p id="name">${name}<p>
    <p id="quantity">Stock: ${quantity} |<span> $${price}.00</span><p>
    
    </div>
    </div>
    
    `;
  });
};

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (scrollY >= 50) {
    nav.classList.add("scroll-bg");
  } else {
    nav.classList.remove("scroll-bg");
  }
});
