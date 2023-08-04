//hiển thị giỏ hàng trong html

let carttItems = 0;

function toggleCartt() {
  const cartt = document.getElementById('cartt');
  cartt.style.display = cartt.style.display === 'block' ? 'none' : 'block'; //xđ phần tử hiển thị trên trang 
}

function addToCart(itemName, itemPrice) {
  const carttItemsList = document.getElementById('cartt-items');
  const carttItem = document.createElement('li');
  carttItem.classList.add('cartt-item'); // thêm lớp cartt-item và phần tử li
  carttItem.innerHTML = `<span>${itemName}</span> - $${itemPrice}`; 
  carttItemsList.appendChild(carttItem);// chèn li đã tạo vào  ptu ds cartItem 
  carttItems++;
  updateCarttIcon();
}

function updateCarttIcon() {
  const carttIcon = document.querySelector('.fa-cart-shopping');
  carttIcon.textContent = `Giỏ hàng (${carttItems})`;
}









