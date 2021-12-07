import React from 'react';
import axios from 'axios'; 
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


export default function BeerDetails (props){
    const [randomBeer, setRandomBeer] = useState({});

    const { id: beerId } = useParams();
    useEffect(() => {
        axios
          .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
          .then((response) => {
            setRandomBeer(response.data);
          })
          .catch(console.log);
      }, [beerId]);
    return (
        <div>
          <Header />
            <img src={randomBeer.image_url} alt="beer" />
            <h3>{randomBeer.name}</h3>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.tagline} {randomBeer.first_brewed}</p>
            <p>{randomBeer.brewers_tips}</p>
            <p>{randomBeer.description}</p>
            <p>{randomBeer.contributed_by}</p>
        </div>
    )
}