const btnMode = document.getElementById("mode-btn");
const body = document.body;
const cartBtnOpen = document.getElementById("cart-btn");
const cartBtnClose = document.getElementById("close-cart");
const cartContainer = document.getElementById("cart-container");

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

const items = [
  {
    id: 1,
    name: "Hoodies",
    price: 14.0,
    image: "assets/images/featured1.png",
    category: "hoodies",
    quantity: 10,
  },
  {
    id: 2,
    name: "Shirts",
    price: 24.0,
    image: "assets/images/featured2.png",
    category: "shirts",
    quantity: 15,
  },
  {
    id: 3,
    name: "Sweatshirts",
    price: 24.0,
    image: "assets/images/featured3.png",
    category: "sweatshirts",
    quantity: 20,
  },
];

const cartProducts = [
  {
    id: 3,
    name: "Sweatshirts",
    price: 24.0,
    image: "assets/images/featured3.png",
    category: "shirts",
    quantity: 20,
    quantitySelected: 1,
  },
];

function addProduct(itemId) {
  let productSelected = cartProducts.find((product) => product.id === itemId);

  if (productSelected) {
    //Condicion para saber si aun pueden seleccionar mas productos de ese tipo
    let index = cartProducts.indexOf(productSelected);

    cartProducts[index].quantitySelected++;
  } else {
    const item = items.find((item) => item.id === itemId);

    item.quantitySelected = 1;
    cartProducts.push(item);
  }

  showProducts();
}

function showProducts() {
  const content = document.getElementById("cart-content");

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
