const display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function backspace() {
  display.value = display.value.slice(0, -1);
}

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

function calculate() {
  try {
    let expression = display.value;

    // Replace custom calculator values with JavaScript values
    expression = expression.replace(/pi/g, "Math.PI");
    expression = expression.replace(/\be\b/g, "Math.E");
    expression = expression.replace(/sqrt\(/g, "Math.sqrt(");
    expression = expression.replace(/log\(/g, "Math.log10(");
    expression = expression.replace(/ln\(/g, "Math.log(");

    // Replace power symbol ^ with **
    expression = expression.replace(/\^/g, "**");

    // Convert sin, cos, tan to use degrees
    expression = expression.replace(/sin\(([^)]+)\)/g, "Math.sin(toRadians($1))");
    expression = expression.replace(/cos\(([^)]+)\)/g, "Math.cos(toRadians($1))");
    expression = expression.replace(/tan\(([^)]+)\)/g, "Math.tan(toRadians($1))");

    const result = eval(expression);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}