import { getContacts } from 'redux/selectors';
import { addContact } from '../../redux/sliceContact.js';
import { useDispatch, useSelector } from 'react-redux';
import s from './ContactForm.module.css';
import PropTypes from 'prop-types';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    form.reset();

    if (!name || !number) {
      alert('Please fill in all the fields!');
      return false;
    }

    if (contacts && contacts.find(contact => contact.name === name)) {
      alert(`${name} this contact already exists`);
      return false;
    }
    if (contacts && contacts.find(contact => contact.number === number)) {
      alert(`this number already exists`);
      return false;
    }

    dispatch(addContact(name, number));
    return true;
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input className={s.input} type="text" name="name" />
      </label>
      <label>
        Number
        <input className={s.input} type="text" name="number" />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.object,
};

export default ContactForm;
