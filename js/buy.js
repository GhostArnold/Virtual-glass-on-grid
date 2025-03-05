const button = document.querySelector('.buy-btn');
button.addEventListener('click', () => {
  const choice = confirm('Вы точно хотите купить данный товар');
  if (choice) {
    alert('Мы приняли вашу заявку');
  }
});
