import { useDispatch } from "react-redux";
import { MdCheckCircle } from 'react-icons/md'
import { Box, Button, Flex, Icon, Text } from '@chakra-ui/react'
import { deleteContact } from "../../redux/contacts/operations";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <Box maxW="1200px" bg="#f0eafb" borderRadius='6px' boxShadow='dark-lg'>
      <Flex justifyContent='space-between' alignItems="center" gap="12px" ml='6px'>
        <Icon as={MdCheckCircle} color="purple.500" w="22px" h="22px" />
        <Text fontSize="16px">
          {contact.name}: {contact.number}
        </Text>
        <Button
          colorScheme="purple"
          variant="solid"
          size="sm"
          _hover={{ bg: '#808000', }}
          _active={{
            bg: '#dddfe2',
            transform: 'scale(0.98)',
            borderColor: '#bec3c9',
          }}
          _focus={{
            boxShadow:
              '0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)',
          }}
          onClick={onDeleteContact}
        >
          Delete
        </Button>
      </Flex>
    </Box>
  );
};