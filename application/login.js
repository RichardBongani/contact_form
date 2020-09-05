// Validation for Login Form:
function login(e){
    e.preventDefault();
    emaill = document.getElementById('emaillog').value;
    passwordl = document.getElementById('passwordlog').value;

    var logoutput  = document.getElementById('log_output');

    if (emaill == '' || passwordl == ''){
        logoutput.innerHTML = 'Please enter details';
    }else{
        var mailer = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!emaill.match(mailer)){
            logoutput.innerHTML = 'Enter valid email';
        }else{
            var paslog = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
            if (!passwordl.match(paslog)){
                logoutput.innerHTML = 'Enter valid password format';
            }else{
                window.location = "home.html";
            }
        }
    }
}
document.getElementById('loggin').addEventListener('submit', login, false);