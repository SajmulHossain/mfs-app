document.getElementById('costBtn').addEventListener('click', function(event) {
    event.preventDefault();


    const amount = Number(document.getElementById('amount').innerText);

    const outAmount = Number(document.getElementById('cashOutAmount').value);

    const pin = Number(document.getElementById('cashOutPin').value)
    
    if (pin === 1234) {
        const totalAmount = amount - outAmount;

    document.getElementById('amount').innerText = totalAmount;
    } else {
        alert('Give a valid info.....')
    }
})