import React, { useEffect, useState } from 'react';
import './StyleSection.css'
import Current from './Current';


const Section = () => {
        const [apiDados, setApiDados] = useState('') 
    
        useEffect ( () => { const Api = fetch ('https://gamespls-api.herokuapp.com/dark-souls')
        .then ((response) => response.json())
        .then (
            (body) => setApiDados (body)
        )
    }, [])
        
        
    
      
    return (
        <div className='conteinerSection'>
            <section className='sectionOne'>
                {<Current
                title = {apiDados.title}
                image = {apiDados.picture}
                rating = {apiDados.rating}
                />}

                {<Current
                title = {apiDados.title}
                image = {apiDados.picture}
                rating = {apiDados.rating}
                />}

                {<Current
                title = {apiDados.title}
                image = {apiDados.picture}
                rating = {apiDados.rating}
                />}

                 {<Current
                title = {apiDados.title}
                image = {apiDados.picture}
                rating = {apiDados.rating}
                />}

                  {<Current
                title = {apiDados.title}
                image = {apiDados.picture}
                rating = {apiDados.rating}
                />}



           
               
                
            </section>
        </div>
    )
}

export default Section
