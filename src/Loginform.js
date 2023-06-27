import './Loginform.css';
import {useState} from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';
function Loginform()
{
    let [data,setdata]=useState({
        user_name:"",
        password:""
    })
    let navigate=useNavigate();
    function submit(e){
        e.preventDefault();

        axios.post("http://localhost:4000/user/login",{
            user_name:data.user_name,
            password:data.password
        })
        .then(res=>{
            if(res.status===200)
            {
                navigate('/');
            }
            else
            {
                console.log(res.data);
            }
            
        })


    }
    function handle(e){
        let newdata={...data};
        newdata[e.target.id]=e.target.value;
        setdata(newdata)

    }

    return(
        <div className="mainblock">
            <form onSubmit={(e)=>submit(e)} className="loginform"  >
           < h3 className='mt'>Login Form</h3>
                <input onChange={(e)=>handle(e)} value={data.user_name} placeholder='email' type='text' id='user_name' className="inputbox"></input>
                <br></br>
                <input onChange={(e)=>handle(e)} value={data.password} placeholder='password' type='password' id='password' className="inputbox"></input>
                <br></br>
                <button type='submit' className='btn btn-primary'>submit</button>
            </form>
        </div>
    )
}
export default Loginform