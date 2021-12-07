import React from 'react';
import axios from 'axios'; 
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function BeerDetails (props){
    const [uniqueBeer, setUniqueBeer] = useState({});

    const { id: beerId } = useParams();
    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
          .then((response) => {
            setUniqueBeer(response.data);
          })
          .catch(console.log);
      }, [beerId]);
    return (
        <div>
          <Header />
            <img src={uniqueBeer.image_url} alt="beer" />
            <h3>{uniqueBeer.name}</h3>
            <p>{uniqueBeer.attenuation_level}</p>
            <p>{uniqueBeer.tagline} {uniqueBeer.first_brewed}</p>
            <p>{uniqueBeer.brewers_tips}</p>
            <p>{uniqueBeer.description}</p>
            <p>{uniqueBeer.contributed_by}</p>
        </div>
    )
}