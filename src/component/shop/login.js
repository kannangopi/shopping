import React, {useState} from 'react';
import {withRouter} from 'react-router';
import './login.css'
import "bootstrap/dist/css/bootstrap.min.css";
function Login(){
    let [userdetails,setUserdetails] = useState('');
    const [checkname, setCheckname] = useState('');
    const [ checkpassword, setCheckpassword] = useState('');
    console.log(checkname,checkpassword);
    let arr=[];
    const check =()=>{

        let temp = localStorage.getItem("shopuser");
        if (temp != null) {
             arr = JSON.parse(temp);
        }
        let pass =arr.filter((function (value,index){
            
                return(value.username === checkname && value.password === checkpassword);
            
        }));
        if( pass.length === 0){
            alert("type correct username and password");  
        }else{
            setTimeout(()=>window.location.href="/purchase")
            localStorage.setItem("cart",JSON.stringify([]));
        }
        
        
    }
    return(
        <div> 
             
                      
            <div className="login">
                <h1>LOGIN</h1>
                <table >
                    <tr>
                        <td>
                            USERNAME

                        </td>
                        <td>
                        <input type="text" onChange={e=>{setCheckname(e.target.value)}}></input>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            PASSWORD

                        </td>
                        <td>
                        <input type="password" onChange={e=>{setCheckpassword(e.target.value)}}></input>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                        <button className="btn btn-primary btn-block btn-large" onClick={check}>Login</button>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
export default withRouter(Login);