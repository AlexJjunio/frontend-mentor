const fields = document.querySelectorAll("[required]")

function ValidateField(field) {
  console.log(field.validity)

  function customMessage(typeError) {
    const messages = {
      text: {
        valueMissing: "Por favor, preencha este campo"
      },
      email: {
        valueMissing: "Email é obrigatório",
        typeMismatch: "Por favor, preencha um email válido"
      },
      password: {
        tooShort: "A senha deve ter no mínimo 8 caracteres",
        valueMissing: "Por favor, preencha este campo"
      }
    }
    return messages[field.type][typeError]
  }

  function verifyErrors (){ 
    let foundError = false;

    for (let error in field.validity) {
      if(field.validity[error] && !field.validity.valid) {
        foundError = error
      }
    }
    return foundError
  }

  function setCustomMessage(message){
    const spanError = field.parentNode.querySelector(".spanError")
    const imgError = field.parentNode.querySelector(".img-error")
    if(message) {
      imgError.classList.remove("hide")
      spanError.classList.add("active")
      spanError.innerHTML = message
    } else {
      imgError.classList.add("hide")
      spanError.classList.remove("active")
      spanError.innerHTML = ""
    }
  }

  return function() {

    const error = verifyErrors()

    if(error) {
      const message = customMessage(error)
      field.style.borderColor = "red"
      setCustomMessage(message)
    } else {
      field.style.borderColor = "hsl(154, 59%, 51%)"
      setCustomMessage()
    }  
  }
}

















function customValidation(event) {
  const field = event.target
  const validation = ValidateField(field)
  validation()
}


for (let field of fields) {
  field.addEventListener("invalid", event => {
    event.preventDefault()
    customValidation(event)
  })
  field.addEventListener("blur", customValidation)
}

































































document.querySelector("form").addEventListener("submit", event => {
  event.preventDefault()
  console.log("Enviado.")
})