const buynow = () => {
  document.getElementsByClassName("btn btn-h-buy-ticket")[0].click();
};

const selectZone = () => {
  document.querySelector("a[title*='A2']").click();
};

const selectSeat = () => {
  document
    .getElementsByClassName("seatCharts-seat seatCharts-cell available")[0]
    .click();
  document.querySelector("input[id='accept-condition']").click();
  document.querySelector("button[id='next_step']").click();
};
