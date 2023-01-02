import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Text } from '@chakra-ui/react';
import { useGetContactsQuery } from 'redux/contacts/contactsSlice';

export default function PhoneBook() {
  const { data: contacts, isLoading } = useGetContactsQuery();

  return (
    <>
      <section>
        <Text fontSize="28" textAlign="center" mb={5}>
          PhoneBook
        </Text>
        <ContactForm />
      </section>
      <section>
        <Text fontSize="28" textAlign="center" mb={5}>
          Contacts
        </Text>
        {isLoading && <b>Request in progress...</b>}
        {contacts?.length > 0 && (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </section>
    </>
  );
}
