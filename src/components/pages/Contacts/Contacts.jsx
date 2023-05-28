import { useEffect, Suspense } from 'react';
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import  ContactForm  from '../../ContactForm';
import  Filter  from 'components/Filter/Filter';
import Loader from "components/Loader/Loader";
import {fetchContacts} from 'redux/contacts/operations';
import { getIsLoading } from 'redux/contacts/selectors';
import { Typography } from '@mui/material';

import css from "./Contacts.module.css";



export default function Contacts() {
    const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
 
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    
    <div className={css.container}>
      <div>
       <Typography variant="h4"  >
          PHONEBOOK 
       </Typography>
    <ContactForm />
     
     
    

      <Filter />  
      </div>
     <div>
       <Typography variant="h4"  >
          CONTACTS 
       </Typography>
     {isLoading&&<Loader visible={true}/>}
    
      <Suspense fallback={<Loader visible={true}/>}>
          <Outlet />
        </Suspense>
          </div>       
     
    </div>
    
  );
}