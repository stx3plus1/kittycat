const delay = ms => new Promise(res => setTimeout(res, ms));

async function buttonAction() {
    document.querySelector(".hiddenmeow").style.margin = "10px 0 0 0"
    await delay(1250);
    document.querySelector(".hiddenmeow").style.margin = "125vh 0 0 0"
}