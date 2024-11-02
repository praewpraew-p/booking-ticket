// Tips: ตอนกดผังให้กดที่ว่างข้างนอกก่อนด้วย allticket ปรับใหม่แล้ว

const buynow = () => {
  document.getElementsByClassName("btn btn-atk-primary")[0].click();
};

const buynowWithEachRound = () => {
  document.getElementById("RF_23922").click();
};

const membership = () => {
  document.querySelectorAll("input")[0].value = "WW656738869";
  document.querySelectorAll("input")[0].dispatchEvent(new Event("input"));
  document.getElementsByClassName("btn btn-atk-primary")[0].click();
};

const acceptConditions = () => {
  document.getElementsByClassName("custom-control-label")[0].click();
  document.getElementsByClassName("btn btn-accept mt-3 mx-2")[0].click();
};

const selectRoundAndZone = () => {
  document.getElementsByClassName("custom-control-label")[0].click();
  document.querySelectorAll("area[data-zone='A3']")[0].click();
};

const selectStandingSeatAndBooknow = () => {
  document.getElementsByClassName("sign plus")[0].click();
  document.getElementsByClassName("btn btn-book mt-3")[0].click();
};

const selectSitSeatAndBooknow = () => {
  [...document.querySelectorAll("div[class='ng-star-inserted']")]
    .filter((el) => el.querySelector("svg[class='seat available']"))[0]
    .click();
  document.getElementsByClassName("btn btn-book mt-3")[0].click();
};

const selectSitSeatExtendStageAndBooknow = () => {
  [
    ...[...document.querySelectorAll("tr")]
      .filter(
        (el) =>
          !el.querySelector("td > div > svg[class='seat ng-star-inserted']") &&
          el.querySelector("td > div > svg[class='seat available']")
      )[0] // row
      .querySelectorAll("div[class='ng-star-inserted']"),
  ]
    .filter((el) => el.querySelector("svg[class='seat available']"))[0] // seat
    .click();
  document.getElementsByClassName("btn btn-book mt-3")[0].click();
};

const selectSitSeatFromLeftZoneAndBookNow = () => {
  let row = [...document.querySelectorAll("tr")].filter((el) =>
    el.getElementsByClassName("seat-rotate ng-star-inserted")
  );
  let seatInRow = [
    ...row[1].querySelectorAll("div[class='ng-star-inserted']"),
  ].filter((el) => el.querySelector("svg[class='seat available']"));
  let length = seatInRow.length;
  seatInRow[length - 1].click();
  document.getElementsByClassName("btn btn-book mt-3")[0].click();
};

const selectSitSeatFromLeftZoneAndBookNowInOneLine = () => {
  [
    ...[...document.querySelectorAll("tr")]
      .filter((el) =>
        el.getElementsByClassName("seat-rotate ng-star-inserted")
      )[1]
      .querySelectorAll("div[class='ng-star-inserted']"),
  ]
    .filter((el) => el.querySelector("svg[class='seat available']"))
    [
      [
        ...[...document.querySelectorAll("tr")]
          .filter((el) =>
            el.getElementsByClassName("seat-rotate ng-star-inserted")
          )[1]
          .querySelectorAll("div[class='ng-star-inserted']"),
      ].filter((el) => el.querySelector("svg[class='seat available']")).length -
        1
    ].click();
  document.getElementsByClassName("btn btn-book mt-3")[0].click();
};

// ที่ตรงกลางของแถว
const selectSitSeatWithMiddleSeatOfTheRowAndBooknow = () => {
  [
    ...[...document.querySelectorAll("tr")]
      .filter((el) =>
        el.getElementsByClassName("seat-rotate ng-star-inserted")
      )[1] // change row
      .querySelectorAll("div[class='ng-star-inserted']"),
  ]
    .filter((el) => el.querySelector("svg[class='seat available']"))
    [
      Math.floor(
        [
          ...[...document.querySelectorAll("tr")]
            .filter((el) =>
              el.getElementsByClassName("seat-rotate ng-star-inserted")
            )[1] // change row
            .querySelectorAll("div[class='ng-star-inserted']"),
        ].filter((el) => el.querySelector("svg[class='seat available']"))
          .length / 2
      )
    ].click();
  document.getElementsByClassName("btn btn-book mt-3")[0].click();
};

const selectSitSeatSpecificRowAndBooknow = () => {
  [
    ...[...document.querySelectorAll("tr")]
      .filter((el) =>
        el.getElementsByClassName("seat-rotate ng-star-inserted")
      )[2]
      .querySelectorAll("div[class='ng-star-inserted']"),
  ]
    .filter((el) => el.querySelector("svg[class='seat available']"))[0]
    .click();
  document.getElementsByClassName("btn btn-book mt-3")[0].click();
};

const selectSitSeatLastRowAndBooknow = () => {
  [
    ...[...document.querySelectorAll("tr")]
      .filter((el) => el.getElementsByClassName("seat-rotate ng-star-inserted"))
      .slice(-1)[0]
      .querySelectorAll("div[class='ng-star-inserted']"),
  ]
    .filter((el) => el.querySelector("svg[class='seat available']"))[0]
    .click();
  document.getElementsByClassName("btn btn-book mt-3")[0].click();
};

const paymentData = () => {
  document.getElementsByClassName("option-label payment-option-1")[2].click();
  document
    .getElementsByClassName("custom-control-label checkAgreeEng")[0]
    .click();
  document.getElementsByClassName("btn btn-primary-atk ml-2")[0].click();
};
