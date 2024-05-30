function calculateTotal(){
    let femalePrice = 150.95;
    let malePrice = 180.95;
    let femaleQuantity = parseInt(document.getElementById('Female-Quantity').value || 0)
    let maleQuantity = parseInt(document.getElementById('Male-Quantity').value || 0)
    let femaleTotal = femalePrice * femaleQuantity
    let maleTotal = malePrice * maleQuantity
    let totalPrice = maleTotal + femaleTotal

  document.getElementById('female-total').textContent = "R" + femaleTotal.toFixed(2)
  document.getElementById('male-total').textContent = "R" + maleTotal.toFixed(2)
  document.getElementById('total-price').textContent = "R" + totalPrice.toFixed(2)
}