
import axios from "axios";
import { useState } from "react";
import { Form, FormGroup } from "react-bootstrap"
import { redirect, useNavigate } from "react-router-dom";
import Nav from "../components/Nav"

function CreateBeer() {

  const redirection = useNavigate()

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_brewed] = useState("");
  const [brewers_tips, setBrewers_tips] = useState("");
  const [attenuation_level, setAttenuation_level] = useState(0);
  const [contributed_by, setContributed_by] = useState("");

  const handleNameChange = (event)=>{
    setName(event.target.value)
  }
  const handleTaglineChange = (event)=>{
    setTagline(event.target.value)
  }
  const handleDescriptionChange = (event)=>{
    setDescription(event.target.value)
  }
  const handleFirstBrewedChange = (event)=>{
    setFirst_brewed(event.target.value)
  }
  const handleBrewersTipsChange = (event)=>{
    setBrewers_tips(event.target.value)
  }
  const handleAttenuationLevelChange = (event)=>{
    setAttenuation_level(event.target.value)
  }
  const handleContributeByChange = (event)=>{
    setContributed_by(event.target.value)
  }

  const handleSubmit = async (event)=>{

    event.preventDefault()

    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by
    }

    try {
      await axios.post("https://ih-beers-api2.herokuapp.com/beers/new" , newBeer)
      redirection("/beers")

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div>
     <Nav/>
   <div className="d-flex justify-content-center">
   <Form className="d-flex flex-column w-50 " >
      <FormGroup className="justify-content-center" >
        <Form.Label htmlform="name">Nombre</Form.Label>
        <Form.Control type="text" name="name" value={name} onChange={handleNameChange} />
      </FormGroup>
      <br/>
      <FormGroup>
        <Form.Label htmlform="tagline">Tagline</Form.Label>
        <Form.Control type="text" name="tagline" value={tagline} onChange={handleTaglineChange} />
      </FormGroup>
      <br/>
      <FormGroup>
        <Form.Label htmlform="description">Description</Form.Label>
        <textarea className="form-control" rows={4} type="text" name="description" value={description} onChange={handleDescriptionChange}/>
      </FormGroup>
      <br/>
      <FormGroup>
        <Form.Label htmlform="firstBrewed">First Brewed</Form.Label>
        <Form.Control type="text-area" name="firstBrewed" value={first_brewed} onChange={handleFirstBrewedChange}/>
      </FormGroup>
      <br/>
      <FormGroup>
        <Form.Label htmlform="brewersTips">Brewers Tips</Form.Label>
        <Form.Control type="text" name="brewersTips" value={brewers_tips} onChange={handleBrewersTipsChange}/>
      </FormGroup>
      <br/>
      <FormGroup>
        <Form.Label htmlform="attenuationLevel">Attenuation Level</Form.Label>
        <Form.Control type="number" name="attenuationLevel" value={attenuation_level} onChange={handleAttenuationLevelChange}/>
      </FormGroup>
      <br/>
      <FormGroup>
        <Form.Label htmlform="contributedBy">Contribute By</Form.Label>
        <Form.Control type="text" name="contributedBy" value={contributed_by} onChange={handleContributeByChange}/>
      </FormGroup>
      <br/>
      <button onClick={handleSubmit} type="submit" className="btn btn-primary mb-3">ADD NEW</button>
    </Form>
   </div>
    
    

    </div>
  )
}

export default CreateBeer
