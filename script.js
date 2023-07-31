function calculateBMI() {
  // Get input values
  const gender = document.getElementById('gender').value;
  const age = parseInt(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  // Check for valid input
  if (isNaN(age) || isNaN(weight) || isNaN(height)) {
      document.getElementById('result').innerText = "Please enter valid values for age, weight, and height.";
      return;
  }

  // Calculate BMI
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);

  // Determine BMI category based on WHO guidelines
  let category = '';
  if (bmi < 18.5) {
      category = 'Underweight';
  } else if (bmi >= 18.5 && bmi < 24.9) {
      category = 'Normal weight';
  } else if (bmi >= 25 && bmi < 29.9) {
      category = 'Overweight';
  } else {
      category = 'Obese';
  }

  // Display result
  document.getElementById('result').innerText = `BMI: ${bmi.toFixed(2)}\nCategory: ${category}`;
}
