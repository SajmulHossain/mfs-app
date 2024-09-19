document.getElementById('addBtn').addEventListener('click', function(event) {
    event.preventDefault();


    const amount = Number(document.getElementById('amount').innerText);

    const addAmount = Number(document.getElementById('addAmount').value);

    const pin = Number(document.getElementById('addPin').value)
    
    if (pin === 1234) {
        const totalAmount = addAmount + amount;

    document.getElementById('amount').innerText = totalAmount;
    } else {
        alert('Give a valid info.....')
    }
})