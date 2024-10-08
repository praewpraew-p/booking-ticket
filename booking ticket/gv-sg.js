const viewSeatPlan = () => {
  document.querySelector("button[ng-click='getViewSeatsPlan()']").click();
};

const selectTixType = () => {
  document.querySelectorAll("select[ng-options*='tixType']")[0].value = "0";
  document
    .querySelectorAll("select[ng-options*='tixType']")[0]
    .dispatchEvent(new Event("change"));
};

const selectPayment = () => {
  document.querySelectorAll("label[class='cards-list-ct']")[0].click();
  document.querySelectorAll("button[ng-click='submitPayment()']")[0].click();
};

const agreedTnC = () => {
  document.querySelectorAll("button[ng-click='ok()']")[0].click();
};
