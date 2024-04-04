document.addEventListener("DOMContentLoaded", function() {
  const app = document.getElementById('app');
  const carritoContainer = document.getElementById('productos-carrito');
  const totalAmountElement = document.getElementById('total-amount');

  const productos = [
      { id: 1, nombre: "Camiseta", precio: 20 },
      { id: 2, nombre: "Pantalón", precio: 30 },
      { id: 3, nombre: "Zapatos", precio: 50 },
      { id: 4, nombre: "Sombrero", precio: 15 },
      { id: 5, nombre: "Bufanda", precio: 10 },
      { id: 6, nombre: "Gorro", precio: 12 },
      { id: 7, nombre: "Guantes", precio: 8 },
      { id: 8, nombre: "Calcetines", precio: 5 },
  ];

  function mostrarProductos() {
      const productosHTML = productos.map(producto => `
          <div class="producto">
              <img src="ruta_de_la_imagen_${producto.id}.jpg" alt="${producto.nombre}">
              <h2>${producto.nombre}</h2>
              <p>Precio: $${producto.precio}</p>
              <button onclick="agregarProductoAlCarrito(${producto.id})">Agregar al carrito</button>
          </div>
      `).join('');

      app.innerHTML = productosHTML;
  }

  function agregarProductoAlCarrito(id) {
      const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
      const producto = productos.find(p => p.id === id);
      if (producto) {
          carrito.push(producto);
          localStorage.setItem('carrito', JSON.stringify(carrito));
          console.log('Producto agregado al carrito:', producto);
          mostrarCarrito(carrito);
      } else {
          console.error('Producto no encontrado');
      }
  }

  function mostrarCarrito(carrito) {
      const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
      totalAmountElement.textContent = total;
      
      const productosHTML = carrito.map(producto => `
          <div class="producto-carrito">
              <p>${producto.nombre} - $${producto.precio}</p>
          </div>
      `).join('');

      carritoContainer.innerHTML = productosHTML;
  }

  mostrarProductos();
});
 