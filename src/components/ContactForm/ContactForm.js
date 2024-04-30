import { useDispatch, useSelector } from "react-redux"
import { addContact } from "../../redux/contacts/operations";
import { selectAllContacts } from "../../redux/contacts/selectors";

export const ContactForm = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const formName = form.elements.name.value;
    const formPhone = form.elements.number.value;
   
    if (contacts.some(({ name }) => name === formName)) {
      console.log("not name");
      return form.reset();
    }

    if (contacts.some(({ number }) => number === formPhone)) {
      console.log("not phone");
      return form.reset();
    }
    dispatch(addContact({name: formName, number: formPhone}));
    form.reset();
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input type="text" name="name" value={contacts.name} required/>
      </label>
      <label htmlFor="name">
      Number
        <input type="tel" name="number" value={contacts.number} required/>
      </label>
      <button type="submit">Add contact</button>
    </form>
  )
}