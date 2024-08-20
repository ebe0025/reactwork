import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function App() {
  // 주석
  /* 여러줄 주석 */
  //return <h1>React 처음 시작 또 시작 ㅕㅕㅕ</h1>

  // return안이 여러줄 일때
  /*
    1. 소괄호를 반드시 넣어준다
    2. 루트 태그는 반드시 넣어준다
  */

  return(
    <Fragment>{/* 여러줄 일 때는 반드시 최상위 태그가 존재해야 된다 */}
      <span>React</span>
      <span>여러 줄 리턴</span>
      {/* 주석 */}
    </Fragment>
  )
}

export default App;
