import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import DetailShop from './page/detailShop';
import Main from './page/main';
import Site1 from './page/site1';
import Site2 from './page/site2';
import Signup from './page/signup';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path='/' element={<DetailShop/>}/>
        <Route path='/1' element={<Main/>}/>
        <Route path='/2' element={<Site1/>}/>
        <Route path='/3' element={<Site2/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </Router>

    

  );
}





export default App;
