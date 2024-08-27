import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [counts, setCounts] = useState([0, 0, 0]); 
  let [title, setTitle] = useState(["초밥", "찬란한 아구", "역전우동"]);
  let [modal, setModal] = useState(false);
  let [days, setContent] = useState(["8월 22일", "7월 11일", "5월 23일"]);
  let [modalIndex, setModalIndex] = useState(0);
  let [inputValue, setInputValue] = useState("");
  let [delValue, setDelValue] = useState(1);

  return (
    <div className="App">
      <h2 className='title'>맛집 추천 INSTAR</h2>
      <button onClick={() => {
        let copy = [...title];
        copy[0] = "후참잘";
        setTitle(copy);
      }}>글 수정</button>

      {
        title.map(function(t, i){
          return(
            <div className='list' key={i}>
              <h4 onClick={() => {
                setModal(!modal);
                setModalIndex(i);
              }}>{t} </h4>
              <p>{days[i]} <span onClick={() => {
                let copy = [...counts];
                copy[i] = counts[i] + 1;
                setCounts(copy);
                }}>🍔</span>{counts[i]}</p>


                <button onClick={() => {
                        let copy = [...title]
                        copy.shift()
                        setTitle(copy);
                      }}>
                        삭제
                      </button>
            </div>
          )
        })
      }

      <input onChange={(e) => {setInputValue(e.target.value)}} />
      <button onClick={() => {
        let copy = [...title];
        copy.unshift(inputValue);
        setTitle(copy);
      }}>글추가</button><br/>


      {modal ? <Modal title={title} days={days} modalIndex={modalIndex} setTitle={setTitle}/> : null }
    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
      <h4>{props.title[props.modalIndex]}</h4>
      <p>{props.days[props.modalIndex]}</p>
      <p>상세내용</p>

      {/*원본이 바뀜 */}
      {/* <button onClick={() => {setTitle(["청담등심", "찬란한 아구", "역전우동"])}}>글수정</button>*/}
      <button onClick={() => {
        let copy = [...props.title]
        copy[props.modalIndex] = "청담등심";
        props.setTitle(copy);

      }}>글제목수정</button>
    </div>
  )
}

export default App;
