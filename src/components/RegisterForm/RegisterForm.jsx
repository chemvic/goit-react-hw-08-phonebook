import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { TextField, Button } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Username"
        type="text"
        name="name"
        variant="outlined"
      />
      <TextField label="Email" type="email" name="email" variant="outlined" />
      <TextField
        label="Password"
        type="password"
        name="password"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        Register
      </Button>
    </form>
  );
};