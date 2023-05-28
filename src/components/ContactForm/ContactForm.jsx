import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/selectors';
import {addContact} from '../../redux/contacts/operations';
import css from "./ContactForm.module.css";


const ContactForm =()=>{
const[name,setName]=useState('');
const[number,setNumber]=useState('');

const handleInputChange=({ target: { name, value } }) => {
  
    switch(name){
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
};
const dispatch = useDispatch();
const contacts = useSelector(getContacts);
const handleSubmit = (event) => {   
		  event.preventDefault();     
     
      const newContact={
        name,
        number,
     }; 
      if(contacts.find(({name, number}) => name.toLowerCase()===(newContact.name.toLowerCase())
              ||number===newContact.number)){
                alert(`${newContact.name} is already in contacts.`);
                reset();
                return;
              } 
              dispatch(addContact(newContact));
              reset();
}

const reset=()=>{
setName('');
setNumber('');
}
 
    return (
  <div> 
 
    <form className={css.form} onSubmit={handleSubmit}>
       <label className={css.form_lable}>
       <span>Name</span>
       <input className={css.form_input}
type="text"
name="name"
value={name}
onChange={handleInputChange}
placeholder='Enter name...'
pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
title="Name may contain only letters,
 apostrophe, dash and spaces.
  For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
required
/>
    </label>
    <label className={css.form_lable}>
    <span>Number</span>
    <input className={css.form_input}
type="tel"
name="number"
value={number}
onChange={handleInputChange}
placeholder='Enter phone number...'
pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
required
/>
    </label>
    
    <button type="submit" className={css.button}>Add contact</button>
    </form>
      
  </div>
);
}
export default ContactForm;

















// import { useState } from 'react';
// import {
//   useAddContactMutation,
//   useGetContactsQuery,
// } from '../../redux/contacts/contactsApi';
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   VStack,
//   Heading,
//   Text,
// } from '@chakra-ui/react';
// import { useColorModeValue } from '@chakra-ui/color-mode';

// const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleInputChange = ({ target: { name, value } }) => {
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'number':
//         setNumber(value);
//         break;
//       default:
//         return;
//     }
//   };

//   const [addNewContact] = useAddContactMutation();
//   const { data } = useGetContactsQuery();

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const newContact = {
//       name,
//       number,
//     };

//     if (
//       data.find(
//         ({ name, number }) =>
//           name.toLowerCase() === newContact.name.toLowerCase() ||
//           number === newContact.number
//       )
//     ) {
//       alert(`${newContact.name} is already in contacts.`);
//       reset();
//       return;
//     }

//     addNewContact(newContact);
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   const formContainerBgColor = useColorModeValue('gray.100', 'gray.700');
//   const headingColor = useColorModeValue('gray.800', 'gray.200');
//   const textColor = useColorModeValue('gray.600', 'gray.400');

//   return (
//     <Box py={8} px={4} bg={formContainerBgColor} borderRadius="md">
//       <form onSubmit={handleSubmit}>
//         <VStack spacing={4}>
//           <Heading as="h2" size="lg" color={headingColor}>
//             Add New Contact
//           </Heading>
//           <FormControl>
//             <FormLabel color={textColor}>Name</FormLabel>
//             <Input
//               type="text"
//               name="name"
//               value={name}
//               onChange={handleInputChange}
//               placeholder="Enter name..."
//               required
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel color={textColor}>Number</FormLabel>
//             <Input
//               type="tel"
//               name="number"
//               value={number}
//               onChange={handleInputChange}
//               placeholder="Enter phone number..."
//               required
//             />
//           </FormControl>
//           <Button type="submit">Add Contact</Button>
//         </VStack>
//       </form>
//     </Box>
//   );
// };

// export default ContactForm;
