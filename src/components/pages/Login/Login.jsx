import css from './Login.module.css';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Typography } from '@mui/material';
export default function Login() {
  return (
    <div className={css.container} >   
      <Typography variant="h6" >
      LOGIN 
       </Typography>
      <LoginForm />
    </div>
  );
}

