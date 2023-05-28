import  ContactList  from '../../ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  ContactForm  from '../../ContactForm';
import  Filter  from 'components/Filter/Filter';
import Loader from "components/Loader/Loader";
import {fetchContacts} from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selectors';

import css from "./Contacts.module.css";



export default function Contacts() {
    const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <><h1 className="title">Phonebook</h1>

    <ContactForm />
     
     <div className={css.contactsTitle}>
     <h2 className="title">Contacts</h2>
     {isLoading&&<Loader visible={true}/>}
      </div>    

    

      <Filter />  
         <div>{isLoading && 'Request in progress...'}</div>
         <ContactList/> 
     
    </>
    
  );
}