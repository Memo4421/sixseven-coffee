const totalAmountText = document.getElementById('toplam-tutar');
const addButtons = document.querySelectorAll('.ekle-btn');
const clearButton = document.getElementById('sifirla-btn');

let cartTotal = 0;

addButtons.forEach(button => {
    button.addEventListener('click', () => {
        const coffeePrice = parseInt(button.getAttribute('data-fiyat'));
        cartTotal += coffeePrice;
        totalAmountText.textContent = cartTotal;
    });
});

clearButton.addEventListener('click', () => {
    cartTotal = 0;
    totalAmountText.textContent = 0;
});