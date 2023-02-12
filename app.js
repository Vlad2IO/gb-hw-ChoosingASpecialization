// ["2",":-)"]
const arr1 = ["hello", "2", "world", ":-)"];

// ["-2"]
const arr2 = ["1234", "1567", "-2", "computer science"];

// []
const arr3 = ["Russia", "Denmark", "Kazan"];

function getArrLessFourItems(arr) {
    let lengths = [];
    arr.forEach((el) => {
      if (el.length < 4) {
        lengths.push(el);
      }
    });
    return lengths;

}

// console.log(getArrLessFourItems());
// let form = document.forms.form
// let elem = form.elements.arr
