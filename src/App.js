import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';


import ListBeer from './pages/ListBeer';
import DetailsBeer from './pages/DetailsBeer';
import RandomBeer from './pages/RandomBeer';
import CreateBeer from './pages/CreateBeer';


function App() {

      return (
    <div className="App">



      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<ListBeer/>}/>
        <Route path='/:idBeer' element={<DetailsBeer/>}/>
        <Route path='/random' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<CreateBeer/>}/>


      </Routes>

   
    </div>
  );
}

export default App;
