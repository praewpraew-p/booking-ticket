const acceptTermsAndCondition = () => {
  document.querySelectorAll("input[name='agree']")[1].click();
  document.querySelectorAll("button")[7].click();
};

const agreeTermsAndNextButton = () => {
  document.querySelectorAll("input[name='agree']")[0].click();
  document.querySelectorAll("button")[4].click();
};
