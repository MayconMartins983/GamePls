import Header from './Header/Header';
import Section from './SectionOne/Section';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Description from './SectionDescription/DescriptionPai';
import {useEffect} from 'react';
import { ApolloClient } from '@apollo/client';
import Description1 from './SectionDescription/All Descriptions/description1';
import Description2 from './SectionDescription/All Descriptions/description2';


function App() {
  
  return (
  <>
    <Header />

    <Routes>
      <Route path = 'descricao' exact element ={<Description />}/>
      <Route path = '/' exact element ={<Section />}/>
      <Route path = 'description1' exact element = {<Description1 />} />
      <Route path = 'description2' exact element = {<Description2 />} />
    </Routes>
  </>
  );
}

export default App;


