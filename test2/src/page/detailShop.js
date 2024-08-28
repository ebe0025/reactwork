import { useNavigate } from "react-router-dom" 

function DetailShop() {
  let navigate = useNavigate();

    return (
        <div className="App">
        {/* 헤더 */}
        <Header/>
    
        {/* 메인 콘텐츠 */}
        <div className="container my-5">
          <div className="row">
            {/* 제품 이미지 섹션 */}
            <div className="col-md-5">
              <div className="card">
                <img
                  src={`${process.env.PUBLIC_URL}/img/gtx4080_1.jpg`}
                  alt="Product"
                  className="card-img-top"
                />
              </div>
            </div>
    
            {/* 제품 세부 정보 섹션 */}
            <div className="col-md-7">
              <h2>제품 이름</h2>
              <p className="text-muted">브랜드명 | 제품 카테고리</p>
              <hr />
              <h3 className="text-danger">₩1,200,000</h3>
              <p className="text-success">무료 배송</p>
              <div className="my-4">
                <button className="btn btn-primary btn-lg me-2">장바구니에 담기</button>
                <button className="btn btn-danger btn-lg">구매하기</button>
              </div>
              <hr />
              <h4>제품 설명</h4>
              <p>
              RTX 3080/부스트클럭: 1755MHz/PCIe4.0x16/GDDR6X(DDR6X)/출력단자: HDMI2.1, DP1.4/<br/>
              지원기능: 제로팬(0-dB기술), 8K 지원, 4K 지원, HDR 지원, HDCP 2.3/사용전력: 최대 350W/
              </p>
            </div>
          </div>
        </div>
    
        
    
        {/* 푸터 */}
          <Footer/>
    
    
      </div>
    )
}

function Header(){
    return (
      <header className="bg-dark text-white p-3">
      <div className="container">
        <h1>상표명</h1>
      </div>
      </header>
    )
}
  
  function Footer(){
  
    return(
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>© 2024 상표명. All rights reserved.</p>
        </div>
      </footer>
    )
  
}

export default DetailShop;