const divInputs = document.querySelectorAll(".input");
const buttonSubmit = document.querySelector(".button");

buttonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    
    divInputs.forEach((input) => {
        const inputField = input.children.item(".input-field")

        if(inputField.value){
            input.classList.remove("wrong")
            input.classList.add("correct")
        }else{
            input.classList.add("wrong")
        }
    })
})