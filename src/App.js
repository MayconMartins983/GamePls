import Header from './Header/Header';
import Section from './SectionOne/Section';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Description from './SectionDescription/DescriptionPai';
import {useEffect} from 'react';
import { ApolloClient } from '@apollo/client';
import Description1 from './SectionDescription/All Descriptions/description 1';
import Description2 from './SectionDescription/All Descriptions/description 2';
import Description3 from './SectionDescription/All Descriptions/description 3';
import Description4 from './SectionDescription/All Descriptions/description 4';
import Description5 from './SectionDescription/All Descriptions/description 5';
import Description6 from './SectionDescription/All Descriptions/description 6';
import Description7 from './SectionDescription/All Descriptions/description 7';
import Description8 from './SectionDescription/All Descriptions/description 8';


function App() {
  
  return (
  <>
    <Header />

    <Routes>
      <Route path = 'descricao' exact element ={<Description />}/>
      <Route path = '/' exact element ={<Section />}/>
      <Route path = 'description1' exact element = {<Description1 />} />
      <Route path = 'description2' exact element = {<Description2 />} />
      <Route path = 'description3' exact element = {<Description3 />} />
      <Route path = 'description4' exact element = {<Description4 />} />
      <Route path = 'description5' exact element = {<Description5 />} />
      <Route path = 'description6' exact element = {<Description6 />} />
      <Route path = 'description7' exact element = {<Description7 />} /> 
      <Route path = 'description8' exact element = {<Description8 />} /> 
    </Routes>
  </>
  );
}

export default App;


