let shop = document.getElementById("shop");
   let basket = JSON.parse(localStorage.getItem("products-data")) || [];

   let generateShop = () => {
      return (shop.innerHTML = accessoriesPs.map((x) => {
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
             <span class="price">${price} грн</span><span class="actual-price">${oldprice}</span>
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