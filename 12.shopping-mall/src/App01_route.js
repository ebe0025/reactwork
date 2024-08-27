import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, Container, Row, Col} from 'react-bootstrap/';
import {useState} from 'react';
import pList from './data/ProductList';
import { Route, Routes, useNavigate, Link, Outlet } from 'react-router-dom';
import Detail from './page/Detail';

/*
   * react-router-dom
    - 기존의 페이지 나누기
      만약 /detail로 접속하면 기존의 index.html파일을 모두 비운 후 페이지를 보여줌
    - 페이지를 교체시켜주는 api : router-dom

    * 실행 순서
      1. 설치 : npm i react-router-dom
      2. index.js 파일에서 <BorwerRouter></BorwerRouter>
*/


function App() {
  let [shops, setShops] = useState(pList);
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
            <Nav.Link onClick={() =>{navigate(1);}}>앞으로이동</Nav.Link>
            <Nav.Link onClick={() =>{navigate(-1);}}>뒤로이동</Nav.Link>
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
          </>
        }/>
        <Route path='/detail' element={<div><Detail shops={shops}/></div>}/> {/* 하나의 페이지 */}
        {/*<Route path='/detail/0' element={<div><Detail shops={shops[0]}/></div>}/> */}
        {/* path에 파라미터로 넘겨줄 수 있음 */}
        <Route path='/detail/:index' element={<Detail shops={shops}/>}/>
        
        {/* 파라미터를 여러개 넘겨주기 */}
        <Route path='/detail/:index/:member' element={<Detail shops={shops}/>}/>


        <Route path='/cart' element={<div>장바구니</div>}/>

{/*
        <Route path='/about' element={<About/>}/>
        <Route path='/about/member' element={<div>사람의 정보</div>}/>
        <Route path='/about/location' element={<div>강남대로</div>}/>
*/}
{/* NestedRoutes ~~의 하위의 것들을 하위요소로 넣어서 페이지 보여주기 */}
        <Route path='/about' element={<About/>}>
          <Route path='member' element={<div>사람의 정보</div>}/>
          <Route path='location' element={<div>강남대로</div>}/>
        </Route>
        <Route path='*' element={<div>없는 페이지 입니다.</div>}/>
      </Routes>


    
    </div>
  );
}

function About(){
  return(
    <>
      <h4>회사 정보들</h4>
      <Outlet></Outlet>
      <p>더조은 회사</p>
      
    </>
  )
}

function PListCol(props){
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/detail/${props.index + 1}`); // 클릭 시 '/detail' 경로로 이동
  }


  return(
    <>
      <Col lg={4}>
        <img src={`${process.env.PUBLIC_URL}/img/shop${props.index}.jpg`} onClick={handleClick}></img>
        <h4>{props.shop.title}</h4>
        <p>{props.shop.price}</p>
      </Col>
    </>
  )
}



export default App;
