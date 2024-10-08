// Seating link: https://www.eventpop.me/events/50947/seating

const buynow = () => {
  document
    .getElementsByClassName("btn btn-default select-seat signin-checking")[0]
    .click();
};

const selectZone = () => {
  document.getElementById("E2").dispatchEvent(new Event("click"));
};

const selectTicketAmount = () => {
  let e = document.getElementById("ticket-quantity");
  e.value = "1";
  e.dispatchEvent(new Event("change"));
};

const zoomSeat = () => {
  document.getElementsByClassName("seat-zoom-view")[0].click();
};

const booknow = () => {
  document
    .getElementsByClassName(
      "submit-seat btn btn-primary btn-xs-block without-border-radius"
    )[0]
    .click();
};
