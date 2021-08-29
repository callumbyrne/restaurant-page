const createContact = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    const name = document.createElement('p');
    name.innerText = "Gregory's Pizza";

    const phone = document.createElement('p');
    phone.innerHTML = "<b>Phone:</b> 123 456 789";

    const address = document.createElement('p');
    address.innerHTML = "<b>Address:</b> Melbourne VIC 3000";

    contact.append(name, phone, address);

    return contact;
};

export default createContact;