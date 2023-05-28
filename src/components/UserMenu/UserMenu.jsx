import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { logOut } from 'redux/auth/operations';
import { useAuth } from '../../hooks/useAuth';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div  >
    
      <Typography variant="h6" >
      {user.email} 
       </Typography>
      <Button onClick={()=>dispatch(logOut())} color="inherit">
        Logout
      </Button>
    </div>
  );
};

export default UserMenu;