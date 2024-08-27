import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Row, Col, Button} from 'react-bootstrap/';
import {useEffect, useState} from 'react';
import pList from './data/ProductList';
import { Route, Routes, useNavigate, Link, Outlet } from 'react-router-dom';
import Detail from './page/Detail';
import axios from 'axios';

/*
  npm i react-router-dom
  npm i
  * ajax로 서버로부터 데이터 얻어오기
    1. 설치하기 : npm i axios
*/



function App() {
  let [shops, setShops] = useState(pList);
  let [count, setCount] = useState(2);
  // 페이지의 이동을 도와주는 함수
  let navigate = useNavigate();

  return (


    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Compuzon</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={() => {navigate('/');}}>Home</Nav.Link>
            <Nav.Link onClick={() => {navigate('/detail');}}>Detail</Nav.Link>
            <Nav.Link onClick={() => {navigate('/cart');}}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 

      {/*
      <Link to="/">홈</Link>&emsp;
      <Link to="/detail">상세페이지</Link>
      */}
      

      <Routes>
      <Route path='/' element={
          <>
            <div className='main-bg'/>
            <Container>
              <Row>
              {/*배포시 ~~~.com의 경로에 배포하면 상관없지만 ~~~.com/~~~/~~ 이런 하위경로이면 그림을 못찾는다고 나옴*/}
                {shops.map( (value, i) => {
                    return(
                      <PListCol shop={value} index={i}/>
                    );
                })}
              </Row>
            </Container>
            <Button variant="info" onClick={() => {
              axios.get(`https://raw.githubusercontent.com/professorjiwon/data/main/data${count}.json`)
                   .then((result) => {
                      console.log(count);
                      console.log(result.data);
                      let copy = shops.concat(result.data);
                      setShops(copy); 
                      setCount(count + 1);
                      
                    })
                   .catch(() =>{
                      console.log('실패');
                    })
            }}>서버에서 데이터 가져오기</Button>
           {/*
                *서버로 보낼떄
                axiox.post('url', 데이터)
                ex) axios.post('url', {name: 'kim'})

                * 동시에 요청을 여러개 할 때
                Promise.all([axiox.get('url'), axios.get('url'), axios.post('url',데이터)])
           */}

          </>
        }/>
        <Route path='/detail/:index' element={<Detail shops={shops} bg="green"/>}/>
        
        <Route path='*' element={<div>없는 페이지 입니다.</div>}/>
      </Routes>


    
    </div>
  );
}


function PListCol(props){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${props.index}`); // 클릭 시 '/detail' 경로로 이동
  }


  return(
    <>
      <Col lg={4}>
        <img src={`${process.env.PUBLIC_URL}/img/shop${props.index + 1}.jpg`} onClick={handleClick}></img>
        <h4>{props.shop.title}</h4>
        <p>{props.shop.price}</p>
      </Col>
    </>
  )
}



export default App;
