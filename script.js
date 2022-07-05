let head = document.getElementById("header");
let foot = document.getElementById("answer");

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      joke = data.data.content;
      console.log(data.data.content);
      head.textContent = joke.text_head;
      foot.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
}
getJoke();
document.body.addEventListener("click", getJoke);
