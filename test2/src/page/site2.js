import Button from 'react-bootstrap/Button';
import {Nav, Navbar, Modal} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Site2() {
    let [login, setLogin] = useState("");
    let navigate = useNavigate();
    const [show, setShow] = useState(false);

    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand href="#home">메인페이지</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#services">게시판</Nav.Link>
                    
                    {login === "" ? <Nav.Link  onClick={() => setShow(true)}>로그인</Nav.Link>
                                     : <Nav.Link href="/login">logout</Nav.Link>}
                    <Nav.Link onClick={() => navigate('/signup')}>회원가입</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>모달 제목</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                여기 모달 내용이 들어갑니다. 
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={() => setShow(false)}>
                    닫기
                </Button>
                <Button variant="primary" onClick={() => setShow(false)}>
                    저장하기
                </Button>
                </Modal.Footer>
            </Modal>            

        </div>
  );
}

export default Site2;