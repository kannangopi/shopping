import React, { useState } from "react";
import notebook from "../photos/hp_notebook.jpg";
import g6 from "../photos/hp-g6.jpg";
import panache from "../photos/panach.jpg";
import "../photos/item.css";
export default function Purchase() {
    let cart =new Array();
  const [arr, setArr] = useState([]);
  arr.push(
    {
      ph: notebook,
      price: 22300,
    },
    {
      ph: g6,
      price: 40000,
    },
    {
      ph: panache,
      price: 50000,
    }
  );
  localStorage.setItem("laptop", JSON.stringify(arr));
  let temp = localStorage.getItem("laptop");
  let temparr = JSON.parse(temp);

  let add=(index)=>{
      let temp= arr[index];
      let oldcart=localStorage.getItem("cart");
      if(oldcart != null){
          cart=JSON.parse(oldcart);
      }
      cart.push(temp);
      localStorage.setItem("cart",JSON.stringify(cart));

      console.log(cart);
  };
  return (
    <div>
      <h1>Purchase</h1>
      <table>
        {temparr.map((item, index) => {
          return (
            <tr key={index}>
              <td >
                <img className="lap" src={item.ph} />
              </td>
              <td>
                        <button onClick={()=>add(index)}>ADD TO CART</button>
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
