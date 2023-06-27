import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Addproduct.css'


function Addproduct()
{
    let [data,setData]=useState({
        task_head:"",
        task_desc:"",
        deadline:"",
        t_status:"",
        priority:""
    })
    let navigate=useNavigate();

    

    function handlesubmit(e)
    {
        e.preventDefault();
        axios.post("http://localhost:4000/todo/",{
            task_head:data.task_head,
            task_desc:data.task_desc,
            deadline:data.deadline,
            t_status:data.t_status,
            priority:data.priority
        })
        .then(res=>{
            console.log(res);
            if(res.status===200)
            {
                navigate("/");
            }
            else{
                console.log("something went wrong");
            }
        })
    }
    function handle(e)
    {
        let newdata={...data};
        newdata[e.target.id]=e.target.value;
        setData(newdata);
        console.log(newdata)
    }



    return (
        <div className="addformmain">
            <form  className="addform" onSubmit={(e)=>handlesubmit(e)}>
                <h3>Add Task</h3>
                <input placeholder="Task heading" id="task_head" onChange={(e)=>handle(e)} value={data.task_head} type="text" className="input"></input>
                <br></br>
                <input placeholder="Task description" id="task_desc" onChange={(e)=>handle(e)} value={data.task_desc} type="text" className="input"></input>
                <br></br>
                <input placeholder="deadline" id="deadline" onChange={(e)=>handle(e)} value={data.deadline} type="date" className="input"></input>
                <br></br>
                <input placeholder="status" id="t_status" onChange={(e)=>handle(e)} value={data.t_status} type="number" className="input"></input>
                <br></br>
                <input placeholder="priortity" id="priority" onChange={(e)=>handle(e)} value={data.priority} type="number" className="input"></input>
                <br></br>
                <button className="btn btn-primary" type="submit">Add task</button>
            </form>
        </div>
    )
}
export default Addproduct;