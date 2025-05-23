const clientInput = document.getElementById('client-name');
const itemInput = document.getElementById('item-name');
const qtyInput = document.getElementById('quantity');
const priceInput = document.getElementById('price');
const addItemBtn = document.getElementById('add-item');
const previewClient = document.getElementById('preview-client');
const invoiceItems = document.getElementById('invoice-items');
const grandTotal = document.getElementById('grand-total');

let total = 0;

clientInput.addEventListener('input', () => {
  previewClient.textContent = clientInput.value;
});

addItemBtn.addEventListener('click', () => {
  const item = itemInput.value;
  const qty = parseInt(qtyInput.value);
  const price = parseFloat(priceInput.value);
  const itemTotal = qty * price;

  if (item && qty && price) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item}</td>
      <td>${qty}</td>
      <td>${price.toFixed(2)}</td>
      <td>${itemTotal.toFixed(2)}</td>
    `;
    invoiceItems.appendChild(row);

    total += itemTotal;
    grandTotal.textContent = total.toFixed(2);

    itemInput.value = '';
    qtyInput.value = '1';
    priceInput.value = '0';
  }
});

document.getElementById('toggle-dark').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
