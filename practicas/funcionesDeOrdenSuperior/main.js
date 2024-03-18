// const servicios = [
//     { id: 1, nombre: "limpieza de cutis", precio: 1200, img: "limpieza.jpg" },

//     { id: 2, nombre: "masajes", precio: 1800, img: "masajes.jpg" },
  
//     { id: 3, nombre: "electrodos", precio: 2800, img: "electrodos.jpg" },
  
//     { id: 4, nombre: "manicura", precio: 1500, img: "manicuria.webp" },
  
//     { id: 5, nombre: "uñas", precio: 1300, img: "esculpidas.webp" },
  
//     { id: 6, nombre: "mascarillas", precio: 1900, img: "mascarilla.jpeg" },
  
//     { id: 7, nombre: "microblanding", precio: 5800, img: "microblanding.png" },
  
//     { id: 8, nombre: "mascarillas", precio: 2300, img: "mascarilla.jpeg" },
// ];

// const nums = [1,3,2,5,1,3, 10];
// for (const element of nums) {
//      console.log(element);
// }
// for (let i= 0; i < nums.length; i++) {
//     console.log(nums[i]);
    
// }
// console.log(servicios[0]);
// console.log(nums[0]);

// let total = 0;
// for (let i= 0; i <= 10; i++) {
//     total = total + i;
//     // console.log('valor de total = '+ total);

// }
// console.log(total)

// function mayorQue(n){
//     return  (m) => m > n;
// }

// const mayorQueDiez = mayorQue(10);
// // console.log(mayorQueDiez(12));

// function asignarOperacion(operacion) {
//     switch (operacion) {
//         case '+':
//             return (n1,n2)=> n1 + n2;
//         case '-':
//             return (n1,n2)=> n1 - n2;    
            
    
//         default:
//             return ()=> 'operacion no valida';
//     }
// }

// const sumar =  asignarOperacion('+');
// const restar =  asignarOperacion('-');
// // console.log(sumar(5, 6));

// function porCadaUno (arr, fn){
//     for (const element of arr) {
//         fn(element);
//     }
// }

// porCadaUno(nums, console.log)
// porCadaUno(nums, alert)

// const cuadruple = [];
// function porCuatro(n){
//     return cuadruple.push(n * 4);
// }
// console.log(nums);
// console.log(cuadruple);

// porCadaUno(nums, porCuatro)
// console.log(cuadruple);

// porCadaUno(nums , (el)=> {
//     cuadruple.push(el * 4);
// });
// console.log(cuadruple);


// nums.forEach((el)=> {
    // console.log(el);
// })


// const encontrado = servicios.find((servicio) => {
//     return servicio.nombre == 'masajes';
// });

// console.log(encontrado);


// const filtrado = servicios.filter((el) => {
//     return el.precio < 2000;
// });
// const filtradoPorNombre = servicios.filter((el) => {
//     return el.nombre.includes('m') ;
// });
// console.log(filtradoPorNombre);


// const precioActualizado = servicios.map(el => {
//     return {
//         id: el.id,
//         nombre: el.nombre,
//         precio: el.precio *1.50, 
//         img: el.img  
//     }
// });
// console.log(servicios);
// console.log(precioActualizado);

// const acumulado = nums.reduce((acc, el)=> {
//     return  acc = acc + el;
// },0);
// console.log(acumulado);

const tickets3D = [

  { id: 1, pelicula: "ant-man quantunmania", precio: 2400 },

  { id: 2, pelicula: "super mario bros, la película", precio: 2300 },

  { id: 3, pelicula: "john wick 4", precio: 2600 },

  { id: 4, pelicula: "the wale", precio: 2200 },

  { id: 5, pelicula: "shazam, la furia de los dioses", precio: 2575 },

  { id: 6, pelicula: "creed 3", precio: 2389 },

  { id: 7, pelicula: "the marvels", precio: 1500 },

];


// tickets3D.find((el) => {
//     return el.pelicula.includes('john')
// });

// function buscarPelicula(arr,titulo){
//     return arr.find((el) => el.pelicula.includes(titulo))
// }

// let encontrado = buscarPelicula(tickets3D, 'john');

// // console.log(encontrado);
// const ticketsReservados =[];

// function reservar(arr, pelicula){
//     arr.push(pelicula)
//     return arr;
// }
// console.log(encontrado);

// reservar(ticketsReservados,encontrado);
// reservar(ticketsReservados,encontrado);

// function comprarTickets(tickets, recargo){
//     return tickets.reduce((acc, el) => {
//         return acc = acc + el.precio
//     }, recargo);
// }


// console.log(comprarTickets(ticketsReservados,2000))
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.max(2,4,45,5,4,4));
// console.log(Math.sqrt(25));
// console.log(Math.cbrt(125));
// console.log(Math.min(2,4,5,6,4,8))

// console.log(Math.ceil(3.04444));
// console.log(Math.round(3.04444));
// console.log(Math.floor(3.6));

// console.log(Math.random());


const hexa = [

    "0",
  
    "1",
  
    "2",
  
    "3",
  
    "4",
  
    "5",
  
    "6",
  
    "7",
  
    "8",
  
    "9",
  
    "A",
  
    "B",
  
    "C",
  
    "D",
  
    "E",
  
    "F",
  
  ];

  let color = '';

  for (let i = 0; i < 6; i++){
        let aleatorio = Math.round(Math.random()*hexa.length)
        // console.log(aleatorio);
        color = color + hexa[aleatorio];    
  }

//   console.log(color);


// const fecha = new Date()
// console.log(fecha.getFullYear());
// console.log(fecha.getMonth()+1);
// console.log(fecha.getDate());
// console.log(fecha.getDay());
// console.log(fecha.toString());
// console.log(fecha.toDateString());
// console.log(fecha.getTime());

function calcularEstadia(ingreso, egreso) {
    let fechaIngreso = new Date(ingreso).getTime()
    let fechaEgreso = new Date(egreso).getTime()

    console.log(fechaIngreso);
    console.log(fechaEgreso);
    const miliSegundoPorDia = 86400000;
    let resultado = (fechaEgreso - fechaIngreso) / miliSegundoPorDia;
    console.log(resultado);
}

calcularEstadia('2024, 1, 23', '2024,2, 23' )