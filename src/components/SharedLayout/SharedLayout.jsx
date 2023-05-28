import { Outlet } from "react-router-dom";
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
