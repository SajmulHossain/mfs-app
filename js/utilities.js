function getValueByInput(id) {
    const value = document.getElementById(id).value;
    const numberValue = Number(value);
    return numberValue;
}

function getAmountValue(id) {
    const value = document.getElementById(id).innerText;
    const numberValue = Number(value);
    return numberValue;
}


function displayItem(id, BtnId) {
    document.getElementById("cashOutForm").classList.add("hidden");
    document.getElementById("cashInForm").classList.add("hidden");
    document.getElementById("transaction-sec").classList.add("hidden");
  
    document.getElementById("cashInBtn").classList.remove("btn-success");
    document.getElementById("cashOutBtn").classList.remove("btn-success");
    document.getElementById("transactionBtn").classList.remove("btn-success");
  
    document.getElementById(id).classList.remove("hidden");
    document.getElementById(BtnId).classList.add("btn-success");
  }


function displayAmount(amount) {
    document.getElementById('amount').innerText = amount;
}

function transaction(cash, money , newBalance) {
const div = document.getElementById('transaction-sec');

    const h3 = document.createElement('h3');
const p = document.createElement('p');
h3.classList.add('text-2xl' ,'font-bold');
div.classList.add('p-3', 'text-black');


if(cash) {
    h3.innerText = 'Cash In';
    p.innerText = `Added ${money} TK.
    New Balance = ${newBalance}`;
    div.classList.add('bg-green-600')
} else {
    h3.innerText = 'Cash Out';
div.classList.add('bg-red-600')
    p.innerText = `Cash Out ${money} TK.  
    New Balance = ${newBalance}`;

}

div.append(h3, p);

}