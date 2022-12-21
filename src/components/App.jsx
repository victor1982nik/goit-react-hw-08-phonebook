import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Login } from 'pages/Login';
import { Register } from 'pages/Register';
import { SharedLayout } from './SharedLayout/SharedLayout';

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contacts" element={null} />
        </Route>
      </Routes>
    </div>
  );
}

//import { ContactForm } from './ContactForm/ContactForm';
//import { ContactList } from './ContactsList/ContactsList';
//import { Filter } from './Filter/Filter';
//import { Section } from './Section/Section';
//import { useDispatch, useSelector } from 'react-redux';
//import { useEffect } from 'react';
//import { selectItems, selectIsLoading } from 'redux/contacts/selectors';
//import * as contactsOperations from '../redux/contacts/operations';
// const dispatch = useDispatch();
// const isLoading = useSelector(selectIsLoading);

// useEffect(()=> {
//   dispatch(contactsOperations.fetchContacts())
// },[dispatch]);

// const contacts = useSelector(selectItems);
// //console.log(contacts);

/* <Section title="PhoneBook">
        <ContactForm />
      </Section>
      <Section title="Contacts">
      {isLoading &&  <b>Request in progress...</b>} 
        {contacts?.length > 0 && (
          <>
             <Filter /> 
            <br />
              <ContactList />   
          </>
        )}
      </Section> */
