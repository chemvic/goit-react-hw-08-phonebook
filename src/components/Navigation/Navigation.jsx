import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import css from './Navigation.module.css';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {!isLoggedIn && (<NavLink className={css.link}   to="/">
        Home
      </NavLink>)}
      {isLoggedIn && (
        <NavLink className={css.link}  to="/contacts">
          Contacts
        </NavLink>
       )} 
    </nav>
  );
};
// style={({ isActive }) =>({color: isActive ? 'green' : 'blue'})}
// style={({ isActive }) =>({color: isActive ? 'green' : 'blue'})}