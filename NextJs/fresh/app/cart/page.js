import data1 from './data.js'


export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      <div className="cart-item">
        <p>상품명 {data1}</p>
        <p>$40</p>
        <p>1개</p>
      </div>
      <CartItem/>
    </div>
  );
}

//component
function CartItem() {
  return (
    <div>
      <div className="cart-item">
        <p>상품명</p>
        <p>$40</p>
        <p>1개</p>
      </div>
    </div>
  );
}