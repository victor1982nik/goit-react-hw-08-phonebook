import { useDispatch, useSelector} from 'react-redux';
import { Button } from 'components/ContactForm/ContactForm.styled';
import { List } from './ContactsList.styled';
import * as contactsSelectors from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';

export function ContactList() {
  const dispatch = useDispatch();
  
  const filteredContacts = useSelector(contactsSelectors.selectFilteredContacts);
  
  return (
    <ul>
      {filteredContacts.map((contact, index) => (
        <List key={contact.id}>
          {contact.name} {contact.phone}{' '}
          <Button
            type="button"
            onClick={() => dispatch(deleteContact(contact.id))}
          >
            Delete
          </Button>
        </List>
      ))}
    </ul>
  );
}
