import './styles/tooltip.css';

class Tooltip{
    constructor(element){
        //it will be the span tag
        this.element = element;
        this.message = element.getAttribute('data-message');
    }
    init(){
        //create the tag that we can hover over
        const tip = document.createElement('div');
        tip.classList.add('tip');
        tip.textContent = this.message;
        //append to the span tag
        this.element.appendChild(tip);

        //we need to attach an event listener for the mouse hovering
        this.element.addEventListener('mouseenter', () => {
            tip.classList.add('active');
        });

        this.element.addEventListener('mouseleave', () => {
            tip.classList.remove('active');
        });
    }
}

export {Tooltip as default};