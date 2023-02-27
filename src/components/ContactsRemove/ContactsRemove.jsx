import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/sliceContact';
import s from './contactsRemove.module.css';

export const ContactsRemove = ({ contact }) => {
  const dispatch = useDispatch();

  const hendleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <>
      <button className={s.listButton} type="button" onClick={hendleDelete}>
        Delete
      </button>
    </>
  );
};

ContactsRemove.propTypes = {
  contact: PropTypes.object,
};
