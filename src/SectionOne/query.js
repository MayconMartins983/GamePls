import { useEffect, useState } from 'react';
import './StyleSection.css'
import Current from './Current';
import  client  from "./Config";
import {ApolloClient, gql} from '@apollo/client';
import {ApolloProvider} from 'react-apollo';


const Querys = () => {
    
        useEffect (()=> {
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
        },[]) 
        const [dados, setDados] = useState (false)

};

export default Querys;
