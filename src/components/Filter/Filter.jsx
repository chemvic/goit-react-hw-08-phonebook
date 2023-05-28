import React from 'react';
import { useDispatch } from 'react-redux';
import {changeFilter} from '../../redux/filterSlice';
import css from "./Filter.module.css";

const Filter =()=>{
    const dispatch = useDispatch();
     
    return(
        <label className={css.filter_lable}>
            <span>Find contacts by name or number</span>
        <input className={css.filter_input}
        type="text" 
        onChange={(event) => {
            dispatch(changeFilter(event.target.value));
          }}
        placeholder='Enter name or number for search ...'
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters,
         apostrophe, dash and spaces.
          For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        />
        </label>
    )

}
export default Filter;







// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { changeFilter } from '../../redux/filterSlice';
// import { Box, Input, useColorModeValue } from '@chakra-ui/react';

// const Filter = () => {
//   const [filter, setFilter] = useState('');
//   const dispatch = useDispatch();

//   const handleFilterChange = (event) => {
//     setFilter(event.target.value);
//     dispatch(changeFilter(event.target.value));
//   };

//   const inputBgColor = useColorModeValue('gray.100', 'gray.700');

//   return (
//     <Box py={8} px={4} bg={inputBgColor} borderRadius="md">
//       <Input
//         type="text"
//         value={filter}
//         onChange={handleFilterChange}
//         placeholder="Enter name or number for search..."
//         required
//       />
//     </Box>
//   );
// };

// export default Filter;
