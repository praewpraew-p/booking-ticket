const booking = () => {
  document.getElementsByClassName("button-continue")[0].click();
};

const selectSeat = () => {
  document.querySelectorAll("button[class*='seat-available']")[0].click();
};
