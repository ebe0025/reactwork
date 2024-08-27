import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  let [pImg, setpImg] = useState('./img/gtx4080_1.jpg');

  return (
    <div className="App">
      {/* 헤더 */}
      <header className="bg-dark text-white p-3">
        <div className="container">
          <h1>Compuzone Clone</h1>
        </div>
      </header>

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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
        </div>

        {/* 추가 정보 섹션 */}
        <div className="row my-5">
          <div className="col-12">
            <h3>추가 정보</h3>
            <p>
              제품의 상세 사양, 리뷰, 기타 관련 정보를 여기에 나열하여 
              고객에게 더 많은 정보를 제공할 수 있습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 푸터 */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>© 2023 Compuzone Clone. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
