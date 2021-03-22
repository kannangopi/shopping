import React, { Component } from "react";
export default function Cart() {
  let temp = localStorage.getItem("cart");
  let arr = JSON.parse(temp);
  let newcart = new Array();
  let remove = (index) => {
    if (temp != null) { 
      newcart = JSON.parse(temp);
    }
    // delete newcart[index];
    newcart.splice(index, 1);
    localStorage.setItem("cart",JSON.stringify(newcart));
    console.log(newcart);
  };
  return (
    <div>
      <h1>CART</h1>
      <table>
        {arr.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <img className="lap" src={item.ph} />
              </td>
              <td>
                <button onClick={() => remove(index)}>remove from cart</button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
