import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectItems, selectIsLoading } from 'redux/contacts/selectors';
import * as contactsOperations from '../redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Box } from 'components/Box/Box';

export default function PhoneBook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectItems);

  return (
    <Box>
      <section>
        <h2>PhoneBook</h2>
        <ContactForm />
      </section>
      <section>
        <h2>Contacts</h2>
        {isLoading && <b>Request in progress...</b>}
        {contacts?.length > 0 && (
          <>
            <Filter />
            <br />
            <ContactList />
          </>
        )}
      </section>
    </Box>
  );
}
