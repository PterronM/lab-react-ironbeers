import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Nav from "../components/Nav";

function DetailsBeer(props) {
  const params = useParams();

  const { idBeer } = params;

  const [beerDetails, setBeerDetails] = useState(null);

  useEffect(() => {
    getData();
  }, [idBeer]);

  const getData = async () => {
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${idBeer}`);
      // console.log( response)
      setBeerDetails(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
    <Nav />
    <div style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly", flexWrap:"wrap", alignItems:"center" }}>
      {beerDetails === null
      ? <Spinner animation="border" />
      :<Card style={{ width: '15rem'}}>
      <Card.Body>
        <Card.Img src={beerDetails.image_url} alt="beer" style={{ width: "3rem", height: "11rem" }} />
        <Card.Title>{beerDetails.name}</Card.Title>
        <Card.Text>{beerDetails.tagline}</Card.Text>
        <Card.Text>{beerDetails.description}</Card.Text>
        <p>{beerDetails.contributed_by}</p>
        <p>{beerDetails.attenuation_level}</p>
        <p>{beerDetails.first_brewed}</p>
        </Card.Body>
      </Card>      
      }
    </div>
    </div>
  );
}

export default DetailsBeer;
