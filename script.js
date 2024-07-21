document.addEventListener('DOMContentLoaded', () => {
    calculateTotalPrice();
});

function calculateTotalPrice() {
    const prices = document.querySelectorAll('.prices');
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    addTotalRow(total.toFixed(2));
}

function addTotalRow(total) {
    const table = document.getElementById('groceryTable');
    const totalRow = document.createElement('tr');
    totalRow.classList.add('total-row');

    const totalCell = document.createElement('td');
    totalCell.colSpan = 2;
    totalCell.textContent = `Total Price: $${total}`;

    totalRow.appendChild(totalCell);
    table.appendChild(totalRow);
}


