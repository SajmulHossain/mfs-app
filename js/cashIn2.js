document.getElementById('addBtn').addEventListener('click', function(e) {
    e.preventDefault();

    const value = getValueByInput('addAmount');
    const pin = getValueByInput('addPin');

    if(isNaN(value)) {
        alert('Please give a valid input value');
        return;
    } 


    if(pin === 1234) {
        const amount = getAmountValue('amount');

        const totalAmount = amount + value;

        displayAmount(totalAmount);

        transaction(true, value, totalAmount);
    }

})