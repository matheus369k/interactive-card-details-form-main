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

const daysofMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const cardRegister = {
    name: "",
    cardnumber: "",
    day: "",
    month: "",
    cvc: ""
}


const inputValues = document.querySelectorAll("input")

function VerificationForm() {


    for (let i = 0; i < inputValues.length; i++) {

        verificationTypeValue(inputValues[i], i)

        if (inputValues[i].value.length < 1) {

            if (document.getElementById(`input_${i}`)) {

                inputValues[i].parentNode.removeChild(document.getElementById(`input_${i}`))

            }

            ErroList[i] = "Can't be blank"

        }

        ErrMsg(i)
    }

    if (document.getElementById("form_container").childNodes.length < 22) {
        return CreaterContainerConfirmation()
    }


    return
}


inputValues.forEach((inputValue, index) => {

    inputValue.addEventListener("click", () => {

        if (document.querySelector(".selectInput")) {
            document.querySelector(".selectInput").classList.remove("selectInput")
        }

        inputValue.classList.add("selectInput")

        return
    })

    inputValue.addEventListener("input", () => {

        verificationTypeValue(inputValue, index)

        return
    })
})

function verificationTypeValue(inputValue, index) {

    if (inputValue === inputValues[0] && inputValues[0].value.match(/^[a-zA-ZÃ\s]+$/) !== null && inputValues[0].value.length > 3) {

        cardRegister["name"] = inputValues[0].value


        document.getElementById("name").innerHTML = `${cardRegister["name"]}`

        ErroList[0] = "Corrected"

        ErrMsg(0)


        return
    }
    else if (inputValue.value.match(/^[0-9]+$/) !== null && inputValue.value > 0) {

        verificationValueRecomend(inputValue, index)

        return

    }
    else {

        if (document.getElementById(`input_${index}`)) {

            inputValues[index].parentNode.removeChild(document.getElementById(`input_${index}`))

        }

        ErroList[index] = "Wrong format, numbers only"

        ErrMsg(index)


        return
    }
}

function verificationValueRecomend(inputValue, index) {

    if (inputValue === inputValues[3] && inputValues[3].value.length === 2 && (inputValues[3].value <= daysofMonth[Number(inputValues[2].value) - 1] &&  inputValues[2].value >= 1 ||  inputValues[2].value < 1 && inputValues[3].value <= 31 )) {

        cardRegister["day"] = inputValues[3].value

        document.getElementById("day").innerHTML = `${cardRegister["day"]}`

        ErroList[3] = "Corrected"

    }
    else if (inputValue === inputValues[2] && inputValues[2].value < 13 && inputValues[2].value.length === 2) {

        cardRegister["month"] = inputValues[2].value

        document.getElementById("month").innerHTML = `${cardRegister["month"]}`

        ErroList[2] = "Corrected"

        if (inputValues[3].value > daysofMonth[Number(inputValues[2].value) - 1]) {
            
            ErroList[3] = "Wrong format, numbers only"

            ErrMsg(3)
            
        }

    }
    else if (inputValue === inputValues[1] && inputValues[1].value.length === 16) {

        cardRegister["cardnumber"] = inputValues[1].value

        for (let i = 0; i < 16; i += 4) {

            if (i === 0) {
                document.getElementById("cardNumber").innerHTML = `${cardRegister["cardnumber"].slice(i, i + 4)}`

            }

            else {

                document.getElementById("cardNumber").innerHTML += `  ${cardRegister["cardnumber"].slice(i, i + 4)} `

            }
        }

        ErroList[1] = "Corrected"

    }
    else if (inputValue === inputValues[4] && inputValues[4].value.length === 3) {

        cardRegister["cvc"] = inputValues[4].value

        document.getElementById("cvc").innerHTML = `${cardRegister["cvc"]}`

        ErroList[4] = "Corrected"

    }
    else {

        ErroList[index] = "Wrong format, numbers only"

    }

    if (document.getElementById(`input_${index}`)) {

        inputValues[index].parentNode.removeChild(document.getElementById(`input_${index}`))

    }

    ErrMsg(index)


    return
}

function ErrMsg(i) {

    if (document.getElementById(`input_${i}`) === null) {

        const Errormsg = document.createElement("span")

        const ErrorText = document.createTextNode(`${ErroList[i]}`)

        Errormsg.appendChild(ErrorText)

        Errormsg.setAttribute("class", `Container_ErrorMsg_${i}`)

        Errormsg.setAttribute("id", `input_${i}`)

        inputValues[i].parentNode.appendChild(Errormsg)


        inputValues[i].style.border = "1px solid red"

    }

    if (document.getElementById(`input_${i}`) && ErroList[i] === "Corrected") {

        inputValues[i].parentNode.removeChild(document.getElementById(`input_${i}`))

        inputValues[i].style.border = "1px solid hsl(270, 3%, 87%)"

    }


    return
}

