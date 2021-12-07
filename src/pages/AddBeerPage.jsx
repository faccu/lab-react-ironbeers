import React from "react";
import { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";

export default function AddBeerPage(){

    const [formState, setFormState] = useState({})

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault();
        axios
        .post(
            "https://ih-beers-api2.herokuapp.com/beers/new",
            formState)
        .then(response=>{
            setFormState({})
            history.push("/")
        })
        .catch(console.log)
    }

    function handleInput(e){
        setFormState({...formState, [e.target.name]: e.target.value }) // setFromState(Object.assign({}, state, {[e.name]: e.value}))
    }

    // if you like you can destructure state here
    // const {price, headline} = formState

    return(
    <div className="AddApartmentPage">
    <h3>Add New Beer</h3>
    
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
        value={formState.name}
      />

      <label>Tagline</label>
      <input
        type="text"
        name="tagline"
        onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
        value={formState.tagline}
      />

      <label>Description</label>
      <input
        type="text"
        name="description"
        onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
        value={formState.description}
      />

      <label>First Brewed</label>
      <input
        type="text"
        name="firstBrewed"
        onChange={handleInput} // onChange={(e) => setPrice(e.target.value)}
        value={formState.firstBrewed}
      />

      <label>Brewer Tips</label>
      <input
        type="text"
        name="brewerTips"
        onChange={handleInput} // onChange={(e) => setPrice(e.target.value)}
        value={formState.brewerTips}
      />

      <label>Attenuation Level</label>
      <input
        type="number"
        name="attenuationLevel"
        onChange={handleInput} // onChange={(e) => setPrice(e.target.value)}
        value={formState.attenuationLevel}
      />

      <label>Contributed By</label>
      <input
        type="text"
        name="contributedBy"
        onChange={handleInput} // onChange={(e) => setPrice(e.target.value)}
        value={formState.contributedBy}
      />
      
      <button type="submit">Create Apartment</button>
      
    </form>
  </div>
  )
}