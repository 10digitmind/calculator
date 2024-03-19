const result = document.querySelector(".result");
const numbers = document.querySelectorAll(".number");
const cancel = document.querySelector("#cancel");
const del = document.querySelector("#delete");
const add = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const divide = document.querySelector("#divide");
const mutiply = document.querySelector("#multiply");
const output = document.querySelector(".output");

const equals = document.querySelector("#equals");
let display = false;
let sign = false;

// display number function
numbers.forEach((number) => {
  number.addEventListener("click", function () {
    display = true;

    result.innerHTML += parseFloat(number.innerHTML);
  });
});

// set to reset
cancel.addEventListener("click", function () {
  result.innerHTML = "";
  display = false;
  output.innerHTML = "0";
});

// 
add.addEventListener("click", function () {
  showsymbol(add);
});

divide.addEventListener("click", function () {
  showsymbol(divide);
});

minus.addEventListener("click", function () {
  showsymbol(minus);
});
mutiply.addEventListener("click", function () {
  showsymbol(mutiply);
});

//display symbol function
function showsymbol(symbol) {
  if (display) {
    result.textContent += symbol.textContent;
    sign = true;
  }
  if (sign) {
    display = false;
  }
}

//delete function 
del.addEventListener("click", function () {
  if (display || sign) {
    resultcontent = result.innerHTML;
    if (resultcontent.length > 0) {
      result.textContent = resultcontent.slice(0, -1);
    }
  }
});

//equals function

equals.addEventListener("click", function () {
  if (display && sign) {
    let outputresult = eval(result.innerHTML);
    output.innerHTML = outputresult;
  }
});
