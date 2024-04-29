const selectDate = () => {
  document.querySelector("a[data-date='2024-04-30']").click();
};

const selectTime = () => {
  document
    .getElementsByClassName("bscbbm-theatre-list-time")[1]
    .querySelector("a")
    .click();
  document
    .getElementsByClassName(
      "swal2-confirm swal2-styled swal2-default-outline"
    )[0]
    .click();
};

const booking = () => {
  document.getElementsByClassName("btn-showtime-buy")[0].click();
};

const payment = () => {
  document.getElementsByClassName("payment_input email")[0].value =
    "aris.pw10@gmail.com";
  document.getElementsByClassName("payment_input phone")[0].value =
    "0959267625";
  document.getElementById("kbankButton").click();
};
