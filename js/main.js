class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  class Carrito {
    constructor() {
      this.productos = [];
    }
  
    agregarProducto(producto) {
      this.productos.push(producto);
    }
  
    calcularTotal() {
      let total = 0;
      for (const producto of this.productos) {
        total += producto.precio;
      }
      return total;
    }
  
    mostrarProductos() {
      let listaProductos = "Productos en el carrito:\n";
      for (const producto of this.productos) {
        listaProductos += `${producto.nombre}: $${producto.precio}\n`;
      }
      alert(listaProductos);
    }
  }
  
  function agregarProductosAlCarrito() {
    while (true) {
      const nombreProducto = prompt("Ingrese el nombre del producto (o 'fin' para finalizar la compra):");
      if (nombreProducto.toLowerCase() === "fin") {
        break;
      }
      const precioProducto = parseFloat(prompt(`Ingrese el precio de ${nombreProducto}:`));
      const producto = new Producto(nombreProducto, precioProducto);
      carrito.agregarProducto(producto);
      console.log(`${nombreProducto} ha sido agregado al carrito.`);
    }
  }
  
  const carrito = new Carrito();
  
  agregarProductosAlCarrito();
  
  const totalCompra = carrito.calcularTotal();
  console.log("El total de la compra es: $" + totalCompra.toFixed(2));
  
  carrito.mostrarProductos();