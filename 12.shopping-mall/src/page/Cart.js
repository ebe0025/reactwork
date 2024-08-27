import {Table, Button}  from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
// 변경시 1.
//import { a, changeName, increase } from '../store/store';

//userSlice로 분할 한 후 import
import { a, changeName, increase } from '../store/userSlice';
import { increaseCart } from '../store/store';

function Cart(){
    /*
    let state = useSelector((state) => {return state})
    console.log(state);
    */

   // let state2 = useSelector(state => state.user);
    let state = useSelector(state => state);
    let plist = useSelector(state => state.plist);

    // 변경시.2 store.js에 요청을 보내는 함수
    let dispatch = useDispatch();


    return (
        <div className='cart'>
            <br/>
            <h2>{state.user.name} {state.user.age}님의 CART LIST</h2>
            <br/>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {plist.map((item, index) => {

                        return(
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.count}</td>
                                <td>
                                    <Button variant='outline-secondary' onClick={() => {
                                        // dispatch(addCount(i)) 배열의 index 번호는 언제든지 변할 수 있다
                                        dispatch(increaseCart(item.id));
                                    }}>
                                        +
                                    </Button>
                                </td>
                            </tr>  
                        )
                    })}
                    {/*
                    <tr>
                        <td>{pList[0].id}</td>
                        <td>{pList[0].title}</td>
                        <td>{pList[0].count}</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>{pList[1].id}</td>
                        <td>{pList[1].title}</td>
                        <td>{pList[1].count}</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>{pList[2].id}</td>
                        <td >{pList[2].title}</td>
                        <td>{pList[2].count}</td>
                        <td>@fat</td>
                    </tr>
                    */}
                </tbody>
            </Table>

        </div>
    )
}



export default Cart;