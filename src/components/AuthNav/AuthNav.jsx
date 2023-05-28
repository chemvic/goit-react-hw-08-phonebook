import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <Button component={Link} to="/register" color="inherit">
        Register
      </Button>
      <Button component={Link} to="/login" color="inherit">
        Login
      </Button>
    </div>
  );
};

export default AuthNav;