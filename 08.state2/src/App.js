import logo from './logo.svg';
import './App.css';
import Views from './component/View';
import Controller from './component/Controller';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function onChangeInput(e){
    setText(e.target.value);
  }

  const onClickBtn = (value) => {
      setCount(count + value);
  }
  // useEffect() : 재렌더링이 완료되었을 때 내가 정의한 함수 실행
  // lifecycle를 제어하는데 사용, 타이머 서버에서 데이터를 가져올때 등 lifecycle에서 시작시, 변경될 때, 랜더링이 끝날 때
  useEffect(() => {
    console.log("update : " + count + ", " + text);
  }, [count, text]);

  return (
    <div className="App">
      <h1>Counter</h1>
      <input value={text} onChange={onChangeInput}/>
      <Views count={count}/>
      <Controller onClickBtn={onClickBtn}/>
    </div>
  );
}

export default App;
