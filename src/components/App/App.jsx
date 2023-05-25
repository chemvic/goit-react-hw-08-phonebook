import { Routes, Route } from "react-router-dom";
import ContactForm from "../ContactForm";
import  Filter from "../Filter";
import ContactList from "../ContactList";
import css from "./App.module.css";
import {lazy} from 'react';
import SharedLayout from "../SharedLayout";
// const Contacts =lazy(()=>import("../pages/Contacts"));
const Login =lazy(()=>import("../pages/Login"));
const Register =lazy(()=>import("../pages/Register"));
const Home =lazy(()=>import("../pages/Home/Home"));
const NotFound =lazy(()=>import("../pages/NotFound"));

const App =()=> { 
   
      return (
    <div className={css.container}> 
     <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={<Register />}
          //   <RestrictedRoute redirectTo="/tasks"
          //    component={<Register />} />
          // }
        />
        <Route
          path="/login"
          element={<Login />}
          //   <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
          // }
        />
        <Route
          path="/contacts"
          element={<><h1 className="title">Phonebook</h1>

    <ContactForm />
     
     <div className={css.contactsTitle}>
     <h2 className="title">Contacts</h2>
      </div>    

    

      <Filter />    
         <ContactList/> </>}
          //   <PrivateRoute redirectTo="/login" component={<TasksPage />} />
          // }
        />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
   
 
     
      
    </div>
  ); 

};
export default App;