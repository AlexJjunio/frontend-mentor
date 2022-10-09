document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault()
  console.log('Form enviado')
})

const fields = document.querySelectorAll('[required]')

for (let field of fields) {
  field.addEventListener('invalid', customValidation)
}

function customValidation(event) {
  const field = event.target

  function verifyErrors() {
    let foundError = false;

    for(let error in field.validity){
      if(error != "customError" && field.validity[error]) {
        foundError = error
      }
    }
    return foundError;
  }
  const error = verifyErrors()
  console.log(error)

  if(error) {
    field.setCustomValidity('Ops! preencha esse campo corretamente')
  } else {
    field.setCustomValidity('')
  }

}


