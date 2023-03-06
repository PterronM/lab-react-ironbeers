import { useState } from "react";
import Form from 'react-bootstrap/Form';


function SearchForm(props) {
  // console.log(props)
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    props.filterBeer(event.target.value);
  };

  return (
    <div>
      <Form.Group className="m-3">
        <Form.Label htmlFor="search">Buscar</Form.Label>
        <Form.Control
          type="text"
          name="search"
          value={search}
          onChange={handleSearch}
        />
      </Form.Group>
    </div>
  );
}

export default SearchForm;
