

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.product-card__tab');
  const panels = document.querySelectorAll('.product-card__panel');

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (item) {
        item.classList.remove('product-card__tab--active');
      });
      panels.forEach(function (item) {
        item.classList.remove('product-card__panel--active');
      });

      tab.classList.add('product-card__tab--active');
      panels[index].classList.add('product-card__panel--active');
    });
  });


  const cartBtn = document.querySelector('.product-card__cart-btn');
  const popup = document.querySelector('.popup');
  const popupCloseBtn = document.querySelector('.popup__close-btn');

  let popupTimer;

  cartBtn.addEventListener('click', function () {

    popup.classList.add('popup--active');

    clearTimeout(popupTimer);

    popupTimer = setTimeout(function () {
      popup.classList.remove('popup--active');
    }, 3000)
  });

  popupCloseBtn.addEventListener('click', function () {
    popup.classList.remove('popup--active');

    clearTimeout(popupTimer);
  })
});