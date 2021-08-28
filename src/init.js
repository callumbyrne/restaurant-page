import createHeader from './header';
import createFooter from './footer';
import createHome from './home';

const init = () => {
    createHeader();
    createHome();
    createFooter();
};

export default init;