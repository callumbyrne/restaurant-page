const createFooter = () => {
    const content = document.querySelector('#content');
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = "&#10084;&#65039;"

    content.appendChild(footer);
};

export default createFooter;