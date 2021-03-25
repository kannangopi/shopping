import React from "react";
import './home.css';
import notebook from "../photos/hp_notebook.jpg";
import g6 from "../photos/hp-g6.jpg";
import panache from "../photos/panach.jpg";
import basket from "../photos/basket.jpg";
function Home() {
  return (
    <div>
      <div class="container">
        <div class="row g-2">
          <div class="col-6">
            <div class="p-3 border bg-light">
            <img src={notebook} className="im"></img>
            </div>
          </div>
          <div class="col-6">
            <div class="p-3 border bg-light"><img src={g6} className="im"></img></div>
          </div>
          <div class="col-6">
            <div class="p-3 border bg-light"><img src={panache} className="im"></img></div>
          </div>
          <div class="col-6">
            {/* <div class="p-3 border bg-light">Custom column padding</div> */}
          </div>
        </div>
      </div>

      {/* <div>
             <img src={notebook}></img>
         </div>
         <div>
             <img src={g6}></img>
         </div>
         <div>
             <img src={panache}></img>
         </div>
         <div>

         </div> */}
    </div>
  );
}
export default Home;
