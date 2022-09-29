
const pizzas = [
    {
      id: 1,
      nombre: "pizza comun",
      imagen: "comun.jpg",
      precio: 500,
      ingredientes: ["queso", "salsa", "condimientos"],
    },
  
    {
      id: 2,
      nombre: "pizza especial",
      imagen: "especial.jpg",
      precio: 700,
      ingredientes: ["queso", "salsa", "condimientos", "aceitunas", "paleta"],
    },
  
    {
      id: 3,
      nombre: "pizza vegana",
      imagen: "https://hazlovegan.com/wp-content/uploads/2021/01/pizza-napoletana-vegana-3.jpg",
      precio: 800,
      ingredientes: ["queso vegano", "salsa", "condimientos", "aceitunas"],
    },
  
    {
      id: 4,
      nombre: "pizza cuatro quesos",
      imagen: "https://babycocina.com/wp-content/uploads/2020/02/pizza-cuatro-quesos.png",
      precio: 750,
      ingredientes: [
        "queso azul",
        "salsa",
        "condimientos",
        "queso crema",
        "queso de avestruz",
      ],
    },
  
    {
      id: 5,
      nombre: "pizza fugazzeta",
      imagen: "https://infoagro.com.ar/wp-content/uploads/2021/04/pizza-fogazza-1.jpg",
      precio: 600,
      ingredientes: ["queso", "salsa", "condimientos", "cebolla"],
    },
  
    {
      id: 6,
      nombre: "pizza italiana",
      imagen: "https://www.hola.com/imagenes/cocina/recetas/20190911149183/pizza-margarita/0-717-935/pizza-m.jpg",
      precio: 1000,
      ingredientes: [
        "queso premium",
        "salsa la toscana",
        "condimientos de la india",
      ],
    },
  ];

  let Pizzas = JSON.parse(localStorage.getItem("Pizzas")) || [];

function qs(element) {
    return document.querySelector(element);
}


const $input = qs("#input-pizza");
const $button = qs("#search-pizza");
const $smallError = qs("small");
const $form = qs("#form")

const $name = qs("#name-pizza");
const $price = qs("#price-pizza");
const $ingredients = qs("#ingre-pizza");
const $img = qs("#img-container");
const $pizzaContainer = qs("#card")
const $idPizza = qs("#id")


const selectImage = (id) => {
  switch (id) {
      case 1:
          return "comun.jpg"
  
      case 2:
          return "especial.jpg"
      
      case 3:
          return "vegana.jpg"

      case 4:
          return "queso.jpg"

      case 5:
          return "vegana.jpg"

      case 6:
          return "italiana.jpg"
  }
}

const showPizza = (pizza) => {
  $idPizza.textContent = `Eleccion N°: ${pizza.id}`
  $name.textContent = `Tipo de pizza: ${pizza.nombre}`
  $ingredients.textContent = `Ingredientes: ${pizza.ingredientes.join(" - ")}`
  $price.textContent = `Precio: $ ${pizza.precio}`
  $img.innerHTML = `<img src="img/${selectImage(pizza.id)}" alt="Imagen de la pizza">`
}

const showSuccess = () => {
  $smallError.classList.remove("error-container")
  $smallError.textContent = ""
}

const showError = (message) => {
  $smallError.textContent = message
  $smallError.classList = "error-container"
}

const submitPizza = (e) => {
  e.preventDefault()
  
  const id = $input.value.trim()

  if (id === "") {
      showError("No se ingresó ninguna ID")
  } else if (id < 1 || id > 6) {
      showError(`No se encontró una pizza con ID ${id}`)
  } else {
      showSuccess()
      const pizza = pizzas[id - 1]
      showPizza(pizza)
  }

  $input.value = ""
}

const init = () => {
  localStorage.setItem("Pizzas", JSON.stringify(pizzas));
  Pizzas = JSON.parse(localStorage.getItem("Pizzas")) || [];
  $form.addEventListener("submit", submitPizza)
}

init()







