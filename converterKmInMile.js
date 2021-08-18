const kmInput = document.querySelector("#km");
const mileInput = document.querySelector("#miles");
const allInput = document.querySelectorAll("input");

allInput.forEach(function (input) {
  input.addEventListener("input", function (e) {
    let number = parseInt(e.target.value);
    let inputName = e.target.name;
  });
});
