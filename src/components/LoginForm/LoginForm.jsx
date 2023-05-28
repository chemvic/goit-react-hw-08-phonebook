import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { TextField, Button } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <TextField label="Email" type="email" name="email" variant="outlined" />
      <TextField
        label="Password"
        type="password"
        name="password"
        variant="outlined"
      />
      <Button type="submit" variant="contained">
        LOGIN
      </Button>
    </form>
  );
};