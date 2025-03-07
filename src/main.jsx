import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Header from "./components/HeaderMain";
import Footer from "./components/FooterMain";
import Routing from './components/Routing';
import ApolloAppProvider from './ApolloProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloAppProvider>
      <>
      <Header/>
      <main className='container mx-auto font-nunito my-16'>      
        <Routing/>
      </main>
      <Footer/>    
      </>  
    </ApolloAppProvider>
  </StrictMode>,
)
