import {  useSelector } from 'react-redux';
import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
// import { getFilter } from '../../redux/selectors';
import { getFilteredContacts } from 'redux/contacts/selectors';
import { getIsLoading } from 'redux/contacts/selectors';
import { getError } from 'redux/contacts/selectors';




const ContactList=()=>{
  const filteredContacts=useSelector(getFilteredContacts);   
  // const { data, isFetching, isSuccess, error } = useGetContactsQuery();
  // const filter = useSelector(getFilter);  

  // const filteredContacts = (contactsData, filterValue) =>{
  //   if(!filter){
  //    return data;
  //   }
  //    return data
  //      .filter(({name, number}) =>
  //       name.toLowerCase().includes(filter.toLowerCase())
  //       ||number.includes(filter));    
  //     } 
  //     const contacts=filteredContacts(data, filter);


  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

    return(
             <ul className={css.contacts}>
                  {error&&<p style={{
        fontSize:32,          
        color: 'red'
      }}>{error}</p>} 
              
               {filteredContacts.length>0 ? !isLoading&&filteredContacts
			.map(({name, number, id}) => (
      <Contact key={id} name={name} number={number}
       id={id}/>
            ))
      :<p>There is no contacts by query</p>}   
              
       
       </ul>
    )
}

export default ContactList;

// import { useColorModeValue } from '@chakra-ui/color-mode';
// import { Box, Text } from '@chakra-ui/react';
// import { useSelector } from 'react-redux';
// import { getFilter } from '../../redux/selectors';

// const ContactList = () => {
//   const filter = useSelector(getFilter);
//   const contacts = useSelector((state) =>
//     state.contacts.filter(({ name, number }) =>
//       name.toLowerCase().includes(filter.toLowerCase()) ||
//       number.includes(filter)
//     )
//   );

//   const containerBgColor = useColorModeValue('gray.100', 'gray.700');
//   const textColor = useColorModeValue('gray.600', 'gray.400');

//   return (
//     <Box py={8} px={4} bg={containerBgColor} borderRadius="md">
//       <Text fontSize="xl" fontWeight="bold" mb={4} color={textColor}>
//         Contacts
//       </Text>
//       {contacts.length > 0 ? (
//         <ul>
//           {contacts.map(({ name, number, id }) => (
//             <li key={id}>
//               <Text>{name}: {number}</Text>
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <Text>No contacts found.</Text>
//       )}
//     </Box>
//   );
// };

// export default ContactList;
