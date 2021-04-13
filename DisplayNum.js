const itemContainer = document.querySelector('main');
const numText = document.querySelector('header h2');
const numItems = prompt("How many items?");

numText.innerHTML = numItems + ' Visualised';

for(i = 0; i < numItems; i++) {
    const item = document.createElement('div');
    item.classList.add('item');
    itemContainer.appendChild(item);
}