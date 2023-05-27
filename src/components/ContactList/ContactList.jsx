import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import Loader from "../Loader/Loader";
import { getFilter } from '../../redux/selectors';
import { useSelector } from 'react-redux';
import { useGetContactsQuery } from '../../redux/contacts/contactsApi';


const ContactList=()=>{

  const { data, isFetching, isSuccess, error } = useGetContactsQuery();
  const filter = useSelector(getFilter);  

  const filteredContacts = (contactsData, filterValue) =>{
    if(!filter){
     return data;
    }
     return data
       .filter(({name, number}) =>
        name.toLowerCase().includes(filter.toLowerCase())
        ||number.includes(filter));    
      } 
      const contacts=filteredContacts(data, filter);
     
    return(
             <ul className={css.contacts}>
                  {error&&<p style={{
        fontSize:32,          
        color: 'red'
      }}>{error}</p>} 
              {isFetching&&<Loader visible={true}/>}
               {isSuccess&&contacts.length>0 ? !isFetching&&contacts
			.map(({name, number, id}) => (
      <Contact key={id} name={name} number={number}
       id={id}/>
            ))
      :<p>There is no contacts by query</p>}   
              
       
       </ul>
    )
}

export default ContactList;