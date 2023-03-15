//creating a function that gets the height and weight input by of user. then make calculations to the input.
function calculatenow() {
  const cm = document.querySelector('input[name="height"]').value;
  const kg = document.querySelector('input[name="weight"]').value;

  if (cm === "" || kg === "") {
    alert("Need both height and weight >:D");
    return;
  }

  const bmi = kg / (cm / 100) ** 2;
  const bmiFinal = bmi.toFixed(2);
  const result = document.getElementById("bmi-result");
  result.textContent = `${bmiFinal}`;
}


