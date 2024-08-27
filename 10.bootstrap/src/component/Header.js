import logo1 from "./logo1.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";

const Header = () =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  


    return(
        <>
            <header>
                
                <img src={logo1} alt="logo" />
                <h2>The Joeun</h2>
                <div className="login">
                    <Button variant="outline-secondary" onClick={handleShow}>로그인</Button>&emsp;
                    <Button variant="outline-secondary" >회원가입</Button>
                    

                </div>
                
                <Login show={show} handleClose={handleClose} />
            </header>


        </>
    )


}
const Login = ({show, handleClose}) => {
    return (
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>ID</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>PW</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Login
            </Button>
        </Modal.Footer>
    </Modal>
    </>
    );
}





export default Header;