// refresh ตอน 00:00:01 วิ ถ้า refresh 00 ตรงมันจะเร็วไป

const plusTicket = () => {
  document.getElementsByClassName("btn-default plus")[0].click();
};

const acceptTermAndClickBookingButton = () => {
  document.querySelector("label[for='person_agree_terms']").click();
  document.querySelector("button[ng-click='challenge()']").click();
};
