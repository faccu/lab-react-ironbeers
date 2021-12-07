import axios from "axios";
import { React, useState, useEffect } from "react";

export default function SingleBeerPage (){

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
      
        <h3>List of Beers</h3>
        {beers.map((beer) => (
          <div key={beer._id}>
            <img src={beer.image_url} alt="beer" />
            <h3>{beer.name}</h3>
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>
          </div>
        ))}
      </div>
    );
}