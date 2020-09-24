import './styles/dropdown.css';

class Dropdown{
    constructor(container){
        //the container is our div dropdown 
        this.container = container;
        this.trigger = this.container.querySelector('.trigger');
        this.content = this.container.querySelector('.content');
    }
    init(){
        //show and hide the content when user click on the trigger
        this.trigger.addEventListener('click', () => {
            this.trigger.classList.toggle('active');
            this.content.classList.toggle('active');
        });
    }
}

export {Dropdown as default};