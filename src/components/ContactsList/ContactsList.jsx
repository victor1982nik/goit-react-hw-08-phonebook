import { useDispatch, useSelector } from 'react-redux';

import * as contactsSelectors from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Box, Button, Text } from '@chakra-ui/react';

export function ContactList() {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(
    contactsSelectors.selectFilteredContacts
  );

  return (
    <Box as="ul" display="flex" flexDirection="column" alignItems="center">
      <Box
        width="300px"
        border="1px"
        borderColor="black"
        p={5}
        borderRadius={4}
      >
        {filteredContacts.map((contact, index) => (
          <Box
            as="li"
            mb={4}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bg="lightblue"
            p={2}
            borderRadius={20}
            boxShadow="dark-lg"
            rounded="md"
            _last={{
              mb: 0,
            }}
            _hover={{
              background: 'white',
              color: 'teal.500',
            }}
            key={contact.id}
          >
            <Text fontWeight={500}>
              {contact.name} {contact.phone}
            </Text>
            <Button
              borderRadius="4"
              border="1px"
              borderColor="gray.500"
              _hover={{ background: 'teal' }}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
