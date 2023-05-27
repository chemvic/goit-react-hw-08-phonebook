import { Outlet, NavLink } from "react-router-dom";
import css from "./SharedLayout.module.css";
import AppBar from "../AppBar";
import { Suspense } from 'react';

const SharedLayout =( ) => {

    return(
        <>
             
        <main>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense> 
        </main>
     
        </>
     

    )
};
export default SharedLayout; 
