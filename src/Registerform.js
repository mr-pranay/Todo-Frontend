import axios from "axios";
import './Loginform.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Registerform()
{
    let [data,setdata]=useState({
        user_name:"",
        full_name:"",
        phone_no:"",
        password:"",
        
    })
    let navigate=useNavigate();
    function ubmit(e)
    {
        e.preventDefault();
        axios.post("http://localhost:4000/user/",{
            user_name:data.user_name,
            full_name:data.full_name,
            phone_no:data.phone_no,
            password:data.password
        })
        .then(response=>{
            console.log(response)
            navigate('/Loginform')

        })
    }

    function handle(e)
    {
        let newdata={...data};
        newdata[e.target.id]=e.target.value;
        setdata(newdata)
    }
    
    return(
        <div className="mainblock">
            <form onSubmit={(e)=>ubmit(e)} className="loginform "  >
                <h3>Register Form</h3>
                <input onChange={(e)=>handle(e)} value={data.user_name} id="user_name" placeholder="user name" type="text" className="inputbox"></input>
                <br></br>
                <input onChange={(e)=>handle(e)} value={data.full_name} id="full_name" placeholder="full Name" type="text" className="inputbox"></input>
                <br></br>
                <input onChange={(e)=>handle(e)} value={data.phone_no} id="phone_no" placeholder="phone no" type="text" className="inputbox"></input>
                <br></br>
                <input onChange={(e)=>handle(e)} value={data.password} id="password" placeholder="Password" type="password" className="inputbox"></input>
                <br></br>
                <button  className="btn btn-primary" type="submit" >submit</button>
            </form>
        </div>
    )
}
export default Registerform;