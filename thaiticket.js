const buynow = () => {
  document.getElementsByClassName("btn-red btn-buynow btn-item")[0].click();
};

const buynowWithEachRound = () => {
  document.querySelector("a[data-button='6824']").click();
};

const membership = () => {
  document.querySelector("input[id='txt_verifycode']").value = "1234";
  document.querySelector("div[id='btn_verifycode']").click();
};

const acceptConditions = () => {
  document.getElementsByClassName("label-checkbox big")[0].click();
  document.getElementsByClassName("btn-solid-round5-blue w-auto")[0].click();
};

const selectRound = () => {
  document.getElementById("rdId").value = "73442";
};

const selectSitZone = () => {
  document.querySelectorAll("area[href='#fixed.php#B2']")[0].click();
};

const selectStandingZone = () => {
  document.querySelectorAll("area[href='#festival.php#VVIPR']")[0].click();
};

const selectSitSeat = () => {
  document.querySelectorAll("div[class='seatuncheck']")[0].click();
};

const selectStandingSeat = () => {
  document.querySelectorAll("select[name='book_cnt']")[0].value = "1";
  document
    .querySelectorAll("select[name='book_cnt']")[0]
    .dispatchEvent(new Event("change"));
};

const selectSitSeatWithCondition = () => {
  [...document.querySelectorAll("td")]
    .filter(
      (el) =>
        el.title.includes("A") && el.querySelector("div[class='seatuncheck']")
    )[0]
    .click();
};

const selectSitSeatFromRightZone = () => {
  [...document.querySelectorAll("td")]
    .filter((el) => el.querySelector("div[class='seatuncheck']"))
    .slice(-1)[0]
    .click();
};

const selectSitSeatFromRightZoneWithFirstRowCondition = () => {
  [...[...document.querySelectorAll("tr")][0].querySelectorAll("td")]
    .filter((el) => el.querySelector("div[class='seatuncheck']"))
    .slice(-1)[0]
    .click();
};

const selectSitSeatNearStage = () => {
  for (let i = 0; i <= 3; i++) {
    [...[...document.querySelectorAll("tr")][i].querySelectorAll("td")]
      .filter((el) => el.querySelector("div[class='seatuncheck']"))[0]
      .click();
  }
};

const booknow = () => {
  document.getElementById("booknow").click();
};

const fillTicketName = () => {
  document.getElementById("txt_firstname_0").value = "Arisara Phongsai";
  document.getElementById("txt_firstname_1").value = "Nudsara Thapana";
  document.getElementById("btn_regnow").click();
  document.getElementsByClassName("fancybox-item fancybox-close")[0].click();
};

const paymentData = () => {
  document.getElementById("check-protect").click();
  document.getElementById("btn_pickup").click();
  document.getElementById("btn_mobile").click();
  document.getElementById("btn_kplus").click();
  document.getElementById("payplus_contact").value = "0959267625";
  document.getElementById("check-agree").click();
  document.getElementById("btn_confirm").click();
};
