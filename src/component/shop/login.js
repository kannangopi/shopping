import React, {useState} from 'react';
import {withRouter} from 'react-router';
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
            setTimeout(()=>window.location.href="/purchase",2000)
        }
        
        
    }
    return(
        <div>
            <label>name </label><input type="text" onChange={e=>{setCheckname(e.target.value)}}></input><br></br>
            <label>password</label><input type="password" onChange={e=>{setCheckpassword(e.target.value)}}></input>
            <button onClick={check}>Login</button>
        </div>
    );
}
export default withRouter(Login);