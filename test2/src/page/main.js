import { useState } from 'react';
import './main.css';
import { Button, Modal, Container, Row, Col  } from 'react-bootstrap';


function Main(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return(
      <div>
      {/* 네비게이션 바 */}
      <nav className="navbar">
        <div className="navbar-brand">업체명</div>
        <Button variant="primary" onClick={handleShow}>
          카테고리 보기
        </Button>
      </nav>

      {/* 카테고리 모달 */}
      <CategoryModal show={show} handleClose={handleClose} />
    </div>

    )   
}

function CategoryModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>전체 카테고리</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col md={3}>
              <ul className="modal-category-list">
                <li><a href="#computer-parts">컴퓨터 부품</a></li>
                <li><a href="#monitors">모니터</a></li>
                <li><a href="#printers">프린터ㆍ전산소모품</a></li>
                <li><a href="#keyboards">키보드ㆍ마우스ㆍ저장장치</a></li>
                <li><a href="#network">네트워크ㆍ케이블ㆍCCTV</a></li>
                <li><a href="#software">소프트웨어</a></li>
                <li><a href="#laptops">노트북ㆍ태블릿</a></li>
                <li><a href="#desktops">데스크탑ㆍ서버</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <ul className="modal-category-list">
                <li><a href="#apple">Apple</a></li>
                <li><a href="#tv">TVㆍ냉장고ㆍ세탁기ㆍ건조기</a></li>
                <li><a href="#home-appliances">생활ㆍ주방가전</a></li>
                <li><a href="#seasonal-appliances">계절가전</a></li>
                <li><a href="#furniture">가구ㆍ조명ㆍ전기</a></li>
                <li><a href="#smartphones">스마트폰ㆍ액세서리</a></li>
                <li><a href="#gaming">게임ㆍ드론ㆍ완구</a></li>
                <li><a href="#audio-video">음향ㆍ영상ㆍ카메라</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <ul className="modal-category-list">
                <li><a href="#sports">스포츠ㆍ아웃도어</a></li>
                <li><a href="#automotive">자동차ㆍ공구ㆍ안전</a></li>
                <li><a href="#refurbished">중고ㆍ리퍼비시</a></li>
                <li><a href="#services">컴퓨존 서비스</a></li>
                <li><a href="#exclusive">컴퓨존 전용관</a></li>
                <li><a href="#hit">HIT</a></li>
                <li><a href="#vacation">열심히 일한 자, 떠나라!</a></li>
                <li><a href="#assembly-pc">조립PC</a></li>
              </ul>
            </Col>
            <Col md={3}>
              <ul className="modal-category-list">
                <li><a href="#quote">견적</a></li>
                <li><a href="#discount">파격할인</a></li>
                <li><a href="#free-shipping">무료배송</a></li>
                <li><a href="#pickup">가산점빠른픽업</a></li>
                <li><a href="#events">이벤트</a></li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default Main;