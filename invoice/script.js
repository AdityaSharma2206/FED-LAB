function generateInvoice() {
  var productName = document.getElementById("productName").value;
  var date = document.getElementById("date").value;
  var price = parseFloat(document.getElementById("price").value);
  var quantity = parseInt(document.getElementById("quantity").value);
  var tax = parseFloat(document.getElementById("tax").value);

  var total = price * quantity * (1 + tax / 100);

  var invoiceBody = document.getElementById("invoiceBody");
  var newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${productName}</td>
    <td>${date}</td>
    <td>${price.toFixed(2)}</td>
    <td>${quantity}</td>
    <td>${tax}</td>
    <td>${total.toFixed(2)}</td>
  `;
  invoiceBody.appendChild(newRow);

  document.getElementById("invoice").style.display = "block";
}