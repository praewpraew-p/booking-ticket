const selectRound = () => {
  document.getElementById("booknow-button0").click();
  document.getElementById("booknow-button1").click();
};

const acceptConditionAndClickButton = () => {
  document.getElementsByClassName("MuiFormControlLabel-root")[0].click();
  document.getElementsByClassName("MelonButton")[0].click();
};

const selectZone = () => {
  document.querySelectorAll("area")[0].click();
};

const selectSitSeat = () => {
  document.querySelectorAll("div[class*='SeatAvaliableStatus']")[0].click();
};

const booking = () => {
  document.getElementById("checkout-seatmap").click();
};
