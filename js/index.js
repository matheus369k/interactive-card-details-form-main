
/*Verificar os dados inseridos.*/
function verification(){

    /*coleta de informação*/

    const name = document.getElementById('iname');
    const cardNumber = document.getElementById('icard-number');
    const day = document.getElementById('iday');
    const month = document.getElementById('imonth');
    const cvc = document.getElementById('cvcNumber');

    let nameValue = name.value
    let cardNumberValue = (cardNumber.value)
    let dayValue = day.value
    let monthValue = month.value
    let cvcValue = cvc.value

    let dayValueNumber = Number(dayValue)
    let monthValueNumber = Number(monthValue)
    let cvcValueNumber = Number(cvcValue)

    let nameLength = nameValue.length
    let dayLength = dayValue.length
    let monthLength = monthValue.length
    let cvcLength = cvcValue.length

    var erro = 0
    var format = 'Wrong format'
    var number = 'Wrong format, numbers only'
    var blank = 'Can `t be blank'

    /*verificação*/



    /*- formatação dos numeros do cartão.*/
    var spaceremove = cardNumberValue
    if (cardNumberValue[4] == ' '){
        spaceremove = spaceremove.replace(' ','')
    }
    if (cardNumberValue[9] == ' '){
       spaceremove = spaceremove.replace(' ','')
    }
    if (cardNumberValue[14] == ' '){
       spaceremove = spaceremove.replace(' ','')
    }
    let cardNumberValueNumber = Number(spaceremove)
    let cardNumberLength = spaceremove.length

    

    /*- Verificação do Nome.*/
    if(nameValue=='' ||nameLength<3 || nameLength>30){
        name.style.border = '1px solid red'
        var erro=+1

        if (nameValue == ''){
            name.style.border = '1px solid red'
            document.getElementById('msg-name').innerHTML = `${blank}`

        }else{if(nameLength<3 || nameLength>30){
                document.getElementById('msg-name').innerHTML = `${format}`
        }   }                
    }else{
        document.getElementById('msg-name').innerHTML = ''
        name.style.border = ''}



    /*- Verificação do Numero do cartão.*/
    if(cardNumberValue=='' || isNaN(cardNumberValueNumber) || cardNumberLength!=16){
        cardNumber.style.border = '1px solid red'
        var erro=+1

        if (cardNumberValue == ''){
            document.getElementById('msg-card-number').innerHTML = `${blank}`

        }else{if (isNaN(cardNumberValueNumber)){
                document.getElementById('msg-card-number').innerHTML = `${number}`
            }else{if(cardNumberLength != 16){
                    document.getElementById('msg-card-number').innerHTML = `${format}`    
        }   }   }
    }else{
        document.getElementById('msg-card-number').innerHTML = ''
        cardNumber.style.border =''}



    /*- Verificação do mês.*/
    if(monthValue=='' || isNaN(monthValueNumber) || monthLength != 2 || monthValueNumber>12 || monthValueNumber<1){
        month.style.border ='1px solid red'
        var erro=+1
    } else{
        document.getElementById('msg-month').innerHTML = ''
        month.style.border = ''}



    /*- Verificação do mês e di.a*/
    if(dayValue=='' || monthValue=='' || isNaN(dayValueNumber) || isNaN(monthValueNumber) || dayLength!=2 || monthLength!=2 || dayValueNumber>31 || dayValueNumber<1 || monthValueNumber>12 || monthValueNumber<1){
        var erro=+1

        if (dayValue == ''|| monthValue == ''){
            document.getElementById('msg-month').innerHTML = `${blank}`

        }else{if(isNaN(monthValueNumber) || isNaN(dayValueNumber)){
                document.getElementById('msg-month').innerHTML = `${number}`

            }else{if(monthLength!=2 || dayLength!=2|| dayValueNumber>31 || dayValueNumber<1 || monthValueNumber>12 || monthValueNumber<1){
                    document.getElementById('msg-month').innerHTML = `${format}`
        }   }   }
    }else{document.getElementById('msg-month').innerHTML = ''}

    /*- Verificação do dia.*/
    if (dayValue =='' || isNaN(dayValueNumber) || dayLength !=2 || dayValueNumber>31 || dayValueNumber<1){
        day.style.border ='1px solid red'
        var erro=+1
    }else{day.style.border = ''}

    
    /*- Verificação do cvc.*/
    if (cvcValue=='' || isNaN(cvcValueNumber) || cvcLength!=3){
        cvc.style.border ='1px solid red'
        var erro=+1
        if (cvcValue ==''){
            document.getElementById('msg-cvc').innerHTML = `${blank}`
        }else{ if (isNaN(cvcValueNumber)){
                document.getElementById('msg-cvc').innerHTML = `${number}`
            }else{ if(cvcLength != 3){
                    document.getElementById('msg-cvc').innerHTML = `${format}`
        }   }   }
    }else{
        document.getElementById('msg-cvc').innerHTML = ''
        cvc.style.border = ''}

    return erro
}

/*Vrificar o click no botão 'comfirmar'.*/
function buttonClick(){
    const button = document.getElementById('button');
 
    if (verification() == 0){
        const confirm = document.getElementById('concluded');
        const register = document.getElementById('register');

        if (confirm.classList.contains("confirm-on")){
            window.location.reload();

        }else{
            confirm.classList.replace('confirm-off','confirm-on')
            register.classList.replace('register-on','register-off')
}   }   }


/*Adcionar os dados nos cartões que estão acima.*/
function addInformCards(){   
    
    if(verification() == 0){
        
        let nameValue = document.getElementById('iname').value
        let cardNumberValue = document.getElementById('icard-number').value
        let dayValue = document.getElementById('iday').value
        let monthValue = document.getElementById('imonth').value
        let cvcValue = document.getElementById('cvcNumber').value

        var spaceremove = cardNumberValue
        if (cardNumberValue[4] == ' '){
            spaceremove = spaceremove.replace(' ','')
        }
        if (cardNumberValue[9] == ' '){
        spaceremove = spaceremove.replace(' ','')
        }
        if (cardNumberValue[14] == ' '){
        spaceremove = spaceremove.replace(' ','')
        }
        let cardNumberValueNumber = spaceremove

        document.getElementById('name-data-card').innerHTML = `${nameValue}`


        for(var c = 0; c < 16; c++){
            if (c==0){
                document.getElementById('number-card-date-card').innerHTML = ``
            }

            if (c== 4 || c == 8 || c == 12){
                document.getElementById('number-card-date-card').innerHTML += ` `
            }
            document.getElementById('number-card-date-card').innerHTML += `${cardNumberValueNumber[c]}`
            
        }
        document.getElementById('date-data-card').innerHTML = `${monthValue}/${dayValue}`
        document.getElementById('cvc-data-card').innerHTML = `${cvcValue}`
    }
}
