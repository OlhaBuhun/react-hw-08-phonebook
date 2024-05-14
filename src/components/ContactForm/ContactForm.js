import {  useDispatch, useSelector } from "react-redux"
import { addContact } from "../../redux/contacts/operations";
import { selectAllContacts } from "../../redux/contacts/selectors";
import { Button, Input, Text, useToast} from "@chakra-ui/react";

export const ContactForm = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const toast = useToast()

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const formName = event.target[0].value;
    const formPhone = event.target[1].value;

    if (contacts.some(({ name }) => name === formName)) {
      toast({
        title: 'Warning!',
        description: 'This contact is already there.',
        status: 'warning',
        duration: 9000,
        isClosable: true,
      });
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
        <Input
          type="text"
          value={contacts.name}
          placeholder="Name"
          variant="filled"
          bg="#f0eafb"
          boxShadow='dark-lg'
          mb='12px'
        />
        <Input
          type="tel"
          value={contacts.number}
          placeholder="Phone number"
          variant="filled"
          bg="#f0eafb"
          boxShadow='dark-lg'
          mb='12px'
        />
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


