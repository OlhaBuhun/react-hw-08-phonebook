import {  useDispatch, useSelector } from "react-redux"
import { addContact } from "../../redux/contacts/operations";
import { selectAllContacts } from "../../redux/contacts/selectors";
import { Button, FormLabel, Input, Text,} from "@chakra-ui/react";
// import { CheckIcon, PhoneIcon } from "@chakra-ui/icons";
// import { Form } from "react-router-dom";
// import { PiBookOpenTextFill } from 'react-icons/pi';

export const ContactForm = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const formName = event.target[0].value;
    const formPhone = event.target[1].value;

    if (contacts.some(({ name }) => name === formName)) {
      console.log('not name');
      return form.reset();
    }

    if (contacts.some(({ number }) => number === formPhone)) {
      console.log('not phone');
      return form.reset();
    }
    dispatch(addContact({ name: formName, number: formPhone }));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Text fontSize='22px'>
        Add a contact
      </Text>
      <FormLabel mb="12px">
        Name
        <Input
          type="text"
          value={contacts.name}
          placeholder="name"
          variant="filled"
          bg="#f0eafb"
          boxShadow='dark-lg'
        />
      </FormLabel>
      <FormLabel mb="12px">
        Number
        <Input
          type="tel"
          value={contacts.number}
          placeholder="phone number"
          variant="filled"
          bg="#f0eafb"
          boxShadow='dark-lg'
        />
      </FormLabel>
      <Button
        type="submit"
        colorScheme="purple"
        variant="solid"
        size="sm"
        _hover={{ bg: '#808000' }}
        _active={{
          bg: '#dddfe2',
          transform: 'scale(0.98)',
          borderColor: '#bec3c9',
        }}
        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
        }}
      >
        ADD
      </Button>
    </form>
  );
};


