

document.getElementById("cashInBtn").addEventListener("click", function () {
  displayItem("cashInForm", "cashInBtn");
});

document.getElementById("cashOutBtn").addEventListener("click", function () {
    displayItem("cashOutForm", "cashOutBtn");
  });


document
  .getElementById("transactionBtn")
  .addEventListener("click", function () {
    displayItem("transaction-sec", "transactionBtn");
  });
