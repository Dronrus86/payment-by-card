const input = document.querySelectorAll('.input');
const inpCartNumber = document.querySelector('.inp_cart_number ');
const backCardDate = document.querySelector('.back_card_date ');
const inpBackCardFullName = document.querySelector('.inp_back_card_fullName');


const frontCardNumberText = document.querySelector('.front_card_number_text');
const frontCardFullName = document.querySelector('.front_card_fullName');
const frontCardValidResult = document.querySelector('.front_card_valid_result');


const imgCard = document.querySelector('.img_card');


const code = document.querySelector('.code')

input.forEach((event) => {
    event.addEventListener('input', () => {

        inpCartNumber.value !== '' && inpBackCardFullName.value !== '' && backCardDate.value !== '' ? btnSubmit.disabled = false : btnSubmit.disabled = true;
        if (inpBackCardFullName.value === '') {
            frontCardFullName.innerHTML = "DUPONT";
        } else {
            frontCardFullName.innerHTML = inpBackCardFullName.value;
        }
        if (inpCode.value === '') {
            code.innerHTML = '• • •'
        } else {
            code.innerHTML = inpCode.value;
        }

        const frontCardContainer = document.querySelector('#front_card_container');
        switch (inpCartNumber.value[0]) {
            case '5':
                frontCardContainer.style.backgroundColor = '#0061A8'
                imgCard.src = "img/Mastercard_icon-icons.com_60554.png";
                break;

            case '4':
                frontCardContainer.style.backgroundColor = '#191278'
                imgCard.src = "img/visa.png";
                break;

            case '3':
                frontCardContainer.style.backgroundColor = '#191278'
                break;

            default:
                frontCardContainer.style.backgroundColor = '#DDD'
        }


    })
});


const inpNumber = document.querySelector('.inp_number');
inpNumber.addEventListener('input', () => {
    let num = inpNumber.value.replace(/(\d)(?=(\d{4})+$)/g, '$1 ');
    if (inpNumber.value === '') {
        frontCardNumberText.innerHTML = "•••• •••• •••• ••••";
        imgCard.src = "";
    } else {
        frontCardNumberText.innerHTML = num;
    }
    if (inpNumber.value.length >= 16) {
        inpNumber.style["boxShadow"] = "inset 0px 0px 3px 0.3px green";
    } else if (inpNumber.value.length <= 15 && inpNumber.value.length >= 1) {
        inpNumber.style["boxShadow"] = "inset 0px 0px 3px 0.3px red";
    } else {
        inpNumber.style["boxShadow"] = "none"
    }
});

const inpDate = document.querySelector('.inp_date');
inpDate.addEventListener('input', () => {
    let date = inpDate.value.replace(/(\d)(?=(\d{2})+$)/g, '$1/');
    if (inpDate.value === '') {
        frontCardValidResult.innerHTML = "••/••";

    } else {
        frontCardValidResult.innerHTML = date;
    }

    if (inpDate.value.length >= 4) {
        inpDate.style["boxShadow"] = "inset 0px 0px 3px 0.3px green";
    } else if (inpDate.value.length <= 3 && inpDate.value.length >= 1) {
        inpDate.style["boxShadow"] = "inset 0px 0px 3px 0.3px red";
    } else {
        inpDate.style["boxShadow"] = "none";
    }
});

const inpFullName = document.querySelector('.inp_fullName');
inpFullName.addEventListener('input', () => {
    if (inpFullName.value.length >= 10) {
        inpFullName.style["boxShadow"] = "inset 0px 0px 3px 0.3px green";
    } else if (inpFullName.value.length <= 9 && inpFullName.value.length >= 1) {
        inpFullName.style["boxShadow"] = "inset 0px 0px 3px 0.3px red";
    } else {
        inpFullName.style["boxShadow"] = "none";
    }
});

const inpCode = document.querySelector('.inp_code');
inpCode.addEventListener('input', () => {
    if (inpCode.value.length >= 3) {
        inpCode.style["boxShadow"] = "inset 0px 0px 3px 0.3px green";
    } else if (inpCode.value.length <= 2 && inpCode.value.length >= 1) {
        inpCode.style["boxShadow"] = "inset 0px 0px 3px 0.3px red";
    } else {
        inpCode.style["boxShadow"] = "none";
    }
});

const btnSubmit =document.querySelector('.btn_submit');
function submit() {
        btnSubmit.addEventListener('click',()=>{
            if(btnSubmit.disabled === false) {
                alert('Платеж отправлен!');
            }
        })

}
submit();