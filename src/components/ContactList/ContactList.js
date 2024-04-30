import { useSelector } from "react-redux";
import { selectAllContacts } from "../../redux/contacts/selectors";
import { Contact } from "components/Contact/Contact";

export const ContactList = () => {
 
  const contacts = useSelector(selectAllContacts);
  
  return (
    <ul>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};