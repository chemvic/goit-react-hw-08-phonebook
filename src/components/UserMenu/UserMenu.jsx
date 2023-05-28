import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
// import {contactsApi} from "redux/contacts/contactsApi";
import { useAuth } from '../../hooks/useAuth';
import css from './UserMenu.module.css';

 const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  

 const cacheReset = () => {
  dispatch(logOut());

};

  return (
    <div className={css.wrapper}>
      <p className={css.user_email}> {user.email} </p>
      <button type="button" onClick={cacheReset}>
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
 