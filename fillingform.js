const clickLinkOnTwitter = () => {
  [...document.querySelectorAll("article")][1]
    .querySelector("a[href*='https://t.co']")
    .click();
};
