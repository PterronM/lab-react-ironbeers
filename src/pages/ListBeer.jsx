import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Card from "react-bootstrap/Card";
import SearchForm from "../components/SearchForm"


function ListBeer(props) {
  // console.log( props.allBeer)

  const [allBeer, setAllBeer] = useState(null);
  const [beerDisplay, setBeerDisplay] = useState();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://ih-beers-api2.herokuapp.com/beers"
      );
      // console.log(response.data);
      setAllBeer(response.data);
      setBeerDisplay(response.data)
      setIsFetching(false);
    } catch (error) {
      console.log(error);
    }
  };  

  const filterBeer = (search) => {
    const newArrBeer = allBeer.filter((eachBeer) => {
        let nameMay = eachBeer.name.toUpperCase()
        let searchMay = search.toUpperCase()
      if (nameMay.includes(searchMay)) {
        return true;
      } else {
        return false;
      }
    });

    setBeerDisplay(newArrBeer);
  }; 


  if (isFetching === true) {
    return <Spinner animation="border" />;
  }

  return (
    <div>
      <Nav />
      {/* <SearchForm  /> */}
      <SearchForm filterBeer= {filterBeer} />
      <div style={{display:"flex",  justifyContent:"space-evenly", flexWrap:"wrap", alignItems:"center" }}>
      {beerDisplay.map((eachBeer) => {
        
        return (
          <div key={eachBeer._id} className="mt-3">
            
            <Link className="Links" to={`/${eachBeer._id}`}>
              <Card style={{ width: '15rem'}}>
                <Card.Body >
                  <Card.Img
                    style={{ width: "2rem", height: "6rem" }}
                    src={eachBeer.image_url}
                    alt="img"
                  />
                  <Card.Title>{eachBeer.name}</Card.Title>
                  <Card.Text>{eachBeer.tagline}</Card.Text>
                  <Card.Text style={{fontSize:"0.6rem"}}>Created by: {eachBeer.name}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
         </div>
        );
      })}
      </div>
    </div>
  );
}

export default ListBeer;
