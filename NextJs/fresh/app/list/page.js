export default function List() {
  let name = "Kim";
  let products = ['Tomatoes', 'Pasta', 'Coconut'];

 

  return (
    <div>
      <h4 className='title'>상품목록</h4>
      {
        products.map(function(product, index) {
          return ( //결과들이 array에 담김 [<div>,<div>,<div>]
            <div className="food" key={index}>
              <h4>{index} {product} $40</h4>
            </div>
          );
        }
      )}
    </div>
  )
}
