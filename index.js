const inputNode = document.querySelector(".js-input-arr");
const btnResultNode = document.querySelector(".js-btn-result");
const outputNode = document.querySelector(".js-output");

btnResultNode.addEventListener("click", function () {
  const str = inputNode.value;
  const arr = str.split(",");
  const result = getArrLessFourItems(arr);
  // if (result.length > 0) {
  //     console.log(result.length)
  //     outputNode.innerHTML = "[]";
  // }
  if (result.length == 0) {
    outputNode.innerHTML = "[]";

    console.log("[]");
  } else if (result.length == 1 && result == "") {
    outputNode.innerHTML = "Введите массив строк";
    console.log("Введите массив строк");
  } else {
    outputNode.innerHTML = result;
    console.log(result);
  }

  // outputNode.innerHTML = result;
});
