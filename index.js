var translateBtn = document.querySelector("#translate-btn");

var input = document.querySelector("textarea");

var divOutput = document.querySelector("#output");

var url = "https://api.funtranslations.com/translate/minion.json";

function constructURL(text) {
  // console.log(encodeURI(`${url}?text=${text}`));
  return `${url}?text=${text}`;
}

function translateHandler() {
  var text = input.value;

  fetch(constructURL(text))
    .then((response) => response.json())
    .then((translatedInput) => {
      console.log(translatedInput);
      divOutput.innerText = translatedInput.contents.translated;
    })
    .catch((error) => {
      console.log(error);
      alert("Please try again after some time");
    });
}

translateBtn.addEventListener("click", translateHandler);
