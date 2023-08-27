const form = document.querySelector("#bmiForm");
const results = document.querySelector("#results");
const category = document.querySelector("#category");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (isNaN(height) || height <= 0 || isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please provide valid values for height and weight.";
    category.innerHTML = "";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `Your BMI is: <span>${bmi}</span>`;
    showCategory(bmi);
  }
});

function showCategory(bmi) {
  if (bmi < 18.5) {
    category.innerHTML =
      "Category: <span class='underweight'>Underweight</span>";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category.innerHTML = "Category: <span class='normal'>Normal Weight</span>";
  } else if (bmi >= 25 && bmi < 29.9) {
    category.innerHTML = "Category: <span class='overweight'>Overweight</span>";
  } else {
    category.innerHTML = "Category: <span class='obese'>Obese</span>";
  }
}
