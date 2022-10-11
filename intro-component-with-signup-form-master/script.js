const fields = document.querySelectorAll("[required]")











for (let field of fields) {
  field.addEventListener("invalid", customValidation)
  field.addEventListener("blur", customValidation)
}


function customValidation(event) {
  event.preventDefault()
  const field = event.target

  function verifyErrors (){ 
    let foundError = false;

    for (let error in field.validity) {
      if(field.validity[error] && !field.validity.valid) {
        foundError = error
      }
    }
    return foundError
  }

  const error = verifyErrors()
  console.log("Error Exists: ", error)

  const spanError = field.parentNode.querySelector(".spanError")
  const imgError = field.parentNode.querySelector(".img-error")

  if(error) {
    imgError.classList.remove("hide")
    spanError.classList.add("active")
    spanError.innerHTML = "Campo obrigatório"
  } else {
    imgError.classList.add("hide")
    spanError.classList.remove("active")
    spanError.innerHTML = ""
  }

}


































































document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault()
  console.log("Enviado.")
})