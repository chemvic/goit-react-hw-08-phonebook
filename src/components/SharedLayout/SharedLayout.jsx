import { Outlet } from "react-router-dom";
import CustomAppBar from "../AppBar";
import { Suspense } from 'react';

const SharedLayout = () => {

    return(
        <>
          
        <main >
        <CustomAppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense> 
        </main>
     
        </>
     

    )
};
export default SharedLayout; 
