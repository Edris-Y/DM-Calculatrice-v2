let result = document.getElementById("result");

function buttonClicked(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  let expression = result.value;
  let answer = eval(expression);
  result.value = answer;
}
function deleteResult() {
  result.value = result.value.slice(0, -1);
}