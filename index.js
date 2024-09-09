const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const numberInput = document.querySelector(`.numberInput`);
const button = document.querySelector('.searchButton');
const renderContainer = document.querySelector(`.renderContainer`);

button.addEventListener('click', function(){

  const inputValue = parseInt(numberInput.value);

  if (inputValue >= 1 && inputValue <= 5 && inputValue !== '') {
   console.log(`El valor ingresado es: ${inputValue}`);

   const pizzaRender = pizzas.find(pizza => pizza.id === inputValue);
  
   if(pizzaRender){
    const pizzaHTML = ` 

    <img src="${pizzaRender.imagen}" alt="${pizzaRender.nombre}">
    <h2>${pizzaRender.nombre}</h2>
    <p>Precio: $${pizzaRender.precio}</p>
    <p>Ingredientes: ${pizzaRender.ingredientes.join(', ')}</p>
  
    `;

    renderContainer.innerHTML = pizzaHTML;
    }
  } else if(inputValue < 1 && inputValue > 5){
  
    renderContainer.innerHTML = `<p>El campo no debe quedar vacio</p>`;
  } else{
    renderContainer.innerHTML = `<p>0</p>`;
  }

});

