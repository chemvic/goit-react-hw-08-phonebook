// import  ContactList  from '../../ContactList';
import  ContactForm  from '../../ContactForm';
import  Filter  from 'components/Filter/Filter';
import { useGetContactsQuery } from '../../../redux/contacts/contactsApi';
import css from "./Contacts.module.css";

export default function Contacts() {
    const { isFetching } = useGetContactsQuery();
//   const dispatch = useDispatch();
//   const isLoading = useSelector(selectLoading);

//   useEffect(() => {
//     dispatch(fetchTasks());
//   }, [dispatch]);

  return (
    <><h1 className="title">Phonebook</h1>

    <ContactForm />
     
     <div className={css.contactsTitle}>
     <h2 className="title">Contacts</h2>
      </div>    

    

      <Filter />  
         <div>{isFetching && 'Request in progress...'}</div>
         {/* <ContactList/>  */}
     
    </>
    
  );
}