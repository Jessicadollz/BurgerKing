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
    const orderDisplayDiv = document.createElement('div');
    orderDisplayDiv.style.cssText = `
      border: 1px solid black; 
      padding-top: 100px; 
      padding-bottom: 100px;
      text-align: center;
      background-color: black;
      color: white;
    `;
  
    const orderDetails = `<b>Order ID:</b> ${orderId}<br><b>Ordered Items:</b> ${orderItems.join(', ')}`;
    orderDisplayDiv.innerHTML = orderDetails;
  
    const placeOrderButtonParent = placeOrderButton.parentElement;
    placeOrderButtonParent.insertBefore(orderDisplayDiv, placeOrderButton.nextSibling);
  } else {
    alert('Please select at least one item to place an order.');
}
});
