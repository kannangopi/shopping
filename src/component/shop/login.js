import React, {useState} from 'react';
function Login(){
    let [userdetails,setUserdetails] = useState('');
    const [username, setusername] = useState('');
    const [ password, setpassword] = useState('');
    console.log(username,password);
    let arr=[];
    const check =()=>{
        let temp = localStorage.getItem("shopuser");
        if (temp != null) {
             arr = JSON.stringify(temp);
        }
        let pass =arr.filter((function (value,index){
            return (1);
        }));
        console.log(pass);
    }
    return(
        <div>
            <label>name </label><input type="text" onChange={e=>{setusername(e.target.value)}}></input><br></br>
            <label>password</label><input type="password" onClick={e=>{setpassword(e.target.value)}}></input>
            <button onClick={check}>Login</button>
        </div>
    );
}
export default Login;