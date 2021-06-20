import React,{useEffect, useState, setState} from "react"
import {useHistory} from 'react-router-dom'
import axios from 'axios'



function Login() {
const history = useHistory();    
const [email,setEmail] = useState('');
const [password,setPassword] = useState('');


useEffect(()=>{
    if(localStorage.getItem("admin-info")){
        history.push('/adminHome');
    } else if (localStorage.getItem("user-info")) {
        history.push('/userHome');
    } else {
        
    }
},[])

async function submit() {
    let items = {email,password};
    items = JSON.stringify(items);
    const requestOptions = {
        method: 'POST',
        headers:{"Content-Type":"application/json"},
        body: items
    };
    let result = await fetch("http://localhost:8081/api/Api_c/Login",requestOptions);
    result = await result.json(result);
    
    if(result.admin_type==1){
        localStorage.setItem("admin-info",JSON.stringify(result));
        history.push("/adminHome");
    } else if(result.admin_type==2) {
        localStorage.setItem("user-info",JSON.stringify(result));
        history.push("/userHome");
    } 
}

return (
    <div className="row d-flex justify-content-center text-center">
        <div className="col-md-6">
            <form className="Loginform">
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
               

                <button type="button" className="btn btn-primary btn-block " onClick={submit}>Submit</button>
                
            </form>
            </div>
            </div>
        );
}

export default Login;