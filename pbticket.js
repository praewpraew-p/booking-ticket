const byunow = () => {
  document.getElementsByClassName("button_buy")[0].click();
};

const selectRound = () => {
  document.querySelectorAll("div[id='id_map1']")[0].click();
  document.querySelectorAll("div[id='id_map2']")[0].click();
};

const selectZone = () => {
  [...document.querySelectorAll("area")]
    .filter((el) => el.onclick.toString().includes("A2"))[0]
    .click();
};

const selectSitSeatAndBooknow = () => {
  [...document.querySelectorAll("input[name='seat[]']")]
    .filter((el) => !el.querySelector("label[aria-pressed='true']"))[0]
    .click();
  document.querySelectorAll("input[class='css-checkbox']")[0].click();
  document.querySelectorAll("input[name='SUBMIT']")[0].click();
};

const selectSitSeatSpecificFrontSeatSecondaryStageAndBooknow = () => {
  let frontRow = [...document.querySelectorAll("tr")].filter(
    (el) =>
      !el.querySelector("td[bgColor='#EEEEEE']") &&
      el.querySelector("input[name='seat[]']")
  )[0];
  [...frontRow.querySelectorAll("input[name='seat[]']")]
    .filter((el) => !el.querySelector("label[aria-pressed='true']"))[0]
    .click();
  document.querySelectorAll("input[class='css-checkbox']")[0].click();
  document.querySelectorAll("input[name='SUBMIT']")[0].click();
};

const selectSitSeatFromLeftZoneAndBooknow = () => {
  let row = [...document.querySelectorAll("tr")].filter((el) =>
    el.querySelector("input[name='seat[]']")
  );
  let seatInRow = [...row[1].querySelectorAll("td")].filter((el) =>
    el.querySelector("input[name='seat[]']")
  );
  seatInRow[seatInRow.length - 1].querySelector("input[name='seat[]']").click();
  document.querySelectorAll("input[class='css-checkbox']")[0].click();
  document.querySelectorAll("input[name='SUBMIT']")[0].click();
};

const selectSitSeatOnMiddleOfTheRowAndBooknow = () => {
  let row = [...document.querySelectorAll("tr")].filter((el) =>
    el.querySelector("input[name='seat[]']")
  );
  let seatInRow = [...row[1].querySelectorAll("td")].filter((el) =>
    el.querySelector("input[name='seat[]']")
  );
  seatInRow[Math.floor(seatInRow.length / 2)]
    .querySelector("input[name='seat[]']")
    .click();
  seatInRow[Math.floor(seatInRow.length / 2) - 1]
    .querySelector("input[name='seat[]']")
    .click();
  seatInRow[Math.floor(seatInRow.length / 2) + 1]
    .querySelector("input[name='seat[]']")
    .click();
  document.querySelectorAll("input[class='css-checkbox']")[0].click();
  document.querySelectorAll("input[name='SUBMIT']")[0].click();
};

const selectSitSeatSpecificPriceBooknow = () => {
  let frontRow = [...document.querySelectorAll("tr")].filter(
    (el) =>
      el.querySelector("td[bgColor='#009f00']") &&
      el.querySelector("input[name='seat[]']")
  )[1];
  [...frontRow.querySelectorAll("input[name='seat[]']")]
    .filter((el) => !el.querySelector("label[aria-pressed='true']"))[0]
    .click();
  document.querySelectorAll("input[class='css-checkbox']")[0].click();
  document.querySelectorAll("input[name='SUBMIT']")[0].click();
};

const selectStandingSeatAmount = () => {
  document.querySelectorAll("select[name='seat']")[0].options.selectedIndex = 1; // 2 Tickets
  document.querySelectorAll("select[name='seat']")[0].options.selectedIndex = 2; // 3 Tickets
  document.querySelectorAll("select[name='seat']")[0].options.selectedIndex = 3; // 4 Tickets
};

const selectShippingMethod = () => {
  document.querySelectorAll("label[for='method_pickup']")[0].click();
  document.querySelectorAll("label[for='method_delivery']")[0].click();
};

const booknow = () => {
  document.querySelectorAll("input[class='css-checkbox']")[0].click();
  document.querySelectorAll("input[name='SUBMIT']")[0].click();
};

document.getElementById("fGenderM2").click();
document.getElementById("fIdCard2").value = "1-1007-01917-91-9";
document.getElementById("fName2").value = "บุญส่ง";
document.getElementById("fLastname2").value = "ศรีทอง";
document.getElementById("fMobile2").value = "088-328-8320";
