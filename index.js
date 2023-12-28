const weight = document.getElementById("weight");
const height = document.getElementById("height");
const myBtn = document.getElementById("myBtn");
const result = document.getElementById("result");

myBtn.addEventListener("click", () => {
  console.log("button clicked");
  bmiCalculator();
});

function bmiCalculator() {
  // Convert weight and height values to numbers
  const weightValue = parseFloat(weight.value);
  const heightValue = parseFloat(height.value);

  // Check if the input is empty
  if (isNaN(weightValue) || isNaN(heightValue)) {
    result.innerHTML = "Input is Empty";
  } else {
    // Calculate BMI
    let bmi = weightValue / Math.pow(heightValue / 100, 2);

    // Display the result
    if (bmi <= 18.5) {
      result.innerHTML = `Your BMI is ${bmi.toFixed(
        2
      )} so you are underweight.`;
    } else if (bmi > 18.6 && bmi <= 24.9) {
      result.innerHTML = `Your BMI is ${bmi.toFixed(
        2
      )} so you have a normal weight.`;
    } else if (bmi >= 25) {
      result.innerHTML = `Your BMI is ${bmi.toFixed(2)} so you are overweight.`;
    }
  }
}
