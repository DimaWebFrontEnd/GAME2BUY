let shop = document.getElementById("ps5slim");
//let shop = document.querySelector(".descript__buy--wrap");
let basket = JSON.parse(localStorage.getItem("products-data")) || [];

//let ps5SlimProduct = shopItemsData[0];

/* let ps5Slim = [{
   id: "ps5Slim",
   discount: "10%",
   alt: "Купити Playstation 5 Slim Blu-Ray",
   descriptLink: 'playstation-products-consoles-html/playsatation5-slim.html',
   img: "images/playstation_consoles/PS5-slim.webp",
   name: "PlayStation 5 Slim Blu-ray",
   platform: "Playstation 5",
   inOutStock: "В наявності",
   price: 21990,
   oldprice: 25990 + " грн"

},
{
   id: "ps5SlimDigital",
   discount: "10%",
   alt: "Купити Playstation 5 Slim Digital Edition",
   descriptLink:  'products-description-playstation/description-ps5.html',
   img: "images/playstation_consoles/PS5-Digital-Slim.webp",
   name: "PlayStation 5 Slim Digital Edition",
   platform: "Playstation 5",
   inOutStock: "В наявності",
   price: 20990,
   oldprice: 24990 + " грн"
}
] */
//let ps5Slim = [ps5SlimProduct];
/* console.log(ps5Slim) */

let playstation5Page = [{
   id: "ps5Slim",
   name: "PlayStation 5 Slim Blu-ray 1TB",
   discount: "10%",
   img: "images/playstation_consoles/PS5-slim.webp",
   platform: "Playstation 5",
   inOutStock: "В наявності",
   alt: "Купити Playstation 5 Slim Blu-Ray 1TB",
   descriptLink: '#',
   price: 20690,
   oldprice: 20990 + " грн"
}]


let generateShop = () => {
   return (shop.innerHTML = playstation5Page.map((x) => {
      let {id, name, price, platform, descriptLink, img, alt, oldprice } = x;
      let search = basket.find((x) => x.id === id) || []; 
      
      return `
         
      <div id=product-id-${id} class="product__container">
      
      <div class="product__container--wrap">
      <span class="discount-tag"><span>Новий</span></span>
      <a href="${descriptLink}">
          <img src="${img}" alt="${alt}">
      </a>
          <button onclick="increment(${id})" class="product__container--cart-btn">
            <p>Додати в кошик</p>
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
          <button onclick="increment(${id})" class="product__container--mobile-btn">
            <p>Додати в кошик</p>
            <i class="fa-solid fa-cart-shopping"></i>
          </button>
      </div> 
   
      <div class="product__info">
         <a href="${descriptLink}">
            <h2>${name}</h2>
         </a>  
          <p class="product-short-description">Playstation 5</p>
          <span class="price">${price}</span><span class="actual-price">${oldprice} грн</span>
      </div> 
      <div id=${id} class="quantity">
         ${search.item === undefined ? 0 : search.item}
      </div>
  </div>

      `;
   }).join(""));

}

generateShop();


 let increment = (id) => {
   let selectedItem = id;
   let search = basket.find((x) => x.id === selectedItem.id);

   if (search === undefined) {
      basket.push({
         id: selectedItem.id,
         item: 1,
      });
   } else {
      search.item += 1;
   }
   
   update(selectedItem.id);
   localStorage.setItem("products-data", JSON.stringify(basket));
};

let decrement = (id) => {
   let selectedItem = id;
   let search = basket.find((x) => x.id === selectedItem.id);

   if (search === undefined) return;
   else if (search.item === 0) return;
   else {
      search.item -= 1;
   }
   update(selectedItem.id)
   basket = basket.filter((x) => x.item !== 0);
   //generateShop();
   localStorage.setItem("products-data", JSON.stringify(basket));
}

let update = (id) => {
   let search = basket.find((x) => x.id === id);
   document.getElementById(id).innerHTML = search.item;
   
   calculation();
   //totalAmount();
}

let calculation = () => {
   let cartIcon = document.getElementById("cartAmount");
   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
 };
 
 calculation();