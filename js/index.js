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

function VerificationForm() {
    const ErroList = [
        "Correct",
        "Current",
        "Correct",
        "Current",
        "Correct"

    ]
    const inputValues = document.querySelectorAll("input")

    for (let i = 0; i < inputValues.length; i++) {

        if (inputValues[i].value === '') {
            inputValues[i].style.border = "1px solid red"
            ErroList[i] = "Can't be blank"

            const Errormsg = document.createElement("span")
            const ErrorText = document.createTextNode(`${ErroList[i]}`)
            Errormsg.appendChild(ErrorText)
            Errormsg.setAttribute("class", "Container_ErrorMsg")
            Errormsg.setAttribute("id", `input_${i}`)
            inputValues[i].parentNode.appendChild(Errormsg)
        }
        else
        {
            inputValues[i].parentNode.removeChild(document.getElementById(`input_${i}`))
            inputValues[i].style.border = "1px solid  hsl(270, 3%, 87%)"
        }

        console.log(ErroList.indexOf("Incorrect"));
    }


    console.log(ErroList.indexOf("Incorrect"));

    if (ErroList.indexOf("Can't be blank") === -1) {
        return CreaterContainerConfirmation()
    }


}

