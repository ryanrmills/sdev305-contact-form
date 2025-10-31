let submitButton = document.getElementById('submit-form-button');
let meetupDropdown = document.getElementById('meetup-dropdown');
let mailingCheckbox = document.getElementById('mailing-checkbox');
let emailInput = document.getElementById('email-input');

mailingCheckbox.addEventListener('change', (e) => {
    if (e.target.checked){
        document.getElementById('choose-email-format').style.display = 'flex';
        emailInput.classList.add('required');
        

    }
    if (!e.target.checked){
        if (emailInput.classList.contains('required')){
            emailInput.classList.remove('required');
            emailInput.classList.remove('input_required_error')
        }
        document.getElementById('choose-email-format').style.display = 'none';
    }
})

meetupDropdown.addEventListener('change', (e) => {
    if (e.target.value === 'Other'){
        document.getElementById('top2-input').style.display = 'flex';
        document.getElementById('other-meetup-input').classList.add('required');
    } else {
        document.getElementById('top2-input').style.display = 'none';
        if (document.getElementById('other-meetup-input').classList.contains('required')){
            document.getElementById('other-meetup-input').classList.remove('required');
            document.getElementById('other-meetup-input').classList.remove('input_required_error');
        }
    }   
})




function linkedInCheck(value){
    // if (document.getElementById('linkedIn_input_field').value.trim() === '' && meetupDropdown.value === 'LinkedIn') {
    //     document.getElementById('linkedIn-error').style.opacity = '100%';
    //     document.getElementById('linkedIn_input_field').style.border = '1px solid red';
    // } else {
    //     document.getElementById('linkedIn-error').style.opacity = '0%';
    // }

    if (value === '' && meetupDropdown.value === 'LinkedIn') {
        document.getElementById('linkedIn-error').style.opacity = '100%';
        document.getElementById('linkedIn_input_field').style.border = '1px solid red';
    } else {
        document.getElementById('linkedIn-error').style.opacity = '0%';
    }

    if (value.substring(0, 24) !== "https://linkedin.com/in/" && value !== ''){
        document.getElementById('linkedIn-error').style.opacity = '100%';
        document.getElementById('linkedIn_input_field').style.border = '2px solid red';
        return false;
    } else {
        document.getElementById('linkedIn-error').style.opacity = '0%';
        document.getElementById('linkedIn_input_field').style.border = '1px solid black';
        return true;
    }

    
}

function emailCheck(value){
    let valueArr = Array.from(value);
    if (!valueArr.includes('@') && !valueArr.includes('.') && value !== ''){
        document.getElementById('email-input-error-message').style.opacity = '100%';
        return false;
    }  else {
        document.getElementById('email-input-error-message').style.opacity = '0%';

    }
    
    // else if (emailInput.classList.contains('required') && emailInput.classList.contains('required')){

    // }
}








function submitChecks(){
    let check = true;

    

    linkedInCheck(document.getElementById('linkedIn_input_field').value.trim());

    emailCheck(document.getElementById('email-input').value.trim());

    const listOfTopInputs = document.querySelectorAll('.required');


    listOfTopInputs.forEach((input) => {
        if (input.value === '') {
            input.classList.add('input_required_error');
            check = false;
        } else {
            if (input.classList.contains('input_required_error')){
                input.classList.remove('input_required_error');
            }
        }
    });
    console.log(check)
    return check;
}


submitButton.onclick = (e) => {
    
    let didItPass = submitChecks();
    return didItPass;
}