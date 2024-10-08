// ไม่ต้อง reload หน้าใหม่ แค่กด next/prev month ก็ fetch ของให้แล้ว
// ตอน check agreement ต้องกดแค่ที่ checkbox เท่านั้น กด label ไม่ได้
// สามารถ check agreeement แล้ว uncheck ไว้ก่อนได้ ถึงเวลากดจริงมันจะไม่ขึ้น tnc อีกรอบ

const acceptTermsAndCondition = () => {
  document.querySelector("label[for='mahasanAgree']").click();
  document.querySelectorAll("button")[7].click();
};

const agreeTermsAndNextButton = () => {
  document.querySelector("input[aria-label='agree']").click();
  document.querySelector("button[data-v-774eb2b0]").click();
};

const fetchPreviousMonth = () => {
  document.querySelector("button[aria-label='Previous month']").click();
};

const fetchNextMonth = () => {
  document.querySelector("button[aria-label='Next month']").click();
};
