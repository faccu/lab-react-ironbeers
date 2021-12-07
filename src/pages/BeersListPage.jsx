import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BeersListPage (){

    const [beers, setBeers] = useState([]);

    // This effect will run only once after the initial render 
    useEffect(() => {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => {
          setBeers(response.data);
        })
        .catch(console.log)
    }, []);       // <--  [] means: Run the effect only once, after initial render
  
    return (
      <div>
        <Header/>
        
        <h3>List of Beers</h3>
        {beers.map((beer) => (
            <Link to={`/beers/${beer._id}`}>
                <div key={beer._id}>
                    <img src={beer.image_url} alt="beer" />
                    <h3>{beer.name}</h3>
                    <p>{beer.tagline}</p>
                    <p>{beer.contributed_by}</p>
                </div>
            </Link>
        ))}
      </div>
    );
}