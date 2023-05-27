import { Routes, Route } from "react-router-dom";
import css from "./App.module.css";
import {useEffect, lazy} from 'react';
import SharedLayout from "../SharedLayout";
import { useDispatch } from 'react-redux';
import { PrivateRoute } from '../PrivateRote';
import { RestrictedRoute } from '../RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';

const Contacts =lazy(()=>import("../pages/Contacts/Contacts"));
const Login =lazy(()=>import("../pages/Login"));
const Register =lazy(()=>import("../pages/Register"));
const Home =lazy(()=>import("../pages/Home/Home"));
const NotFound =lazy(()=>import("../pages/NotFound"));


const App =()=> { 
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);


      return isRefreshing ? (
        <b>Refreshing user...</b>
      ) :(
    <div className={css.container}> 
     <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/contacts"
             component={<Register />} />}
      
        />
        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />}
        
        />
        <Route
          path="/contacts"
          element={<PrivateRoute redirectTo="/login" component={<Contacts />} />}
         
        />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
   
 
     
      
    </div>
  ); 

};
export default App;