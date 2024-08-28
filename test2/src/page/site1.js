import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import './stie1.css';

function Site1 (){
    
    return (
        <Container className="mt-5">
        <Row>
          {/* 제품 이미지 섹션 */}
          <Col md={6}>
            <Image src="https://via.placeholder.com/400x400" alt="Product Image" fluid />
          </Col>
  
          {/* 제품 정보 섹션 */}
          <Col md={6}>
            <h1>제품 이름</h1>
            <p>브랜드명 | 제품 카테고리</p>
            <h2 className="text-danger">₩120,000</h2>
            <p className="text-muted">세금 포함</p>
            <p className="text-success">무료 배송</p>
  
            <Button variant="primary" size="lg" className="me-3">장바구니에 담기</Button>
            <Button variant="danger" size="lg">바로 구매하기</Button>
  
            <hr />
  
            <h4>제품 설명</h4>
            <p>
              이 제품은 고품질의 재료로 제작되었으며, 최신 기술이 적용된 제품입니다. 
              세부 사항은 다음과 같습니다:
            </p>
            <ul>
              <li>항목 1</li>
              <li>항목 2</li>
              <li>항목 3</li>
            </ul>
          </Col>
        </Row>
  
        <hr />
  
        {/* 추천 상품 섹션 */}
        <h3 className="my-5">추천 상품</h3>
        <Row>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/200x200" />
              <Card.Body>
                <Card.Title>추천 상품 1</Card.Title>
                <Card.Text>₩50,000</Card.Text>
                <Button variant="primary">구매하기</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/200x200" />
              <Card.Body>
                <Card.Title>추천 상품 2</Card.Title>
                <Card.Text>₩60,000</Card.Text>
                <Button variant="primary">구매하기</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/200x200" />
              <Card.Body>
                <Card.Title>추천 상품 3</Card.Title>
                <Card.Text>₩70,000</Card.Text>
                <Button variant="primary">구매하기</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Img variant="top" src="https://via.placeholder.com/200x200" />
              <Card.Body>
                <Card.Title>추천 상품 4</Card.Title>
                <Card.Text>₩80,000</Card.Text>
                <Button variant="primary">구매하기</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
}

export default Site1;