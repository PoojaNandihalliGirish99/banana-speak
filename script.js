var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#txt-output");

var url = "https://api.funtranslations.com/translate/minion.json";
function constructUrl(input) {
    return url + "?" + "text=" + input;
}

function clickEventHandler(){
    var text = txtInput.value;
    fetch(constructUrl(text)) // fetch = access the api constructed above
        .then(response => response.json()) //do this after fetching the api - callback to a function - in this case inbuilt json()
        .then(data => { //data is json object
            // store the value of the key after mapping to the key value pair where - key is "translated" inside the object contents.
            var translated = data.contents.translated; 
            output.innerText = translated; //innerText is like a controller which will display the value of translated in the div is = "output"
        }).catch(errorHandler);
}
function errorHandler(error) {
    console.log("error : " , error);
}

btnTranslate.addEventListener("click", clickEventHandler);

