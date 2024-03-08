const plusTicket = () => {
  document.getElementsByClassName("btn-default plus")[0].click();
};

const acceptTermAndClickBookingButton = () => {
  document.querySelector("label[for='person_agree_terms']").click();
  document.querySelector("button[ng-click='challenge()']").click();
};
