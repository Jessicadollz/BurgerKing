const burgerCheckbox = document.getElementById('burgerCheckbox');
const friesCheckbox = document.getElementById('friesCheckbox');
const drinkCheckbox = document.getElementById('drinkCheckbox');
const placeOrderButton = document.getElementById('placeOrderButton');

const orderDisplay = document.createElement('div');
orderDisplay.classList.add('order-details');

placeOrderButton.addEventListener('click', function() {
  orderDisplay.textContent = '';

  let orderItems = [];
  if (burgerCheckbox.checked) {
    orderItems.push('Burger');
  }
  if (friesCheckbox.checked) {
    orderItems.push('French Fries');
  }
  if (drinkCheckbox.checked) {
    orderItems.push('Drink');
  }

  const orderId = Math.floor(Math.random() * 1000000);

  if (orderItems.length > 0) {
    orderDisplay.innerHTML = `<b>Order ID:</b> ${orderId}<br><b>Ordered Items:</b> ${orderItems.join(', ')}`;

    const placeOrderButtonParent = placeOrderButton.parentElement; 
    placeOrderButtonParent.insertBefore(orderDisplay, placeOrderButton.nextSibling); 
  } else {
    alert('Please select at least one item to place an order.');
  }
});