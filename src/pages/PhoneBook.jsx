import { ContactList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Section } from 'components/Section/Section';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectItems, selectIsLoading } from 'redux/contacts/selectors';
import * as contactsOperations from '../redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
//import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const PhoneBook = () => {
  //const isLoggedIn = useSelector(selectIsLoggedIn);
  
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(selectItems);

  return (
    <>
      <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {isLoading && <b>Request in progress...</b>}
        {contacts?.length > 0 && (
          <>
            <Filter />
            <br />
            <ContactList />
          </>
        )}
      </Section>
      
    </>
  );
};
