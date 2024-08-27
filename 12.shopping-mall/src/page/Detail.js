import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './../App.css';
import { cartItem } from "../store/store";
import { useDispatch } from "react-redux";

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
function Detail (props) {

    let {index} = useParams();

    let findId = props.shops.find(function(x) {
        return x.id == index;
    })


    let [alert, setAlert] = useState(true);

    let [tab, setTab] = useState(0);


    let [num, setNum] = useState('');
    useEffect(() => {
        if(isNaN(num) == true) {  
            alert('그러지마요');
        }
    },[num])


    let [fade2, setFade2] = useState('start');

    let dispatch = useDispatch();

    let navigate = useNavigate();

    useEffect(() => {
        setFade2('end');
    }, [])

    return (
        <div>
            <input onChange={(e) => {setNum(e.target.value)}} />

            { alert ? <h2>2초 이내 구매시 할인</h2> : null}
            <button onClick={() => {setAlert(true)}}>alert 버튼</button>

            <Container className={fade2}>
                <Row>
                    <Col lg={6}>
                        <img src={`${process.env.PUBLIC_URL}/img/shop${findId.id+1}.jpg`} />
                    </Col>    
                    <Col lg={6}>
                        <h4>{findId.title}</h4>
                        <p>{findId.content}</p>
                        <p>{findId.price}원</p>
                        <Button variant="info" onClick={() => {
                            dispatch(cartItem(findId));
                            navigate('/cart');
                        }}>cart</Button>
                    </Col>
                </Row>
            </Container>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(0)}} eventKey="link0">BUTTON 0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(1)}} eventKey="link1">BUTTON 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={() => {setTab(2)}} eventKey="link2">BUTTON 2</Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab} />

        </div>
    )
}


function TabContent({tab}){
    let [fade, setFade] = useState('');

    useEffect(() => {
        // 0.1초후 적용
        setTimeout(() => {setFade('end')}, 100);
        return () =>{
            // 리턴이 더 빨리 작동함
            setFade('start')
        }
    }, [tab])





    return(
        <div className={fade}> 
            {[<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][tab]}
        </div>
    )
}

export default Detail;