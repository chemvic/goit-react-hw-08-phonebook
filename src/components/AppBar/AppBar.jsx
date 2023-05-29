import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav';
import { useAuth } from 'hooks';



const CustomAppBar = () => {
 
  const { isLoggedIn } = useAuth();

  return (
    <AppBar >
      <Toolbar>
            {!isLoggedIn &&   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
<p>HOME</p> 
       </Typography>} 
     
      {isLoggedIn &&   <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
<p>CONTACTS</p> 
       </Typography>}     
       
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};

export default CustomAppBar;
