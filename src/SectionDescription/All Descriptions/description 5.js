import React from 'react';
import '../description.css'
import { useEffect, useState } from 'react';
import  client  from "./Config";
import {ApolloClient, gql} from '@apollo/client';
import {ApolloProvider} from 'react-apollo';

const Description5 = () => {
    function initial() {
        client.query({
        query: gql `
          query {
            games {
              id title picture rating studio release_date story genre 
            }
          }`
      }).then((response) => setDados(response.data.games))
      .catch((error) => console.log(error))
    } 
    
      useEffect (()=> {
        initial()
      },[])
        
    const [dados, setDados] = useState (null)
  
  return (
   <>
   
    <div className='conteiner'>
      <div className='sectionDescription'>
        <div className='foto'>
          <img src={dados && dados[4].picture}/>
          <p>{dados && dados[4].title}</p>
        </div>
        
          <div className='description'>
            <h2>{dados && dados[4].title}</h2>
            <p> <strong>Studio: {dados && dados[4].studio}</strong> </p>
            <p><strong>Release_date: {dados && dados[4].release_date}</strong> </p>
            <p><strong>Description:</strong> {dados && dados[4].story} </p>
          </div>
      </div>
    </div>
   
   </>
  )
};

export default Description5;