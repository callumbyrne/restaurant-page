const createNav = () => {
    const content = document.querySelector('#content');
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

    header.append(homeButton, menuButton, contactButton);
    content.appendChild(header);
};

export default createNav;