const createHome = () => {
    const home = document.createElement('div');
    home.classList.add('home');

    const heading = document.createElement('p');
    heading.innerText = "Gregory's Pizza";

    const subHeading = document.createElement('p');
    subHeading.innerText = "Very Good Pizza!";

    const about = document.createElement('p');
    about.innerHTML = "They make very good pizza! - <small><i>my mum</i></small>";

    home.append(heading, subHeading, about);

    return home;
};

export default createHome;