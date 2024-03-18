const items = [
  { id: 1, name: 'Producto 1', price: 10 },
  { id: 2, name: 'Producto 2', price: 20 },
  { id: 3, name: 'Producto 3', price: 30 }
];

// Obtener elementos del carrito del almacenamiento local si existen
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

const cart = document.getElementById('cart');
const itemList = document.getElementById('item-list');
const totalPriceElement = document.getElementById('total-price');

function renderItems() {
  itemList.innerHTML = '';
  items.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'item';
    listItem.innerHTML = `
      <span>${item.name} - $${item.price}</span>
      <button onclick="addToCart(${item.id})">Agregar al carrito</button>
    `;
    itemList.appendChild(listItem);
  });
}

function addToCart(itemId) {
  const selectedItem = items.find(item => item.id === itemId);
  if (selectedItem) {
    cartItems.push(selectedItem);
    updateLocalStorage();
    renderCart();
  }
}

function updateLocalStorage() {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function renderCart() {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);
  totalPriceElement.textContent = totalPrice;
}

renderItems();
renderCart();
