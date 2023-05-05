const listaIngredientes = document.getElementById("ingredients");
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listaItems = ingredients.map(ingrediente => {
  const li = document.createElement("li");
  li.textContent = ingrediente;
  li.classList.add("item");

  return li;
});

// Agrega todos los elementos <li> al elemento <ul>
//listaItems.forEach(item => listaIngredientes.appendChild(item));
listaIngredientes.append(...listaItems);
