// Validation for sign up form:
// This code handles the form validation
function validate_form(e){
    e.preventDefault();
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    telephone = document.getElementById('telephone').value;
    password = document.getElementById('password').value;

    var output = document.getElementById('message_output');
    company = 'Richwalo Shoot'
    // validates if the inputs are empty & if they are it warns you
    if(name == '' || email == ''|| telephone == '' || password == ''){
        output.innerHTML = 'Please fill in information';
    }else{
        var name_len = name.length;
        if (name_len <= 3){
            output.innerHTML = 'Name must be more than 3 chars';
        }else{
            var letter = /^[A-Za-z]+$/;
            if (!name.match(letter)){
                output.innerHTML = 'Name must contain letters only';
            }else{
                number = /^[0-9]+$/;
                if (!telephone.match(number)){
                    output.innerHTML = 'Tel must contain only numbers';
                }else{
                    // pass must contain lower & upper case, a numeric value and special character characters must be from 6 to 15 chars
                    var pswd = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
                    if (!password.match(pswd)){
                        output.innerHTML = 'low & uppercase with special and digits for password';
                    }else{
                        // email validation using regular expression
                        var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        if (!email.match(mail)){
                            output.innerHTML = 'Enter valid email';
                        }else{
                            output.innerHTML = 'Submitted Successfully to' + company;
                            window.location.reload(10000);
                            return true;
                        }
                    }
                }
            }
        }
    }
}
document.getElementById('my-form').addEventListener('submit', validate_form, false);
