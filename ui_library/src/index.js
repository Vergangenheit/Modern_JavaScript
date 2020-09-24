//we will import modules from ninja-ui
import Tooltip from './ninja-ui/tooltip.js';
import Dropdown from './ninja-ui/dropdown.js';
import Tabs from './ninja-ui/tabs.js';
import Snackbar from './ninja-ui/snackbar.js';

//create an instance of tooltip
const tooltip = new Tooltip(document.querySelector('.tooltip'));
tooltip.init();

//create two dropdowns for the two div tags
const dropdowns = document.querySelectorAll('.dropdown');

//cycle through the list and create a new ddown instance
dropdowns.forEach(dropdown => {
    const instance =  new Dropdown(dropdown);
    instance.init();
});

//create tabs
const tabs = new Tabs(document.querySelector('.tabs'));
tabs.init();

//create snackbar
const snackbar = new Snackbar();
snackbar.init();

//I want to call the show method when I click the button
//let's add event listener
const button = document.querySelector('.snackbar-trigger');
button.addEventListener('click', () => {
    snackbar.show('you clicked me :)');
});


