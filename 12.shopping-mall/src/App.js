import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Row, Col, Button} from 'react-bootstrap/';
import {useEffect, useState} from 'react';
import pList from './data/ProductList';
import { Route, Routes, useNavigate, Link, Outlet } from 'react-router-dom';
import Detail from './page/Detail';
import axios from 'axios';
import Cart from './page/Cart';

/*
  ** 장바구니 만들기

  * 외부 라이브러리 사용(Redux)
  1) 설치 : npm install @reduxjs/toolkit react-redux
  2) store폴더 만들고, store.js파일 만들기
  3) index.js <Provider> 로 감싸기
*/


function App() {
  let [shops, setShops] = useState(pList);
  let [count, setCount] = useState(2);
  
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
      

      <Routes>
      <Route path='/' element={
          <>
            <div className='main-bg'/>
            <Container>
              <Row>
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


          </>
        }/>
        <Route path='/detail/:i' element={<Detail shops={shops} bg="green"/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<div>없는 페이지 입니다.</div>}/>
      </Routes>


    
    </div>
  );
}


function PListCol(props){
  const navigate = useNavigate();

  const goDetail = () => {
    navigate(`/detail/${props.index}`); // 클릭 시 '/detail' 경로로 이동
  }


  return(
    <>
      <Col lg={4}>
        <img src={`${process.env.PUBLIC_URL}/img/shop${props.index + 1}.jpg`} onClick={goDetail}></img>
        <h4>{props.shop.title}</h4>
        <p>{props.shop.price}</p>
      </Col>
    </>
  )
}



export default App;
