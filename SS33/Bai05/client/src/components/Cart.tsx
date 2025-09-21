import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.items);

  return (
    <div>
      <h2>Your Cart</h2>
      <table border={1} width="100%">
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ textAlign: "center" }}>
                Empty product in your cart
              </td>
            </tr>
          ) : (
            cart.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>
                  <button>Remove</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
