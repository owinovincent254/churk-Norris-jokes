const jokes = document.getElementById("jokes");
const submit = document.getElementById("submit");

const generateRandomJoke = () => {
  fetch("https://api.chucknorris.io/jokes/random").then(function (res) {
    res.json().then(function (data) {
      console.log(data.value);
      jokes.innerHTML = `
        <p>${data.value}</p>
        <p>${data.created_at}
        `;
    });
  });
};
window.addEventListener("load", function(){
    generateRandomJoke()
})
submit.addEventListener("click", function () {
  generateRandomJoke()
});
