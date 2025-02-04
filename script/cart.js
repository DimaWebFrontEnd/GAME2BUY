const label = document.getElementById("label");

const ShoppingCart = document.getElementById("shopping-cart");
let basket = JSON.parse(localStorage.getItem("products-data")) || [];
let catalog = [...shopItemsData, ...accessoriesPs, ...ninSwitch, ...swiperProducts, ...ninSwitchAccesories, ...xboxConsoles, ...xboxSeriesAccesories, ...usedGames, ...preOrders, ...playstation5Games, ...ps4Games, ...switchGames, ...xboxGames];

const userName = document.getElementById('username');
const productsOrdered = document.getElementById('products');


/* const cond = document.getElementById("cond");
cond.style.display = "none"; */

let calculation = () => {
   let cartIcon = document.getElementById("cartAmount");
   cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
 };
 
 calculation();

let generateCartItems = () => {
   if (basket.length !== 0) {
      return (ShoppingCart.innerHTML = basket.map((x) => {
         let { id, item } = x;
         let search = catalog.find((y) => y.id === id) || [];
         let { name, price, desc, img, platform, condition, descriptLink } = search;
         //productsOrdered.innerHTML = `Назва: ${name} ${condition}, Ціна: ${price}грн, Платформа: ${platform}`;
         return `
         
         <div id=product-id-${id} class="cart-items">
            <div class="prod__items">
               <a class="row" href="${descriptLink}">
                  <img src="${img}" alt="">
               </a>
               <div class="name__products">
                  <p>Назва</p>
                  <!-- <h1 class="cart__items--h1">${name}</h1><br> -->
                  <p>${name} &nbsp; <span>${condition === undefined ? "" : condition}</span></p>
               </div>
            </div>
            
            <div class="platform">
               <p>Платформа</p>
               <p>${platform}</p>
            </div>
            <div class="buttons">
               <p>Кількість</p>
               <div class="buttons__plus-minus">
                  <i onclick="decrement(${id})" class="fa-solid fa-minus"></i>
                  <div id=${id} class="quantity-cart">${item}</div>
                  <i onclick="increment(${id})" class="fa-solid fa-plus"></i>
               </div>
            </div>   
            <div class="summary">
               <p>Вартість<p>
               <p>${item * search.price} грн</p>
            </div>
            <div class="remove__container">
               <i onclick="removeItem(${id})" class="fa-solid fa-circle-xmark"></i>
            </div>
         </div>
         
         `
      }).join(""));
   } else {
      ShoppingCart.innerHTML = ``
      label.innerHTML = `
      <div class="empty__cart">
         <h1>Ваш кошик порожній,<br>
         <span>додайте до нього товари, що сподобались<span></h1>
      </div>
      `
   }
      
}

generateCartItems();

let increment = (id) => {
   let selectedItem = id;
   let search = basket.find((x) => x.id === selectedItem.id);

   if (search === undefined) {
      basket.push({
         id: selectedItem.id,
         item: 1
      })
   } else {
      search.item += 1;
   }
   generateCartItems();
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
   generateCartItems();
   order()
   localStorage.setItem("products-data", JSON.stringify(basket));
} 

let update = (id) => {
   let search = basket.find((x) => x.id === id);

   document.getElementById(id).innerHTML = search.item;
   calculation();
   TotalAmount();
   order()
}

let removeItem = (id) => {
   let selectedItem = id;
   basket = basket.filter((x) => x.id !== selectedItem.id);
   generateCartItems();
   TotalAmount();
   calculation();
   order()
   localStorage.setItem("products-data", JSON.stringify(basket));
}

let clearCart = () => {
   basket = [];
   generateCartItems();
   calculation();
   order()
   localStorage.setItem("products-data", JSON.stringify(basket));
}

let TotalAmount = () => {
   if (basket.length !== 0) {
      let amount = basket.map((x) => {
         let { item, id } = x;
         let search = catalog.find((y) => y.id === id) || [];
         return item * search.price;
      }).reduce((x, y) => x + y, 0);
      //console.log(amount);
      let totalIt = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
      label.innerHTML = `
      <h1>Оформлення замовлення:</h1>
   <div class="cart__aside--wrap">
   <h1>Разом:</h1>
   <div class="quantity__sum">
         <p class="quantity__how-much">Кількість товару:</p>
         <p>${totalIt}</p>
      </div>
      <div class="transport">
         <p class="transport__how-much">Вартість доставки:</p>
         <p class="transport__sum">За тарифами перевізника</p>
      </div> 
      <div class="total">
         <p class="total__how-much">До сплати:</p>
         <p id="total-sum" class="total__sum">${amount} грн</p>
      </div>
      <button onclick="sendFormToEmail()" id="send-from-aside" class="product__card-btn">Оформити замовлення</button>
      <button onclick="clearCart()" class="removeAll product__card-btn" style="background-color: red;">Очистити кошик</button>
   </div>
      `
   } else return;
};

TotalAmount();


let order = () => {
   if (basket.length !== 0) {
      return (productsOrdered.innerHTML = basket.map((x) => {
         let { id, item } = x;
         let search = catalog.find((y) => y.id === id) || [];
         let { name, price, desc, img, platform, condition } = search;
         //productsOrdered.innerHTML = `Назва: ${name} ${condition}, Ціна: ${price}грн, Платформа: ${platform}`;
         return `
            Назва: ${name} ${condition}, Ціна: ${price}грн, Платформа: ${platform}, Кількість: ${item}, Вартість ${item * search.price}.
         `
      }).join(""));
   } else {
      productsOrdered.innerHTML = ``
      userName.innerHTML = ``
   }
      
}
order()

const sendFormToEmail = () => {
   //const send = document.getElementById('form-id');
   //send.submit()
   const sendSubmit = document.getElementById('send-submit');
   sendSubmit.click()
   //setTimeout(() => {clearCart();}, 1000);
   //clearCart();
   //document.getElementById('send-submit').click()
   //console.log("hello")
}