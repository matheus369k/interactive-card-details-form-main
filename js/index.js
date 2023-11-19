const confirmbBtn = document.getElementById("btnConfirmation")

confirmbBtn.addEventListener("click", comfirmationCard, false)

function comfirmationCard(e) {

    e.preventDefault()

    const divEffect = document.createElement("div")
    divEffect.setAttribute("class", "container_divEffect_verification_dados")
    const fotherDivEffect = document.getElementById("form_container")
    fotherDivEffect.appendChild(divEffect)
    

    setTimeout(()=> {
        fotherDivEffect.removeChild(document.querySelector(".container_divEffect_verification_dados"))

        VerificationForm()
    }, 1000)

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

    verificationValueRecomend()

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

        AddValueCard(inputValue, index)

        return
    })
})

function AddValueCard(inputValue, index) {

    if (inputValue === inputValues[3]) {

        cardRegister["day"] = inputValues[3].value

        document.getElementById("day").innerHTML = `${cardRegister["day"]}`

    }
    else if (inputValue === inputValues[2]) {

        cardRegister["month"] = inputValues[2].value

        document.getElementById("month").innerHTML = `${cardRegister["month"]}`

    }
    else if (inputValue === inputValues[1]) {

        cardRegister["cardnumber"] = inputValues[1].value

        for (let i = 0; i < 16; i += 4) {

            if (i === 0) {
                document.getElementById("cardNumber").innerHTML = `${cardRegister["cardnumber"].slice(i, i + 4)}`

            }

            else {

                document.getElementById("cardNumber").innerHTML += `  ${cardRegister["cardnumber"].slice(i, i + 4)} `

            }
        }

    }
    else if (inputValue === inputValues[4]) {

        cardRegister["cvc"] = inputValues[4].value

        document.getElementById("cvc").innerHTML = `${cardRegister["cvc"]}`

    }

    if (inputValue === inputValues[0]) {

        cardRegister["name"] = inputValues[0].value

        document.getElementById("name").innerHTML = `${cardRegister["name"]}`

    }
}

function verificationValueRecomend() {

    if (inputValues[0].value.length > 3) {

        ErroList[0] = "Corrected"
    } else {

        ErroList[0] = "Wrong format, numbers only"
    }

    if (inputValues[3].value.length === 2 && (inputValues[3].value <= daysofMonth[Number(inputValues[2].value) - 1] && inputValues[2].value >= 1 || inputValues[2].value < 1 && inputValues[3].value <= 31)) {

        ErroList[3] = "Corrected"

    }
    else {

        ErroList[3] = "Wrong format, numbers only"
    }

    if (inputValues[2].value < 13 && inputValues[2].value.length === 2) {

        ErroList[2] = "Corrected"

        if (inputValues[3].value > daysofMonth[Number(inputValues[2].value) - 1]) {

            ErroList[3] = "Wrong format, numbers only"

        }

    }
    else {

        ErroList[2] = "Wrong format, numbers only"
    }

    if (inputValues[1].value.length === 16) {

        ErroList[1] = "Corrected"

    }
    else {

        ErroList[1] = "Wrong format, numbers only"
    }

    if (inputValues[4].value.length === 3) {

        ErroList[4] = "Corrected"
    }
    else {

        ErroList[4] = "Wrong format, numbers only"
    }


    for (let i = 0; i < inputValues.length; i++) {


        if (inputValues[i].value.length === 0) {

            ErroList[i] = "Can't be blank"

        } else if (inputValues[i].value.match(/^[a-zA-ZÃ\s]+$/) === null && inputValues[i] === inputValues[0]) {

            ErroList[i] = "Wrong format, numbers only"
            
        } else if (inputValues[i].value.match(/^[0-9]+$/) === null && inputValues[i] !== inputValues[0]) {

            ErroList[i] = "Wrong format, numbers only"

        }

        if (document.getElementById(`input_${i}`)) {

            inputValues[i].style.border = "1px solid #dedede"

            inputValues[i].parentNode.removeChild(document.getElementById(`input_${i}`))
        }
        ErrMsg(i)

    }

    return
}

function ErrMsg(i) {

    if (document.getElementById(`input_${i}`) === null && ErroList[i] !== "Corrected") {

        const Errormsg = document.createElement("span")

        const ErrorText = document.createTextNode(`${ErroList[i]}`)

        Errormsg.appendChild(ErrorText)

        Errormsg.setAttribute("class", `Container_ErrorMsg_${i}`)

        Errormsg.setAttribute("id", `input_${i}`)

        inputValues[i].parentNode.appendChild(Errormsg)


        inputValues[i].style.border = "1px solid red"

    }
    else if (document.getElementById(`input_${i}`) && ErroList[i] === "Corrected") {

        inputValues[i].style.border = "1px solid #dedede"

        inputValues[i].parentNode.removeChild(document.getElementById(`input_${i}`))

    }


    return
}

