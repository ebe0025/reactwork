import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function Signup() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">회원가입</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>아이디</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="아이디를 입력하세요"
              />
              <Form.Control.Feedback type="invalid">
                올바른 이메일 주소를 입력하세요.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="비밀번호를 입력하세요"
                minLength="6"
              />
              <Form.Control.Feedback type="invalid">
                최소 6자 이상의 비밀번호를 입력하세요.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPasswordConfirm">
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
                minLength="6"
              />
              <Form.Control.Feedback type="invalid">
                비밀번호를 다시 확인하세요.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicName">
              <Form.Label>이름</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="이름을 입력하세요"
              />
              <Form.Control.Feedback type="invalid">
                이름을 입력하세요.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicName">
              <Form.Label>이메일</Form.Label>
              <Form.Control
                required
                type="email"
                placeholder="이메일을 입력하세요"
              />
              <Form.Control.Feedback type="invalid">
                올바른 이메일 주소를 입력하세요.
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              가입하기
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;