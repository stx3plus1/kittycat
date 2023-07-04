const delay = ms => new Promise(res => setTimeout(res, ms));

let button = document.getElementsByClassName("meowbutton");

button.addEventListener("click"), function(){
    document.getElementsByClassName("hiddenmeow").style.margintop = "-90vw"
}

const wait2s = async () => {
    await delay(2000);
}