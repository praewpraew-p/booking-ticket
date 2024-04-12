const clickProduct = () => {
  document.querySelectorAll("a")[0].click();
};

const selectOption = () => {
  document
    .querySelectorAll("button[data-atd='variant-option1-button']")[0]
    .click();
};

const increaseQuantity = () => {
  document
    .querySelectorAll("button[data-atd='increase-quantity-button']")[0]
    .click();
};

const decreaseQuantity = () => {
  document
    .querySelectorAll("button[data-atd='decrease-quantity-button']")[0]
    .click();
};

const buynowButton = () => {
  document.querySelector("button[data-atd='buy-now-button']").click();
};

const buynowButtonModal = () => {
  document.querySelector("button[data-atd='variant-buy-now-button']").click();
};

const paymentDetail = () => {
  document.querySelector("label[for*='shipment-option']").click();
  document.querySelector("input[name='payment-option-list-radio-3']").click();
  document.querySelector("button[data-atd='placeorder-button']").click();
};
