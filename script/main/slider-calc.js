

   let shop = document.getElementById("shop");
   let basket = JSON.parse(localStorage.getItem("products-data")) || [];

   let generateShop = () => {
      return (shop.innerHTML = swiperProducts.map((x) => {
         let {id, name, price, platform, descriptLink, img, alt, oldprice } = x;
         let search = basket.find((x) => x.id === id) || []; 
         
         return `
            
            <div id=product-id-${id} class="product-card">
               <div class="product-image">
                  <span class="discount-tag">-15%</span>
                  <img src="${img}" class="product-games" alt="${alt}">
                  <button onclick="increment(${id})" class="card-btn">
                     <i class="fa-solid fa-cart-shopping"></i>
                     додати в кошик
                  </button>
               </div>
               <div class="product-info">
                  <h2 class="product-brand">${name}</h2>
                  <p class="product-short-description">${platform}</p>
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
