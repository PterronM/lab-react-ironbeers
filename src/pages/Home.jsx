import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";



function Home() {
    return (
        <div className="mt-3" style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"20px" }}>

    

        <Link className="Links" to="/beers">
        <Card style={{ width: '18rem'}}>
          <Card.Img style={{height:'10rem'}} variant="top" src="https://barradeideas.com/wp-content/uploads/2017/08/machismo-restaurantes-710-697x375.jpg"/>
          <Card.Body>
            <Card.Title>All Beer</Card.Title>
            <Card.Text>
              Bichea todas nuestras cervezas
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>


        <Link className="Links" to="/random">
        <Card style={{ width: '18rem'}}>
          <Card.Img style={{height:'10rem'}} variant="top" src="http://vivirenlatierra.es/wp-content/uploads/2017/03/GRIFOS-EN-SEGUNDO-T%C3%89RMINO-768x514.jpg"/>
          <Card.Body>
            <Card.Title>Random Beer</Card.Title>
            <Card.Text>
              Dejanos sorprenderte.
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>


        <Link className="Links" to="/new-beer">
        <Card style={{ width: '18rem' }}>
          <Card.Img style={{height:'10rem'}} variant="top" src="https://imgmedia.buenazo.pe/650x358/buenazo/original/2021/10/01/6157433df6b717001a4ec64a.jpg" />
          <Card.Body>
            <Card.Title>New Beer</Card.Title>
            <Card.Text>
              Sube tu cerveza!!
            </Card.Text>
          </Card.Body>
        </Card>
        </Link>


    </div>

      );
    }

export default Home;
