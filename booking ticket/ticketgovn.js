document.getElementsByClassName("order_now order-button")[0].click();

document.querySelector("input[value='17']").click();
document.querySelector("input[value='17']").dispatchEvent(new Event("change"));
