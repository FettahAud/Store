const productsCont = document.querySelector('.products');
let productsCount = 20;
for (let i = 0; i <= productsCount; i++) {
   const randomImg = `https://source.unsplash.com/500x300/?product,${i}`;
   productsCont.innerHTML += `
   <div class="box">
         <div class="image">
            <img src="${randomImg}" alt="Product">
         </div>
         <div class="info">
            <div class="first-line">
               <div class="name">
                  <h3>Product Name</h3>
               </div>
               <div class="price">
                  <h3>$100</h3>
               </div>
            </div>
            <div class="description">
               <p>Lorem ipsum dolor sit amet elit. adipisicing consectetur  Quisquam, quia!</p>
            </div>
               <button>Add to Cart</button>
         </div>
      </div>
   `
}