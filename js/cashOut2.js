document.getElementById('costBtn').addEventListener('click', function(e) {
    e.preventDefault();

    const value = getValueByInput('cashOutAmount');
    const pin = getValueByInput('cashOutPin');

    if(isNaN(value)) {
        alert('Give a valid value');
        return;
    }

    if(pin === 1234) {
        const amount = getAmountValue('amount');

        if (value > amount) {
            alert('Insufficient Balance');
            return;
        }

        const totalAmount = amount - value;
        displayAmount(totalAmount);

        transaction(false, value, totalAmount);
    }
})