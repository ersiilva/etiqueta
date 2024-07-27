function formatDate(dateString) {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}

function printInfo() {
    const productName = document.getElementById('productName').value;
    const manufactureDate = formatDate(document.getElementById('manufactureDate').value);
    const expiryDate = formatDate(document.getElementById('expiryDate').value);
    const productWeight = document.getElementById('productWeight').value;

    const printContent = `
        <div style="text-align: center;">
            <h1>88 SMASH</h1>
        </div>
        <div style="text-align: center;">   
            <p><strong></strong> ${productName}</p>
        </div>
        <div style="text-align: center;">
            <p><strong>DATA:</strong> ${manufactureDate}</p>
        </div>
        <div style="text-align: center;">   
            <p><strong>VAL:</strong> ${expiryDate}</p>
        </div>
        <div style="text-align: center;">
            <p><strong>Peso:</strong> ${productWeight}</p>
        </div>
    `;

    const printDiv = document.getElementById('printContent');
    printDiv.innerHTML = printContent;
    printDiv.style.display = 'block';

    window.print();

    // Hide print content after printing
    printDiv.style.display = 'none';
}