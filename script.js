document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('calculateTotal').addEventListener('click', calculateTotalPrice);
});

function calculateTotalPrice() {
    const prices = document.querySelectorAll('.price');
    let total = 0;

    prices.forEach(price => {
        total += parseFloat(price.textContent);
    });

    addTotalRow(total.toFixed(2));
}

function addTotalRow(total) {
    const table = document.getElementById('groceryTable');
    let totalRow = document.querySelector('.total-row');

    if (!totalRow) {
        totalRow = document.createElement('tr');
        totalRow.classList.add('total-row');
        const totalCell = document.createElement('td');
        totalCell.colSpan = 2;
        totalCell.id = "ans";
        totalRow.appendChild(totalCell);
        table.appendChild(totalRow);
    }

    totalRow.cells[0].textContent = `Total Price: ${total}`;
}



