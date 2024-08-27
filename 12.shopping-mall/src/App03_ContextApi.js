import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Row, Col, Button} from 'react-bootstrap/';
import {createContext, useEffect, useState} from 'react';
import pList from './data/ProductList';
import { Route, Routes, useNavigate, Link, Outlet } from 'react-router-dom';
import Detail from './page/Detail';
import axios from 'axios';

/*
    * single page application의 단점
      - 컴포넌트 사이의 state 공유 어려움
      - props로 넘겨줘야 한다
    * 공유하는 파일을 만들어서 사용
      1. Context Api 문법
        잘 사용하지 않음
        - 성능 이슈
        - 재 사용이 어렵다
      2. Redux 같은 외부 라이브러리
         주로 사용
*/

// 1. Context Api

/*
  순서
  1) createContext()로 보관함 만들기
  2) context1.Provider 로 감싸기
  3) 하위 컴포넌트에서 사용 : useContext(context1);
*/

// createContext() : 보관함을 하나 만들었다 생각하면 됨
export let context1 = createContext();

function App() {
  let [shops, setShops] = useState(pList);
  let [count, setCount] = useState(2);

  let navigate = useNavigate();

  let [stock, setStock] = useState([10, 7, 5])

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
        <Route path='/detail/:index' element={
            <context1.Provider value = {{stock, shops}}>
              <Detail shops={shops}/>
            </context1.Provider>
          }/>
        
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
