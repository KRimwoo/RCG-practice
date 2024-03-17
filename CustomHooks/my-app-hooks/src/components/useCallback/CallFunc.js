import { useEffect, useState, useCallback } from 'react';

function CallFunc() {
  const [number, setNumber] = useState(0);//input 바뀔 때마다 number update(component rendering)
  
  const someFunction = useCallback(() => {
    console.log(`someFunc: number: ${number}`);
    return;
  }, []);//첫 렌더링 때 함수 memoization됨(someFunction에 함수 객체의 주소값 저장) 컴포넌트 재렌더링 되어도 바뀌지 않음
  //someFunction호출하면 첫 렌더링때 저장한 number출력함
  //의존성 배열에 number넣으면 number바뀔 때마다 someFunction에 함수 재할당


  useEffect(() => {
    console.log('someFunction이 변경되었습니다.');
  }, [someFunction]);//input변화 -> 컴포넌트 렌더링 -> someFunction재할당되면 호출됨(함수 객체의 메모리 주소값이 다르기 때문)

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={someFunction}>call someFunc</button>
    </div>
  );
}