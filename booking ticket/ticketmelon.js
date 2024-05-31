// Tips: ค่อยๆ กดที่นั่ง ถ้ารีบกดรัวๆ มันจะ error ถ้ากดที่ได้แล้วให้รีบ booking ไม่งั้นจะเด้ง

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

const selectSitSeatMiddleOfStage = () => {
  document
    .querySelectorAll("div[class*='SeatAvaliableStatus']")
    [
      Math.floor(
        document
          .querySelectorAll("div[style='padding-right: 30px;']")[0]
          .querySelectorAll("div[class*='SeatAvaliableStatus']").length / 2
      )
    ].click();
};

const booking = () => {
  document.getElementById("checkout-seatmap").click();
};
