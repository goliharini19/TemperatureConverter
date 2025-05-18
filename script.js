function convertTemperature() {
  const temperatureInput = document.getElementById("temperatureInput").value;
  const unitSelect = document.getElementById("unitSelect").value;
  const convertedTemperatureSpan = document.getElementById("convertedTemperature");

  const input = parseFloat(temperatureInput);

  if (isNaN(input)) {
    convertedTemperatureSpan.textContent = "Please enter a valid number.";
    return;
  }

  let result = "";

  if (unitSelect === "celsius") {
    const fahrenheit = (input * 9 / 5) + 32;
    const kelvin = input + 273.15;
    result = `${fahrenheit.toFixed(2)} °F / ${kelvin.toFixed(2)} K`;
  } else if (unitSelect === "fahrenheit") {
    const celsius = (input - 32) * 5 / 9;
    const kelvin = celsius + 273.15;
    result = `${celsius.toFixed(2)} °C / ${kelvin.toFixed(2)} K`;
  } else if (unitSelect === "kelvin") {
    const celsius = input - 273.15;
    const fahrenheit = (celsius * 9 / 5) + 32;
    result = `${celsius.toFixed(2)} °C / ${fahrenheit.toFixed(2)} °F`;
  }

  convertedTemperatureSpan.textContent = result;
}
