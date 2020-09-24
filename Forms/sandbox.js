const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(form.username.value);


// testing RegEx
const username = form.username.value;

if(usernamePattern.test(username)){
    feedback.textContent = 'the username is valid';
} else {
    feedback.textContent = 'username must contain letters or be within 6 to 12 letters';
}
});

// livefeedback
form.username.addEventListener('keyup', e => {

    console.log(e);
    
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});