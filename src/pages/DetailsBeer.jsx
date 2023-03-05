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
    <div  className="mt-5" style={{display:"flex", flexDirection:"column", justifyContent:"space-evenly", flexWrap:"wrap", alignItems:"center" }}>
      {beerDetails === null
      ? <Spinner animation="border" />
      :<Card style={{ width: '30rem'}}>
      <Card.Body style={{display:"flex", flexDirection:"column" ,alignItems:"center"}}>
        <Card.Img  src={beerDetails.image_url} alt="beer" style={{width: "3rem", height: "12rem" }} />
         <div className="d-flex mt-5 mb-2 w-100 justify-content-between">
         <div className="d-flex flex-column align-items-start">
          <Card.Title>{beerDetails.name}</Card.Title>
          <Card.Text>{beerDetails.tagline}</Card.Text>
         </div>
          <div>
            <p>{beerDetails.attenuation_level}</p>
            <p>{beerDetails.first_brewed}</p>
          </div>
         </div>
        <div className="d-flex flex-column align-items-start">
          <Card.Text style={{textAlign:"justify"}}>{beerDetails.description}</Card.Text>
          <p>{beerDetails.contributed_by}</p>
        </div>
        </Card.Body>
      </Card>      
      }
    </div>
    </div>
  );
}

export default DetailsBeer;
