import logo from './pizza-logo.png';

const createNav = () => {
    const header = document.createElement('div');
    header.classList.add('nav');

    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    homeButton.setAttribute('id', 'home');
    menuButton.setAttribute('id', 'menu');
    contactButton.setAttribute('id', 'contact');
    homeButton.innerText = 'Home';
    menuButton.innerText = 'Menu';
    contactButton.innerText = 'Contact';

    const myLogo = new Image();
    myLogo.src = logo;

    header.append(myLogo, homeButton, menuButton, contactButton);

    return header;
};

export default createNav;