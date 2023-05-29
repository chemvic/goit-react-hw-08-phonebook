import { createSlice } from '@reduxjs/toolkit';
import {fetchContacts, addContact, deleteContact} from "redux/contacts/operations";
import { logOut } from 'redux/auth/operations';

const initialState={     
      items: [],
      isLoading: false,
      error: null
  };
   const handlePending = state => {
    state.isLoading = true;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;    
  };

const contactsSlice = createSlice({
    name: 'contacts',
    initialState, 
    extraReducers: (builder) =>{
      builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action)=>{
        state.isLoading=false;
        state.items=action.payload;
        state.error=null;
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action)=>{
        state.isLoading=false;
        state.items.push(action.payload);
        state.error=null;
      })
      .addCase(deleteContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action)=>{
        state.isLoading=false;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
        state.error=null;
      }) 
      .addCase(logOut.fulfilled, (state)=>{
        state.items = [];
        state.error = null;
        state.isLoading = false;
      
      }) 
    }
  });

export const contactsReducer = contactsSlice.reducer;










