let carttItems = 0;

function toggleCartt() {
  const cartt = document.getElementById('cartt');
  cartt.style.display = cartt.style.display === 'block' ? 'none' : 'block';
}

function addToCart(itemName, itemPrice) {
  const carttItemsList = document.getElementById('cartt-items');
  const carttItem = document.createElement('li');
  carttItem.classList.add('cartt-item');
  carttItem.innerHTML = `<span>${itemName}</span> - $${itemPrice}`;
  carttItemsList.appendChild(carttItem);
  carttItems++;
  updateCarttIcon();
}

function updateCarttIcon() {
  const carttIcon = document.querySelector('.cartt-icon');
  carttIcon.textContent = `Giỏ hàng (${carttItems})`;
}



