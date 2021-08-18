const kmInput = document.querySelector("#km");
const mileInput = document.querySelector("#miles");
const allInput = document.querySelectorAll("input");

allInput.forEach(function (input) {
  input.addEventListener("input", function (e) {
    // let number = parseInt(e.target.value);
    let floatNumber = parseFloat(e.target.value);
    let inputName = e.target.name;

    if (e.target.value == "") {
      kmInput.value = null;
      mileInput.value = null;
      return;
    }

    if (inputName === "km") {
    //   let milesValue = number / 1.609344;
      let milesValue = floatNumber/ 1.609344;
      mileInput.value = milesValue.toFixed(5);
    } else {
    //   let kmValue = number * 1.609344;
      let kmValue = floatNumber* 1.609344;
      kmInput.value = kmValue.toFixed(5);
    }
  });
});
