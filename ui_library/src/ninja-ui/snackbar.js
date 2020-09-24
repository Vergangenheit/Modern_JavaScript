import './styles/snackbar.css';

class Snackbar{
    constructor(){
        //create a new element to be the snackbar
        this.snackbar = document.createElement('div');
    }
    init(){
        //add a class so we can style it
        this.snackbar.classList.add('snackbar');

        //append this element to the body tag inside the dom
        document.querySelector('body').appendChild(this.snackbar);
    }
    show(message){
        //shows a message in the snackbar at the top
        this.snackbar.textContent = message;
        this.snackbar.classList.add('active');
        //we only want to show it for few seconds
        setTimeout(() => {
            this.snackbar.classList.remove('active');
            this.snackbar.textContent = '';
        }, 4000);
    }
}

export {Snackbar as default};