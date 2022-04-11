const productsCont = document.querySelector('.products');
const products = ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog-Duck', 'Dragon', 'Pen', 'Pet-Sweep', 'Scissors', 'Shark', 'Sweep', 'Tauntaun', 'Unicorn', 'Usb', 'Water-Can', 'Wine-Glass', 'Air Jordan', 'Iphone 13', 'Air pods', 'Gaming Mouse', 'Wallet', 'Book', 'Camera', 'Headphones', 'Car', 'Drone', 'Watch', 'Shirt', 'Pants', 'Knife'];
const randomName = () => {
   let random = Math.floor(Math.random() * products.length);
   return products[random];
}
// give me random floated number between 1 and 100
const randomPrice = () => {
   return (Math.random() * 100).toFixed(2);
}

// const randomPrice = () => {
//    let random = Math.floor(Math.random() * 500);
//    return random;
// }
let productsCount = 20;
for (let i = 0; i <= productsCount; i++) {
   const randomImg = `https://source.unsplash.com/500x300/?products,${i}`;
   productsCont.innerHTML += `
   <div class="box">
         <div class="image">
            <img src="${randomImg}" alt="Product">
         </div>
         <div class="info">
            <div class="first-line">
               <div class="name">
                  <h3>${randomName()}</h3>
               </div>
               <div class="price">
                  <h3>$${randomPrice()}</h3>
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
const box = document.querySelectorAll('.box');
box.forEach(box => {
   const button = box.children[1].children[2]
   box.addEventListener('click', () => {
      console.log(box, button)
   })
})