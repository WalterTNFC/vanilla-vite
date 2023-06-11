function onAdd() {
  const text = document.querySelector("#new-text");
  console.log('text:', text);
  const container = document.querySelector('#todos');

  const newItem = createItem(text.value);

  container.appendChild(newItem);
}

function removeItem(id) {
  const container = document.querySelector("#todos");

  const itemToRemove = document.querySelector(`.items-${id}`);

  if (itemToRemove) {
    container.removeChild(itemToRemove);
  }
} 


const createItem = function(todoName) {
  const divContainer = document.createElement('div');
  const checkbox = document.createElement('input');
  const label = document.createElement('label');
  const deleteButton = document.createElement('button');

  const id = new Date().getTime();

  label.innerText = todoName;
  checkbox.type = 'checkbox';
  deleteButton.innerText = 'Delete';

  divContainer.className = `items-${id}`;

  deleteButton.addEventListener('click', () => removeItem(id))
  divContainer.appendChild(checkbox);
  divContainer.appendChild(label);
  divContainer.appendChild(deleteButton);

  return divContainer;
}