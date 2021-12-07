import React from "react";
import { Link } from "react-router-dom";

export default function HomePage (){

    return(
        <>
            <div>
                <Link to="/beers">
                <img src={require('../assets/beers.png')} alt="pic"/>
                <h2>LIST OF BEERS</h2>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus augue, congue a lacinia sed, fermentum a nulla. Duis non leo sed purus venenatis sagittis ac at ex. </p>
            </div>
            <div>
                <img src={require('../assets/random-beer.png')} alt="pic"/>
                <Link to="/random">
                <h2>RANDOM BEER</h2>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus augue, congue a lacinia sed, fermentum a nulla. Duis non leo sed purus venenatis sagittis ac at ex. </p>
            </div>
            <div>
                <img src={require('../assets/new-beer.png')} alt="pic"/>
                <Link to="/new">
                <h2>ADD NEW BEER</h2>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent risus augue, congue a lacinia sed, fermentum a nulla. Duis non leo sed purus venenatis sagittis ac at ex. </p>
            </div>
        </>
    )

}