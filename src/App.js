import Header from './Header/Header';
import Section from './SectionOne/Section';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Description from './SectionDescription/Description';
import {useEffect} from 'react';
import { ApolloClient } from '@apollo/client';

function App() {
  /* useEffect( () => {initial ()
  }, [])    
  
  function initial () {

  }
 */
  return (
  <>
   <Header />
  <Routes>
    <Route path = 'descricao' exact element ={<Description />}/>
    <Route path = '/' exact element ={<Section />}/>
    
    
  </Routes>

   
    
   
    
  </>
  );
}

export default App;


