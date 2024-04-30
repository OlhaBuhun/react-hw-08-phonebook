import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export const Contact = ({contact}) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li>
      <p>
        {contact.name}: {contact.number}
      </p>
      <button type="button" onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};