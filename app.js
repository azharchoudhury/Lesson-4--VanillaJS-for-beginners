var txtInput = document.querySelector("#txt-input");
var btnTranslate = document.querySelector("#btn-translate");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText = "I am powerful!";


function clickHandler() {
    outputDiv.innerText = "ashajahaj " + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);