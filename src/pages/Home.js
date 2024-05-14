import { Box, Icon, Text } from '@chakra-ui/react';
import { FaAddressBook, FaPhoneVolume } from "react-icons/fa6";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minH="calc(100vh - 50px)"
      alignItems="center"
      justifyContent="center"
      bgGradient="radial( purple.50, purple.300)"
    >
      <Text
        bgGradient="linear(to-b, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="5xl"
        fontWeight="extrabold"
        textAlign="center"
      >
        Welcome to your Phonebook
      </Text>
      <Box display="flex" p="20px" gap='20px'>
        <Icon as={FaPhoneVolume} color="purple.500" w="66px" h="66px" />
        <Icon as={FaAddressBook} color="purple.500" w="66px" h="66px" />
      </Box>
    </Box>
  );
}
