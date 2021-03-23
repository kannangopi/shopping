import React, { useState } from "react";
import notebook from "../photos/hp_notebook.jpg";
import g6 from "../photos/hp-g6.jpg";
import panache from "../photos/panach.jpg";
import basket from '../photos/basket.jpg';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../photos/item.css";
import "./pur.css"
export default function Purchase() {
  let cart = new Array();
  const [arr, setArr] = useState([]);
  arr.push(
    {
      ph: notebook,
      name:"HPnotebook",
      price: 22300
    },
    {
      ph: g6,
      name:'HPG6',
      price: 40000
    },
    {
      ph: panache,
      name:'HPpanache',
      price: 50000
    }
  );
  localStorage.setItem("laptop", JSON.stringify(arr));
  let temp = localStorage.getItem("laptop");
  let temparr = JSON.parse(temp);

  let add = (index) => {
    let temp = arr[index];
    let oldcart = localStorage.getItem("cart");
    if (oldcart != null) {
      cart = JSON.parse(oldcart);
    }
    cart.push(temp);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${temp.name} added to cart`);
  };
  let gotoCart=()=>{console.log("image")}
  return (
    <div>
      <h1>Purchase</h1>
      <div className="divset">

      </div>
      <div>
        <Link to="/cart"><img className="shopcart" src={basket} onClick={gotoCart}></img></Link>
        </div>
      {/* <Router></Router> */}
      <table>
        {temparr.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <img className="lap" src={item.ph} />
              </td>
              <td>
                <button onClick={() => add(index)}>ADD TO CART</button>
              </td>
            </tr>
          );
        })}
        {/* <tr> 
                    <td ><img className="lap"  src={notebook}></img></td>
                    <td> <button>add to cart</button></td>
                </tr>
                <tr>
                    <td>
                        <img className="lap" src={g6}/>
                    </td>
                    <td>
                        <button>add to cart</button>
                    </td>
                    <td>
                        <img className="lap" src={panache}/>
                    </td>
                    <td>
                        <button>add to cart</button>
                    </td>
                </tr> */}
      </table>
    </div>
  );
}
