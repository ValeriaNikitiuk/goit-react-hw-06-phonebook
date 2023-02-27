import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { getContacts, getFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { ContactsRemove } from 'components/ContactsRemove/ContactsRemove';

const ContactList = () => {
  const contactsData = useSelector(getContacts);
  const { input } = useSelector(getFilter);
  const contacts = contactsData;

  if (!contacts || !Array.isArray(contacts)) {
    return null;
  }

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <ul className={s.listContact}>
      {visibleContacts.map(contact => (
        <li className={s.listItem} key={contact.id}>
          {contact.name + ':' + contact.number}
          <ContactsRemove contact={contact} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.object,
  input: PropTypes.string,
};

export default ContactList;
