import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

 const UserMenu = () => {
  const dispatch = useDispatch();
//   const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome,</p>
      <button type="button" >
        Logout
      </button>
    </div>
  );
};
export default UserMenu;
//  {user.name}          onClick={() => dispatch(logOut())}