import React, { Component, useEffect } from "react";
import Purchase from "./purchase";
export default function Cart() {
  let temp = localStorage.getItem("cart");
  let arr = JSON.parse(temp);
  let sum = 0;
  arr.map((item, index) => {
    sum += item.price;
    return sum;
  });
  console.log(sum);

  let newcart = new Array();

  let remove = (index) => {
    if (temp != null) {
      newcart = JSON.parse(temp);
    }
    // delete newcart[index];
    newcart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(newcart));
    // console.log(newcart);
    window.location.href = "/cart";
  };
  return (
    <div>
      <h1>CART</h1>
      <button
        onClick={() => {
          window.location.href = "/purchase";
        }}
      >
        BACK TO SHOP
      </button>
      <table>
        {arr.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <img className="lap" src={item.ph} />
              </td>
              <td>{item.price}</td>
              <td>
                <button onClick={() => remove(index)}>remove from cart</button>
              </td>
            </tr>
          );
        })}
        <tr>
          <td >Total</td>
          <td >{sum}</td>
        </tr>
      </table>
      <br></br>
      <br></br>
    </div>
  );
}
