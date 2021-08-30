import logo from './pizza-logo.png';

const createNav = () => {
    const nav = document.createElement('div');
    nav.classList.add('nav');
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('buttonDiv');

    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    homeButton.setAttribute('id', 'home');
    menuButton.setAttribute('id', 'menu');
    contactButton.setAttribute('id', 'contact');
    homeButton.innerText = 'Home';
    menuButton.innerText = 'Menu';
    contactButton.innerText = 'Contact';

    buttonDiv.append(homeButton, menuButton, contactButton);

    const myLogo = new Image();
    myLogo.src = logo;
    myLogo.setAttribute('id', 'logo');

    nav.append(myLogo, buttonDiv);

    return nav;
};

export default createNav;