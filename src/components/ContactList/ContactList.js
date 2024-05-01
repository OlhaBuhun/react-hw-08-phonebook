import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import {  selectVisibleContacts } from '../../redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  
  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
