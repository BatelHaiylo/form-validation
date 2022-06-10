function formValidation(){
    if(fNameInpuRestriction() && lNameInpuRestriction() && dateInpuRestriction() &&
     emailInpuRestriction() && phoneInpuRestriction() && passwordInpuRestriction()){
        return true
    }
    return false
}

var namesRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{10}$/;


function fNameInpuRestriction(){
    var fNameValue = document.getElementById("f_name").value
    if(namesRegex.test(fNameValue)){
        return true
    }
    var message = document.getElementById("f_n_span")
    message.style.color = "crimson"
    message.innerText = "! nigga please"
    return false
}

function lNameInpuRestriction(){
    var lNameValue = document.getElementById("l_name").value
    if(namesRegex.test(lNameValue)){
        return true
    }
    var message = document.getElementById("l_n_span")
    message.style.color = "crimson"
    message.innerText = "! really nigga"
    return false
}

function dateInpuRestriction(){
    var todaysYear = new Date().getFullYear()
    var userBirthYear = document.getElementById("date_birt").value.substr(0,4)
    if((todaysYear-(parseInt(userBirthYear)))>18){
        return true
    }
    var message = document.getElementById("d_span")
    message.style.color = "crimson"
    message.innerText = "! your a baby"
    return false
}

function emailInpuRestriction(){
    var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailRegex.test(document.getElementById("e_mail").value)){
        return true
    }
    var message = document.getElementById("e_span")
    message.style.color = "crimson"
    message.innerText = "! girrrl you better cheak your email"
    return false
}

function phoneInpuRestriction(){
    var cellRegex = /^\d{9}$/;
    var phoneInput = document.getElementById("p_number")
    // /^(050)-\d{9}$/
    phoneInput.pattern="[050][0-9]{9}"
    if(cellRegex.test(phoneInput.value)){
        return true
    }
    var message = document.getElementById("p_span")
    message.style.color = "crimson"
    message.innerText = "! your number is no"
    return false
}

function passwordInpuRestriction(){
    var pswrdRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,12}$/;
    var pswrdFirstLetterRegex = /^(?=.*[A-Z]))./;
    var pswrdSecondLetterRegex = /^(?=.*[a-z]).$/;

    var password1Value = document.getElementById("password1").value

    if(pswrdFirstLetterRegex.test(password1Value[0])&&pswrdSecondLetterRegex.test(password1Value[1])&&pswrdRegex.test(password1Value)){
        return true
    }
    var message = document.getElementById("p_1_span")
    message.style.color = "crimson"
    message.innerText = "! level up your password"
    return false
    validatIdenticalPasswords()
}

function validatIdenticalPasswords(){
    var passwordIValue = document.getAnimations("password1").value
    var passwordIIValue = document.getAnimations("password2").value
    if(passwordIValue == passwordIIValue){
        return true
    }
    var message = document.getElementById("p_2_span")
    message.style.color = "crimson"
    message.innerText = "! nah try again"
    return false
}



// var message = document.createElement("span")
// document.body.append(message)
// message.style.color = "crimson"
// message.innerText = "! nah try again"
