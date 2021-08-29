import createContact from './contact';
import createFooter from './footer';
import createHome from './home';
import init from './init';
import createMenu from './menu';
import createNav from './nav';
import './styles.css';

document.addEventListener('DOMContentLoaded', init());

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');
const content = document.querySelector('#content');

homeButton.addEventListener('click', () => {
    content.removeChild(content.childNodes[1]);
    content.insertBefore(createHome(), content.childNodes[1]);
});

menuButton.addEventListener('click', () => {
    content.removeChild(content.childNodes[1]);
    content.insertBefore(createMenu(), content.childNodes[1]);
});

contactButton.addEventListener('click', () => {
    content.removeChild(content.childNodes[1]);
    content.insertBefore(createContact(), content.childNodes[1]);
});