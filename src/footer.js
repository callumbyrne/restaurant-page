const createFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = "&#10084;&#65039;"

    return footer;
};

export default createFooter;