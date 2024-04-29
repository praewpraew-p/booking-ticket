const buynow = () => {
  document.getElementsByClassName("add-to-cart-buy-now-btn")[0].click();
};

const checkout = () => {
  document
    .querySelector("div[style*='background-color: rgb(245, 114, 36)']")
    .click();
};
