// //declare your variables for the text field and access DOM
let form = document.querySelector('#form')
const submit = document.querySelector('button[type="submit"]')
const inputs = document.querySelectorAll('.input-elem div')
let firstName = inputs[0]
let lastName = inputs[1]
let email = inputs[2]
let phoneNumber = inputs[3]
let password = inputs[4]
let confirmation = inputs[5]
console.log(email, password, confirmation, firstName, lastName, phoneNumber)
let successCount;
let generalError = ' cannot be left blank'
let emailInput = email.querySelector('input')
let firstNameInput = firstName.querySelector('input')
let lastNameInput = firstName.querySelector('input')
let passwordInput = password.querySelector('input')
let confiirmationInput = confirmation.querySelector('input')


function checkAll(e){
    successCount = 0;
    
    
    //check email is  valid
    let emailValue = emailInput.value
    // let userNameValue = userNameInput.value 
    let passwordValue = passwordInput.value
    let confirmationValue = confiirmationInput.value

    checkEmail(false, emailValue)
    checkUserName(false, firstNameInput)
    checkUserName(false, lastNameInput)
    checkPassword(false, passwordValue)
    checkConfirmationPassword(false, confirmationValue, confiirmationInput)

}
//add event listener for Submit button
successCount = submit.addEventListener('click', checkAll)


form.addEventListener('submit', (e) => {
    if (successCount != 6) e.preventDefault()
})



function successError(nodeElement, value, ErrorMessage) {
    let errorText = nodeElement.querySelector('small')
    if (value) { nodeElement.classList.add('success'); nodeElement.classList.remove('error')
    errorText.textContent = ''
    successCount += 1
}
    else {
        nodeElement.classList.add('error'); nodeElement.classList.remove('success')
        errorText.textContent = ErrorMessage
    }
}

function checkEmail(eventTaken, emailValue){
    if (!emailValue) emailValue = this.value
    let emailRegex = /\w*.?\w*@\w*\.\w*/
    let emailCheck = emailRegex.test(emailValue)
    let emailError = 'Wrong email format'
    if (!emailValue) emailError= 'Email' + generalError
    
    successError(email, emailCheck,emailError)
    }
    
    function checkUserName(eventTaken, userNameValue){
        if (!userNameValue) userNameValue = this.value
        
        //check that all fields have input
    userError = 'Username' + generalError
    successError(username, userNameValue, userError)
    }
    
    

    function checkName(eventTaken, nodeElement){
        if(!nodeElement) {
            nodeElement = this.parentNode
            userNameValue = this.value
        }
        else {
            let nodeInput = nodeElement.querySelector('input')
            userNameValue = nodeInput.value
        }  
        userError = 'Username' + generalError
        successError(nodeElement, userNameValue, userError)

    }
    
    
    function checkPassword(eventTaken, passwordValue){
        //check input length for password
        if (passwordValue === undefined) passwordValue = this.value
      
    let passwordCheck = passwordValue.length >= 5
    // console.log(passwordCheck)
    let passwordError = 'Password must be at least 5 characters'
    if (!passwordValue) passwordError = 'Password' + generalError
    successError(password, passwordCheck, passwordError)
    }
    
    
    
    function checkConfirmationPassword(eventTaken, confirmationValue, passwordValue = this){
        passwordValue = passwordValue.parentNode.previousElementSibling.querySelector('input').value
        //check the two passwords match
    let checkConfirmation = (confirmationValue == passwordValue) && confirmationValue
    if (confirmationValue === undefined) confirmationValue = this.value; 
    let confirmationError = 'Passwords are not the same'
    if (!confirmationValue) confirmationError= 'Field' + generalError
    successError(confirmation, checkConfirmation, confirmationError)
    }

    
    confiirmationInput.addEventListener('change', checkConfirmationPassword)
    emailInput.addEventListener('change', checkEmail)
    firstNameInput.addEventListener('change', checkUserName)
    lastNameInput.addEventListener('change', checkUserName)
    passwordInput.addEventListener('change', checkPassword)