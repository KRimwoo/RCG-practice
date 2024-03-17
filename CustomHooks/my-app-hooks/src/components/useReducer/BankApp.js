import { useState, useReducer } from "react";

// reducer - state업데이트 하는 역할
// dispatch - state업데이트 위한 요구
// action - 요구의 내용

const reducer = (state, action) => {
    console.log('reducer is now working!', state, action);

    switch (action.type) {
        case 'deposit':
            return state + action.payload;
        case 'withdraw':
            return state - action.payload;
    }
};
function BankApp() {
    const [number, setNumber] = useState(0);
    const [money, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h2>useReducer BankApp</h2>
            <p>잔고: {money}원</p>
            <input 
                type="number" 
                value={number}
                onChange={(e) => setNumber(parseInt(e.target.value))}
                step="1000"
            />
            {/* 원하는 action을 매개변수로 전달할 수 있음 */}
            <button onClick={() => {
                dispatch({type: "deposit", payload: number});
            }}>예금</button>
            <button onClick={() => {
                dispatch({type: "withdraw", payload: number});
            }}>출금</button>
        </div>
    );
}

export default BankApp;