const productos = [
    { id: 1, nombre: "arroz integral", precio: 360 },
    { id: 2, nombre: "papa", precio: 195 },
    { id: 3, nombre: "tomate", precio: 525 },
    { id: 4, nombre: "morrón", precio: 1800 },
    { id: 5, nombre: "pan", precio: 570 },
    { id: 6, nombre: "aceitunas", precio: 480 },
    { id: 7, nombre: "fideo", precio: 525 },
    { id: 8, nombre: "arroz", precio: 1050 },
    { id: 9, nombre: "avena", precio: 600 },
    { id: 10, nombre: "cebolla", precio: 135 },
    { id: 11, nombre: "zanahoria", precio: 270 },
    { id: 12, nombre: "brócoli", precio: 675 },
    { id: 13, nombre: "lechuga", precio: 180 },
    { id: 14, nombre: "espaguetis", precio: 525 },
  ];

  const personas = [
    "Juan",
    "Emma",
    "Carlos",
    "Olivia",
    "Pedro",
    "Sophia",
    "Luis",
    "Diego",
    "Isabella",
    "Miguel",
    "Liam",
    "María",
    "Lucas",
    "Ana",
    "Elena",
    "Laura",
    "Isabel",
    "Sofía",
    "Oliver",
    "Amelia",
    "Pedrito",
  ];

//   console.dir(document)

const titulo = document.getElementById('titulo');

// console.log(titulo.innerText);


const paises = document.getElementsByTagName('li');
// console.log(paises)

for (const elemento of paises) {
    // console.log(elemento.innerHTML);
}


const parrafo = document.createElement('p');

parrafo.innerText = 'soy un parrafo creado desde js';

// document.body.append(parrafo);

const contenedor = document.getElementById('contenedor');
contenedor.append(parrafo);

const listaNombres =  document.getElementById('nombres');
for (const nombre of personas) {
    const li = document.createElement('li');
    li.innerText = nombre;
    listaNombres.append(li)
}

// titulo.remove();