import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectItems, selectIsLoading } from 'redux/contacts/selectors';
import * as contactsOperations from '../redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Text } from '@chakra-ui/react';

export default function PhoneBook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectItems);

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
