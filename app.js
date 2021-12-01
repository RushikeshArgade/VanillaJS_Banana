// console.log("Hello World..!!")

var btnTranslate = document.querySelector("#btn-translate")
var inputText = document.querySelector("#txt-input")
var ouptputText = document.querySelector("#output")

var url = "https://api.funtranslations.com/translate/minion.json"


function builUrl(text){
    return url + "?" + "text=" + text
}


function btnClicked() {
    // console.log(btnTranslate)
    // console.log(inputText.value)
    console.log(builUrl(inputText.value))
    fetch(builUrl(inputText.value))
    .then(response => response.json())
    .then(data => {
        ouptputText.innerText = data.contents.translated;
        console.log(data.contents.translated)
    });
     
}


btnTranslate.addEventListener("click",btnClicked)
