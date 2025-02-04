let shop = document.getElementById("shop");
let basket = JSON.parse(localStorage.getItem("products-data")) || [];
let catalog = [...shopItemsData, ...accessoriesPs, ...ninSwitch, ...ninSwitchAccesories, ...xboxConsoles, ...xboxSeriesAccesories, ...preOrders, ...playstation5Games, ...ps4Games, ...switchGames, ...xboxGames, ...usedGames,];



const product = [...shopItemsData, ...accessoriesPs, ...ninSwitch, ...ninSwitchAccesories, ...xboxConsoles, ...xboxSeriesAccesories, ...preOrders, ...playstation5Games, ...ps4Games, ...switchGames, ...xboxGames, ...usedGames];


const categories = [...new Set(product.map((prod) => { return prod }))]

document.getElementById("searchbar").addEventListener('keyup', (e) => {
   
    const searchData = e.target.value.toLowerCase();
    const filteredData = categories.filter((prod) => {
        return (
            prod.name.toLowerCase().includes(searchData)
        )
    })
    generateShop(filteredData);
});

let generateShop = (prod) => {
   return (shop.innerHTML = prod.map((x) => {
      let {id, name, price, descriptLink, img, alt, productDescr, oldprice, condition, platform } = x;
      let search = basket.find((x) => x.id === id) || []; 
      let cond = document.querySelector(".discount-tag");
      return `
      <div id=product-id-${id} class="product__container">

            <div class="product__container--wrap">
            <span class="discount-tag">
               ${condition === undefined 
                  ? '<span>Новий</span>'
                  :  condition === 'Новий' 
                  ?  '<span>Новий</span>'
                  :  condition === 'Передзамовлення'
                  ?  '<div class="pre-order">Передзамовлення</div>'
                  : condition}
               </span>
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
                  <h2>${name} <span class="product__info--condition" id="${id}">${condition === undefined ? "" : condition}</span></h2>
               </a>
                <p class="product-short-description">${platform}</p>
                <span class="price">${price} грн</span><span class="actual-price">${oldprice}</span>
            </div> 
           
        </div>
      `;
   }).join(""));

}

//shop.lastChild.style.width = shop.firstChild.style.width
/* let generateShop = (prod) => {
   
   return (shop.innerHTML = prod.map((x) => {
      //let {id, name, price, descriptLink, img, alt } = x;
      let {id, name, price, descriptLink, img, alt, productDescr, oldprice, condition } = x;
      let search = basket.find((x) => x.id === id) || []; 

      return `
      <div id=product-id-${id} class="product__container">
         
            <div class="product__container--wrap">
            <span id=${id} class="discount-tag">
               ${condition === undefined ? "Новий" : condition}
            </span>
            <a href="${descriptLink}">
                <img src="${img}" alt="${alt}">
            </a>
                <button onclick="increment(${id})" class="product__container--cart-btn">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>додати в кошик</p>
                </button>
                <button onclick="increment(${id})" class="product__container--mobile-btn">
                    <i class="fa-solid fa-cart-shopping"></i>
                    <p>КУПИТИ</p>
                </button>
            </div> 
         
            <div class="product__info">
               <a href="${descriptLink}">
                  <h2>${name} <span id="${id}">${condition === undefined ? "" : condition}</span></h2>
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
} */

generateShop(categories);


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




let update = (id) => {
   let search = basket.find((x) => x.id === id);
   document.getElementById(id).innerHTML = search.item;
   calculation();
}

let calculation = () => {
   let cartIcon = document.getElementById("cartAmount");
   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
 };
 
 calculation();

 const glass = document.getElementById("glass");
 