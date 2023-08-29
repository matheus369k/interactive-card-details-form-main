function verificationBlank(){


    /*coleta de informação*/

    const button = document.getElementById('button');
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

    /*verificação se esta em branco*/
   


    if((nameValue && cardNumberValue && dayValue && monthValue && cvcValue)==''){

    var blank = 'Can `t be blank'
    if (nameValue == ''){
        document.getElementById('msg-name').innerHTML = `${blank}`
    }else(document.getElementById('msg-name').innerHTML = '')

    if (cardNumberValue == ''){
        document.getElementById('msg-card-number').innerHTML = `${blank}`
    }else(document.getElementById('msg-card-number').innerHTML = ``)

    if (dayValue == ''|| monthValue == ''){
        document.getElementById('msg-month').innerHTML = `${blank}`
    }else(document.getElementById('msg-month').innerHTML = ``)

    if (cvcValue == ''){
        document.getElementById('msg-cvc').innerHTML = `${blank}`
    }else(document.getElementById('msg-cvc').innerHTML = ``)
    
        return 'incomplet'
    }
}

function buttonClick(){
    const button = document.getElementById('button');
    var situation = verificationBlank()
 
    if (situation == undefined){
        const confirm = document.getElementById('concluded');
        const register = document.getElementById('register');

        if (confirm.classList.contains("confirm-on")){

            confirm.classList.replace('confirm-on','confirm-off')
            register.classList.replace('register-off','register-on')

        }else{

            confirm.classList.replace('confirm-off','confirm-on')
            register.classList.replace('register-on','register-off')
        }
    }
}
