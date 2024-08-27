import { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import './../App.css';
import {context1} from './../App.js';

function Detail (props) {
    // useContext() : Context1을 해체 {stock, clothes}
   /*
    let a = useContext(context1);

    console.log(a);
    console.log(a.stock);
    */

    let {stock, shops} = useContext(context1);
    console.log(stock);
    console.log(shops);

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
                        <Button variant="info">주문하기</Button>
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

    let {stock} = useContext(context1);
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
            {[<div>{stock}</div>, <div>{stock[1]}</div>, <div>{stock[tab]}</div>][tab]}
        </div>
    )
}

export default Detail;