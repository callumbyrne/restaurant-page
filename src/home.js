const createHome = () => {
    const home = document.createElement('div');
    home.classList.add('home');
    home.innerText = "Very Good Pizza!";

    return home;
};

export default createHome;