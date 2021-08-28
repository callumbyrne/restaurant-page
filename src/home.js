const createHome = () => {
    const content = document.querySelector('#content');
    const home = document.createElement('div');
    home.classList.add('home');
    home.innerText = "Very Good Pizza!";

    content.appendChild(home);
};

export default createHome;