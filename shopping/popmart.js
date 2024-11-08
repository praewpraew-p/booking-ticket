// Pattern Link Checkout Product
// spuId is ID
// skuId find from productDetail api -> skus
// name of the product is hexadecimal code, more info http://code.cside.com/3rdpage/us/url/converter.html
// stay in the checkout page before selling start

// example
// https://www.popmart.com/th/checkout?spuId=788&skuId=1287&count=1&spuTitle=LABUBU%20%C3%97%20PRONOUNCE-BE%20FANCY%20NOW%20Vinyl%20Plush%20Doll
// https://www.popmart.com/th/checkout?spuId=15&skuId=29&count=1&spuTitle=SKULLPANDA%20Ancient%20Castle%20Series
// https://www.popmart.com/th/checkout?spuId=463&skuId=794&count=1&spuTitle=HACIPUPU%20In%20My%20Dream%20Series%20Figures
// https://www.popmart.com/th/checkout?spuId=873&skuId=1393&count=1&spuTitle=JACKSON%20WANG%20MAGIC%20MAN%20SERIES%20FIGURES
// https://www.popmart.com/th/checkout?spuId=918&skuId=1460&count=1&spuTitle=CRYBABY%20CHEER%20UP%2C%20BABY%21%20SERIES-Plush%20Doll
// https://www.popmart.com/th/checkout?spuId=919&skuId=1461&count=1&spuTitle=CRYBABY%20CHEER%20UP%2C%20BABY%21%20SERIES-Plush%20Doll%20Pendant
// https://www.popmart.com/th/checkout?spuId=1030&skuId=1606&count=1&spuTitle=PUCKY%20The%20Feast%20Series%20Figures
// https://www.popmart.com/th/checkout?spuId=1040&skuId=1627&count=1&spuTitle=CRYBABY%20CHEER%20UP%2C%20BABY!%20SERIES-Plush%20Pendant%20Blind%20Box
// https://www.popmart.com/th/checkout?spuId=1198&skuId=1834&count=1&spuTitle=MEGA%20SPACE%20MOLLY%20400%25%20Garfield

// Register
// https://popmart-ladprao.pubcastplus.com/bnvstscdgu
// https://popmart-ladprao.pubcastplus.com/4m3nt3hw9u45r23t2erwt (ladprao)
// https://popmart-event.pubcastplus.com/gf34mpfgn35r645gwer (new event)
// https://www.popmart.com/th/pop-now/set/10-10000104000070

//rocket
const registerButton = () => {
  document.getElementsByClassName("register")[0].click();
};

// next button doesn't work
const selectBranch = () => {
  document.getElementsByClassName("branch-item")[2].click();
  document.getElementsByClassName("next-btn")[0].click();
};

// doesn't work
const selectDate = () => {
  document.querySelector("button[class*='Mui-selected']");
};

const selectTime = () => {
  document.getElementsByClassName("timeButtons")[0].click();
  document.getElementsByClassName("Next center-text-btn")[0].click();
};

// must wait for cloudfare verify
const confirmInfomation = () => {
  document.getElementsByClassName("ant-checkbox-input")[0].click();
  document.getElementsByClassName("next-btn")[0].click();
};
