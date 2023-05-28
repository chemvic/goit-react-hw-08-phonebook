import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import  App  from './components/App/App';
import {store, persistor} from "./redux/store.js";
import './index.css';
// import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>         
        {/* <ChakraProvider> */}
          <App />
        {/* </ChakraProvider> */}
     </PersistGate> 
    </Provider> 
    </BrowserRouter>
      
  </React.StrictMode>
);
