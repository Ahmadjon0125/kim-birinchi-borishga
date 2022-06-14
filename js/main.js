var elForm = document.querySelector(".js-form")
var elInput = document.querySelector(".js-input")
var elError = document.querySelector(".js-error")
var resultMan = document.querySelector(".js-resultm")
var resultByc = document.querySelector(".js-resultb")
var resultCar = document.querySelector(".js-resultc")
var resultPlane = document.querySelector(".js-resultp")

elForm.addEventListener("submit", function(event){
  event.preventDefault()

  if (elInput.value <=0) {
    elError.textContent = "NOLdan katta son kiriting"
    elInput.classList.add("is-invalid")
    elInput.classList.remove("is-valid")
    elError.classList.add("text-danger")
    elError.classList.remove("text-success")
    return;
  } else {
    elError.textContent = "OK"
    elInput.classList.remove("is-invalid")
    elInput.classList.add("is-valid")
    elError.classList.remove("text-danger")
    elError.classList.add("text-success")
  }

  resultMan.textContent = rMan().toFixed(1)
  resultByc.textContent = rByc().toFixed(1)
  resultCar.textContent = rCar().toFixed(1)
  resultPlane.textContent = rPlane().toFixed(1)

})


function rMan(v = 3.6) {
  return Number(elInput.value) / v
}

function rByc(v = 20.1) {
  return Number(elInput.value) / v
}

function rCar(v = 70) {
  return Number(elInput.value) / v
}

function rPlane(v = 800) {
  return Number(elInput.value) / v
}