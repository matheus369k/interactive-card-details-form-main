function verification(){

    /*coleta de informação*/

    const name = document.getElementById('iname');
    const cardNumber = document.getElementById('icard-number');
    const day = document.getElementById('iday');
    const month = document.getElementById('imonth');
    const cvc = document.getElementById('cvcNumber');

    let nameValue = name.value;
    let cardNumberValue = cardNumber.value
    let dayValue = day.value
    let monthValue = month.value
    let cvcValue = cvc.value

    let cardNumberValueNumber = Number(cardNumber.value)
    let dayValueNumber = Number(day.value)
    let monthValueNumber = Number(month.value)
    let cvcValueNumber = Number(cvc.value)

    let nameLength = (name.value).length
    let cardNumberLength = (cardNumber.value).length
    let dayLength = (day.value).length
    let monthLength = (month.value).length
    let cvcLength = (cvc.value).length

    var erro = 0
    var format = 'Wrong format'
    var number = 'Wrong format, numbers only'
    var blank = 'Can `t be blank'

    /*verificação*/



    if(nameValue=='' || nameLength!=3){
        if (nameValue == ''){
            name.style.border = '1px solid red'
            document.getElementById('msg-name').innerHTML = `${blank}`

        }else{
            document.getElementById('msg-name').innerHTML = ''
            name.style.border = ''

            if(30>nameLength<=2){
                name.style.border = '1px solid red'
                document.getElementById('msg-name').innerHTML = `${format}`

            }else{
                document.getElementById('msg-name').innerHTML = ''
                name.style.border = ''
            }
        }
        var erro=+1
    }else{
        document.getElementById('msg-name').innerHTML = ''
        name.style.border = ''}

    
    if(cardNumberValue=='' || isNaN(cardNumberValueNumber) || cardNumberLength!=16){
        if (cardNumberValue == ''){
            document.getElementById('msg-card-number').innerHTML = `${blank}`

        }else{
            document.getElementById('msg-card-number').innerHTML = ``
            cardNumber.style.border = ''
        
            if (isNaN(cardNumberValueNumber)){
                document.getElementById('msg-card-number').innerHTML = `${number}`
                cardNumber.style.border = '1px solid red'

            }else{
                document.getElementById('msg-card-number').innerHTML = ``
                cardNumber.style.border = ''
            
                if(cardNumberLength!=16){
                    document.getElementById('msg-card-number').innerHTML = `${format}`
                    cardNumber.style.border = '1px solid red'
                    
                }else{
                    document.getElementById('msg-card-number').innerHTML = ``
                    cardNumber.style.border = ''}
            }
        }
        var erro=+1
    }else{
        document.getElementById('msg-card-number').innerHTML = ''
        name.style.border = ''}



    if(monthValue=='' || isNaN(monthValueNumber) || monthLength!=2){
        if(monthValue == ''){
            month.style.border = '1px solid red'

        }else{
            month.style.border = ''

            if(isNaN(monthValueNumber)){
                month.style.border = '1px solid red'

            }else{
                month.style.border = ''

                if(monthLength!=2){
                    month.style.border = '1px solid red'

                }else{month.style.border = ''}
            }
        }
        var erro=+1
    }else{
        document.getElementById('msg-month').innerHTML = ''
        month.style.border = ''}



    if(dayValue=='' || monthValue=='' || isNaN(dayValueNumber) || isNaN(monthValueNumber) || dayLength!=2 || monthLength!=2){
        if (dayValue == ''|| monthValue == ''){
            document.getElementById('msg-month').innerHTML = `${blank}`

        }else{
            document.getElementById('msg-month').innerHTML = ``

            if(isNaN(monthValueNumber) || isNaN(dayValueNumber)){
                document.getElementById('msg-month').innerHTML = `${number}`

            }else{
                document.getElementById('msg-month').innerHTML = ``

                if(monthLength!=2 || dayLength!=2){
                    document.getElementById('msg-month').innerHTML = `${format}`

                }else{document.getElementById('msg-month').innerHTML = ``}
            }
        }
        var erro=+1
    }else{document.getElementById('msg-month').innerHTML = ''}


    if(dayValue=='' || isNaN(dayValueNumber) || dayLength!=2){
        if (dayValue == ''){
            day.style.border = '1px solid red'
            
        }else{
            day.style.border = ''

            if (isNaN(dayValueNumber)){
                day.style.border = '1px solid red'

            }else{
                day.style.border = ''

                if(dayLength!=2){
                    day.style.border = '1px solid red'

                }else{day.style.border = ''}
            }
        }
        var erro=+1
    }else{day.style.border = ''}


    if(cvcValue=='' || isNaN(cvcValueNumber) || cvcLength!=3){
        if (cvcValue == ''){
            document.getElementById('msg-cvc').innerHTML = `${blank}`
            cvc.style.border = '1px solid red'

        }else{
            document.getElementById('msg-cvc').innerHTML = ``
            cvc.style.border = ''
            
            
            if (isNaN(cvcValueNumber)){
                document.getElementById('msg-cvc').innerHTML = `${number}`
                cvc.style.border = '1px solid red'

            }else{
                document.getElementById('msg-cvc').innerHTML = ``
                cvc.style.border = ''


                if(cvcLength!=3){
                    document.getElementById('msg-cvc').innerHTML = `${format}`
                    cvc.style.border = '1px solid red'

                }else{
                    document.getElementById('msg-cvc').innerHTML = ``
                    cvc.style.border = ''}
            }
        }
    }else{
        document.getElementById('msg-cvc').innerHTML = ''
        name.style.border = ''}
    return erro
}

function buttonClick(){
    const button = document.getElementById('button');
 
    if (verification() == 0){
        const confirm = document.getElementById('concluded');
        const register = document.getElementById('register');

        if (confirm.classList.contains("confirm-on")){

            window.location.reload()

        }else{
            confirm.classList.replace('confirm-off','confirm-on')
            register.classList.replace('register-on','register-off')
        }
    }
}
