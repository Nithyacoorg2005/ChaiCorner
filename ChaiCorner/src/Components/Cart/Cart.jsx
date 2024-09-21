import React from 'react';

const CartPage = ({ cartItems, handleIncrease, handleDecrease, handleRemove }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <h1 style={{marginTop:"50px",marginLeft:"50px"}}>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <table style={{  width: "290%",
    margin: "20px auto",
    borderCollapse: "collapse",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", marginLeft:"50px"
  }} >
            <thead>
              <tr >
                <th style={{ 
    textAlign:"left"}}  >Item</th>
                <th style={{textAlign:"left"}} >Price</th>
                <th style={{width:"50px",marginLeft:"10px",}}  >Quantity</th>
                <th style={{ padding: "15px", borderBottom: '1px solid #ddd', textAlign: 'center', }} >Total</th>
                <th style={{width:"50px"}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleDecrease(index)}>-</button>
                    {item.quantity}
                    <button style={{marginBottom:"10px"}} onClick={() => handleIncrease(index)}>+</button>
                  </td>
                  <td style={{ padding: "15px", textAlign: 'center', fontWeight: 'bold' }}>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => handleRemove(index)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <h2 style={{marginLeft:"50px"}}>Total Price: ${totalPrice.toFixed(2)}</h2>
        </div>
      ) : (
        <p style={{marginLeft:"60px"}}>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
