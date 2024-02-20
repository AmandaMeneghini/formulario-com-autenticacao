const buttonSubmit = document.querySelector(".button")
const divInputName = document.querySelector(".name")
const divInputEmail = document.querySelector(".email")
const divInputPhone = document.querySelector(".phone")
const divInputMessage = document.querySelector(".message")

buttonSubmit.addEventListener("click", function(){
    
    verifyInputName();
    verifyInputEmail();
    verifyInputPhoneNumber();
    verifyInputMessage();

});

function verifyInputName(){

    const inputName = document.getElementById("name")

    if(inputName.value == ""){
        divInputName.classList.add("wrong")

    }else{
        divInputName.classList.remove("wrong")
        divInputName.classList.add("correct")
    }
}

function verifyInputEmail(){

    const inputEmail = document.getElementById("email")

    if(inputEmail.value == ""){
        divInputEmail.classList.add("wrong")

    }else{
        divInputEmail.classList.remove("wrong")
        divInputEmail.classList.add("correct")
    }
}

function verifyInputPhoneNumber(){
    const inputPhone = document.getElementById("phone")

    if(inputPhone.value == ""){
        divInputPhone.classList.add("wrong")
    }else{
        divInputPhone.classList.remove("wrong")
        divInputPhone.classList.add("correct")
    }
}

function verifyInputMessage(){

    const inputMessage = document.getElementById("message")

    if(inputMessage.value == ""){
        divInputMessage.classList.add("wrong")
    }else{
        divInputMessage.classList.remove("wrong")
        divInputMessage.classList.add("correct")
    }
}