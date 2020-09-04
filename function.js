// This code handles the form validation
function validate_form(e){
    e.preventDefault();
    name = document.getElementById('name').value;
    email = document.getElementById('email').value;
    telephone = document.getElementById('telephone').value;
    password = document.getElementById('password').value;

    var output = document.getElementById('message_output');

    // validates if the inputs are empty & if they are it warns you
    if(name == '' || email == ''|| telephone == '' || password == ''){
        output.innerHTML = 'Please fill in information';
    }else{
        var name_len = name.length;
        if (name_len <= 3){
            output.innerHTML = 'Name must be more than 3 chars';
        }else{
            var letter = /^[A-Za-z]+$/;
            if (name.match(letter)){
                return true;
            }else{
                output.innerHTML = 'Name must contain letters only';
            }
        }
    }
}
document.getElementById('my-form').addEventListener('submit', validate_form, false);