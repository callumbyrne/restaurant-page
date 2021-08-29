import createNav from './nav';
import createFooter from './footer';
import createHome from './home';

const init = () => {
    const content = document.querySelector('#content');
    content.append(createNav(), createHome(), createFooter());
};

export default init;