import React from 'react';
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filterSlice';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <TextField type='search'
      label="Find contacts "
      variant="outlined"
      onChange={(event) => {
        dispatch(changeFilter(event.target.value));
      }}
      placeholder="Enter name or number "
      inputProps={{
        pattern:
          "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
        title:
          "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
      }}
    />
  );
};

export default Filter;

