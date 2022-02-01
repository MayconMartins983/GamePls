import { useEffect, useState } from 'react';
import './StyleSection.css'
import Current from './Current';
import  client  from "./Config";
import {ApolloClient, gql} from '@apollo/client';
import {ApolloProvider} from 'react-apollo';
import Loading from './Loading/loading';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';


const Section = () => {

  function initial() {
    client.query({
    query: gql `
      query {
        games {
          id
          title
          picture
          rating
        }
      }`
  }).then((response) => setDados(response.data.games))
  .catch((error) => console.log(error))
} 

  useEffect (()=> {
    initial()
  },[])
    
const [dados, setDados] = useState (false)


return (
    <div className='conteinerSection'>
        <section className='sectionOne'>
            <Link to = 'Description1' className='Link'>
              {dados ? <Current
              key={dados.id}
              title = {dados[0].title}
             image = {dados[0].picture}
             rating = {dados[0].rating}/> : <Loading />
            }
            </Link>

            <Link to = 'description2'  className='Link'>{dados && <Current
              key={dados.id}
              title = {dados[1].title}
             image = {dados[1].picture}
             rating = {dados[1].rating}/>
            }</Link>

            <Link to = 'description3'  className='Link'>{dados && <Current
              key={dados.id}
              title = {dados[2].title}
             image = {dados[2].picture}
             rating = {dados[2].rating}/>
            }</Link>

            <Link to = 'description4'  className='Link'>{dados && <Current
              key={dados.id}
              title = {dados[3].title}
             image = {dados[3].picture}
             rating = {dados[3].rating}/>
            }</Link>

            <Link to = 'description5'  className='Link'>{dados && <Current
              key={dados.id}
              title = {dados[4].title}
             image = {dados[4].picture}
             rating = {dados[4].rating}/>
            }</Link>

            <Link to = 'description6'  className='Link'>{dados && <Current
              key={dados.id}
              title = {dados[5].title}
             image = {dados[5].picture}
             rating = {dados[5].rating}/>
            }</Link>

            <Link to = 'description7'  className='Link'>{dados && <Current
              key={dados.id}
              title = {dados[6].title}
             image = {dados[6].picture}
             rating = {dados[6].rating}/>
            }</Link>
            <Link to = 'description8'  className='Link'>{dados && <Current
              key={dados.id}
              title = {dados[7].title}
             image = {dados[7].picture}
             rating = {dados[7].rating}/>
            }</Link>



        </section>
    </div>
)
}

export default Section


















/* import React, { useEffect, useState } from 'react';
import './StyleSection.css'
import Current from './Current';
import  client  from "./Config";
import {ApolloClient, gql} from '@apollo/client';
import {ApolloProvider} from 'react-apollo';


const Section = () => {
    const query =
    useEffect (()=> {
      initial()
    },[])
    
const [dados, setDados] = useState ([])
  
function initial() {
     client.query({
     query: gql `
       query {
         games {
           
           title
           picture
           rating
         }
       }`
   }).then((response) => setDados(response.data.games))
}
     
      console.log(dados)
return (
    <div className='conteinerSection'>
        <section className='sectionOne'>
            {dados.map( (e) => {
              return <Current
              key={e.title}
              title = {e.title}
             image = {e.picture}
             rating = {e.rating} 
         />
            }

            )}

        </section>
    </div>
)
}

export default Section */


