document.addEventListener('DOMContentLoaded', function () {
  const cart = document.getElementById('cart');
  const cartCount = document.getElementById('cart-count');
  const overlay = document.getElementById('overlay');
  const closeCartButton = document.getElementById('close-cart');
  const cartList = document.getElementById('cart-list');

  let cartItems = [];
  let total = 0;

  if (localStorage.getItem('cartItems')) {
      cartItems = JSON.parse(localStorage.getItem('cartItems'));
      updateCart();
  }

  function updateCart() {
      total = 0;
      cartCount.textContent = cartItems.length;
      cartList.innerHTML = '';
      cartItems.forEach((item, index) => {
          total += item.price;
          const li = document.createElement('li');
          li.textContent = `${item.name}: $${item.price}`;
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Eliminar';
          removeButton.className = 'product-remove';
          removeButton.addEventListener('click', () => {
              removeItem(index);
          });
          li.appendChild(removeButton);
          cartList.appendChild(li);
      });
  }

  function addToCart(name, price) {
      cartItems.push({ name, price });
      updateCart();
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  function removeItem(index) {
      cartItems.splice(index, 1);
      updateCart();
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }

  function handleAddToCart(event) {
      const productCard = event.target.closest('.product-card');
      const name = productCard.dataset.name;
      const price = parseInt(productCard.dataset.price);

      Swal.fire({
          title: "Agregar al carrito",
          text: `¿Estás seguro de agregar ${name} al carrito?`,
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sí, agregar al carrito"
      }).then((result) => {
          if (result.isConfirmed) {
              addToCart(name, price);
              Swal.fire({
                  title: "Agregado",
                  text: `${name} ha sido agregado al carrito.`,
                  icon: "success"
              });
          }
      });
  }

  function handleCartClick() {
      overlay.style.display = 'flex';
  }

  function handleCloseCart() {
      overlay.style.display = 'none';
  }

  cart.addEventListener('click', handleCartClick);
  closeCartButton.addEventListener('click', handleCloseCart);

  const productCards = document.querySelectorAll('.add-to-cart');
  productCards.forEach(card => {
      card.addEventListener('click', handleAddToCart);
  });

  function getProducts() {
      return fetch('https://api.example.com/products')
          .then(response => {
              if (!response.ok) {
                  throw new Error('No se pudo obtener la lista de productos');
              }
              return response.json();
          })
          .then(data => data)
          .catch(error => console.error('Error:', error));
  }

  getProducts().then(products => {
      console.log(products);
  });
});
