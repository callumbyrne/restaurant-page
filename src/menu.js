const createMenu = () => {
    const menu = document.createElement('div');
    menu.classList.add('menu');

    for (let i = 1; i < 10; i++) {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menuItem');
        const name = document.createElement('p');
        name.innerText = `Pizza ${i}`;
        const price = document.createElement('p');
        price.innerText = "$24";

        menuItem.append(name, price);
        menu.appendChild(menuItem);
    };

    return menu;
};

export default createMenu;