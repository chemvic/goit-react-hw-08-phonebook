import css from './Register.module.css';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Typography } from '@mui/material';
export default function Register() {
  return (
    <div className={css.container}>   
    <Typography variant="h6" m='30' >
      REGISTRATION 
       </Typography>
      <RegisterForm />
    </div>
  );
}

