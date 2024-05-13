import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';
import {  selectVisibleContacts } from '../../redux/contacts/selectors';
import {
  List,
  ListItem,
  Box,
  Text,
} from '@chakra-ui/react';
// import { CheckCircleIcon } from '@chakra-ui/icons';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <Box>
      <Text fontSize='22px'>
        List of contacts
      </Text>
      <List spacing="20px" pt="24px">
        {contacts.map(contact => (
          <ListItem key={contact.id} spacing="20px">
            <Contact contact={contact} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
