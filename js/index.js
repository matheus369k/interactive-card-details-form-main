const confirmbBtn = document.getElementById("btnConfirmation")

confirmbBtn.addEventListener("click", comfirmationCard, false)

function comfirmationCard(e) {

    e.preventDefault()

    VerificationForm()

    return
}




function CreaterContainerConfirmation() {
    const form_container = document.querySelector("#form_container")

    form_container.classList.add("hider_off")

    const div = document.createElement("div")

    div.setAttribute("class", "container_confirmation")

    document.body.appendChild(div)


    const divContainerfother = document.querySelector(".container_confirmation")


    const img = document.createElement("img")

    img.setAttribute("class", "container_confirmation_img")

    img.setAttribute("src", "./images/icon-complete.svg")

    divContainerfother.appendChild(img)


    const h2 = document.createElement("h2")

    h2.setAttribute("class", "container_confirmation_h2")

    const h2Text = document.createTextNode("Thank you!")

    h2.appendChild(h2Text)

    divContainerfother.appendChild(h2)


    const p = document.createElement("p")

    p.setAttribute("class", "container_confirmation_p")

    const pText = document.createTextNode("We've added your card details")

    p.appendChild(pText)

    divContainerfother.appendChild(p)


    const button = document.createElement("button")

    button.setAttribute("class", "container_Confirmation_btn")

    button.setAttribute("id", "continueBtn")

    const btnText = document.createTextNode("Continue")

    button.appendChild(btnText)

    divContainerfother.appendChild(button)

    return
}

const ErroList = [
    "Corrected",
    "Corrected",
    "Corrected",
    "Corrected",
    "Corrected"
]

const daysofMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]


const inputValues = document.querySelectorAll("input")
function VerificationForm() {


    for (let i = 0; i < inputValues.length; i++) {

        if (inputValues[i].value.length < 1) {
            ErroList[i] = "Can't be blank"
        }
        else
        {
            ErroList[i] = "Corrected"
        }
        ErrMsg(i)
    }

    if (document.getElementById("form_container").querySelectorAll("span").length === 0) {
        return CreaterContainerConfirmation()
    }

    return
}

inputValues.forEach((inputValue, index) => {
    inputValue.addEventListener("input", () => {
        VerificationNumberValue(inputValue, index)
    })
})

function monthVerification() {
    if (inputValues[2].value < 13 && inputValues[2].value.length === 2) 
    {
        ErroList[2] = "Corrected"        
    }
    else 
    {
        if (document.getElementById(`input_${2}`)) {
            inputValues[2].parentNode.removeChild(document.getElementById(`input_${2}`))
        }
        ErroList[2] = "Wrong format, numbers only"
    }
    ErrMsg(2)
    return
}

function DayVerification() {
    
    if (inputValues[3].value <= daysofMonth[(inputValues[2].value) - 1]) {

        ErroList[3] = "Corrected"
    }
    else 
    {
        if (document.getElementById(`input_${3}`)) {
            inputValues[3].parentNode.removeChild(document.getElementById(`input_${3}`))
        }
        ErroList[3] = "Wrong format, numbers only"
    }
    ErrMsg(3)
    return
}

function VerificationNumberValue(inputValue, index) {
    if (Number(inputValue.value) || inputValue === inputValues[0]) 
    {

        if(inputValue === inputValues[2] || inputValue === inputValues[3])
        {

            monthVerification()

            DayVerification()
            
            return
        }

        ErroList[index] = "Corrected"

    }
    else 
    {
        if (document.getElementById(`input_${index}`)) {
            inputValues[index].parentNode.removeChild(document.getElementById(`input_${index}`))
        }
        ErroList[index] = "Wrong format, numbers only"
    }

    ErrMsg(index)
    return

}



function ErrMsg(i) {

    if (document.getElementById(`input_${i}`) === null) 
    {

        const Errormsg = document.createElement("span")
        const ErrorText = document.createTextNode(`${ErroList[i]}`)
        Errormsg.appendChild(ErrorText)
        Errormsg.setAttribute("class", `Container_ErrorMsg_${i}`)
        Errormsg.setAttribute("id", `input_${i}`)
        inputValues[i].parentNode.appendChild(Errormsg)

        inputValues[i].style.border = "1px solid red"

    }

    if (document.getElementById(`input_${i}`) && ErroList[i] === "Corrected")
    {
        inputValues[i].parentNode.removeChild(document.getElementById(`input_${i}`))

        inputValues[i].style.border = "1px solid  hsl(270, 3%, 87%)"
    }
    return
}

