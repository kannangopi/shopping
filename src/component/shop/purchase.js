import React, { useEffect, useState } from "react";
import notebook from "../photos/hp_notebook.jpg";
import g6 from "../photos/hp-g6.jpg";
import panache from "../photos/panach.jpg";
import basket from '../photos/basket.jpg';
import dell from '../photos/dellxps15.jpg';
import lenovo from '../photos/lenovoyoga.jpeg';
import acer from '../photos/AcerTravelmate.jpg'; 
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "../photos/item.css";
import "./pur.css"
export default function Purchase() {
 // const [shop,setShop]=useState('cart')
 const [cartitem , setCartitem] = useState(0);
  let cart = new Array();
  const [arr, setArr] = useState([]);
  arr.push(                                                       //available items for shopping
    {
      id:"p01",
      ph: notebook,
      name:"HPnotebook",
      price: 22300,handleStatusChange:"p02",
      ph: g6,
      name:'HPG6',
      price: 40000,
      count:1
    },
    { 
      id:"p03",
      ph: panache,
      name:'HPpanache',
      price: 50000,
      count:1
    },
    {
      id:"p04",
      ph: dell,
      name:'dell XPS15',
      price: 60000,
      count:1
    },
    {
      id:"p05",
      ph: acer,
      name:'acer travelmate',
      price: 54000,
      count:1
    },
    {
      id:"p06",
      ph: lenovo,
      name:'lenovo yoga',
      price: 62000,
      count:1
    }
  );
  localStorage.setItem("laptop", JSON.stringify(arr));
  let temp = localStorage.getItem("laptop");
  let temparr = JSON.parse(temp);
  let oldcart = localStorage.getItem("cart");
    let i =JSON.parse(oldcart);
  useEffect(()=>{
    setCartitem(i.length);
},[]);
  let add = (index,pid) => {                                  // add items to cart
    //setShop('no'); 
    let temp = arr[index];
    let oldcart = localStorage.getItem("cart");
    if (oldcart != null) {
      cart = JSON.parse(oldcart);
      let chk =cart.filter((value,index)=>{                     //checking duplication
        return value.id === pid;
      });
      if(chk.length != 0){
       alert("already added to cart.....! ")
        
      }else{
        alert(`${temp.name} added to cart`);
        cart.push(temp);
        setCartitem(cartitem + 1); 
      }
      console.log(chk);
       
    }else{
      alert(`${temp.name} added to cart`);
      cart.push(temp);
      setCartitem(cartitem + 1);
    }
    
    
    localStorage.setItem("cart", JSON.stringify(cart));
  };                          
  return (
    <div>
      <h1>Purchase</h1>
      <div className="divset" >
      <Link to="/cart"><img className="shopcart" src={basket} ></img>cart {cartitem}</Link>                
      </div>
      <table>
        {temparr.map((item, index) => {                          //display items form shopping
          return (
            <tr key={index}>
              <td>
                <img className="lap" src={item.ph} />
              </td>
              <td>
                <button className="btn btn-primary btn-block btn-large" onClick={() => add(index,item.id)}>ADD TO CART</button>
              </td>
            </tr>
          );
        })}

      </table>
    </div>
  );
}
