function addItem() {
   let element = document.getElementById('newItemText').value;
   let ul = document.querySelector('ul');
   let li = document.createElement('li');
   li.textContent = element;
   ul.appendChild(li)
   element = '';
   document.getElementById('newItemText').value = '';
}