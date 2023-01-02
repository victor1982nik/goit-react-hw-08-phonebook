import toast from 'react-hot-toast';
import { Button, Box, Text } from '@chakra-ui/react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contacts/contactsSlice';

export function ContactForm() {
  const [addContact] = useAddContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const handleSubmit = async e => {
    e.preventDefault();

    const { name, mobile } = e.target.elements;
    const form = e.currentTarget;

    if (name.value === '' || mobile.value === '') {
      toast.error('Введите имя или телефон');
      return;
    }

    const isInList = contacts.some(
      contact => contact.name.toLowerCase() === name.value.toLowerCase()
    );

    if (isInList) {
      toast.error('Контакт уже есть в списке');
      form.reset();
      return;
    }
    await addContact({ name: name.value, phone: mobile.value });
    toast.success('Успешно добавлен');
    form.reset();
  };

  return (
    <Box
      p="15px"
      border="1px"
      borderColor="gray.500"
      borderRadius="4"
      width="300px"
      ml="auto"
      mr="auto"
      mb={4}
    >
      <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column">
          <Text as="label" fontSize={20} fontWeight="500">
            Name
            <Text
              as="input"
              p={2}
              placeholder="John Smith"
              border="1px"
              borderRadius={4}
              name="name"
              type="text"
              //value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            />
          </Text>

          <Text as="label" fontSize={20} fontWeight="500">
            Number
            <Text
              as="input"
              p={2}
              placeholder="112-15-841"
              border="1px"
              borderRadius={4}
              name="mobile"
              type="tel"
              //value={mobile}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            />
          </Text>
          <br />
          <Button
            borderRadius="4"
            border="1px"
            borderColor="gray.500"
            _hover={{ background: 'teal' }}
            type="submit"
          >
            Add contact
          </Button>
        </Box>
      </form>
    </Box>
  );
}
