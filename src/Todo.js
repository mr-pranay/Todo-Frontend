import axios from 'axios';
import {useState,useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';

function Todo(){
    const [todo_list,settodo_list]=useState([])
    const [loading,setloading]=useState(false);
    useEffect(()=>{
        fetch("http://localhost:4000/todo/")
        .then((response)=>response.json())
        .then((json)=>{settodo_list(json)})
    },[todo_list])
    let navigate=useNavigate();

    const sortData = () => {
        const sortedData = [...todo_list].sort((a, b) =>a.priority-b.priority);
        settodo_list(sortedData);
      };
    function delete_row(id)
    {
        console.log(id);
        axios.delete(`http://localhost:4000/todo/${id}`)
        .then(res=>{
            
            if(res.status===200)
            {
                settodo_list([])
            }
            else
            {
                console.log("error")
            }
        }

        )
    }

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>Task Number</th>
                        <th>task heading</th>
                        <th>Task description</th>
                        <th>Time</th>
                        <th><button className='btn btn-primary' >Status</button></th>
                        <th><button className='btn btn-primary' onClick={sortData}>Priority</button></th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todo_list.map((eachitem)=>(
                            <tr key={eachitem.id}>
                                <td>{eachitem.id}</td>
                                <td>{eachitem.task_head}</td>
                                <td>{eachitem.task_desc}</td>
                                <td>{eachitem.deadline}x</td>
                                <td>{eachitem.t_status}</td>
                                <td>{eachitem.priority}</td>
                                <td><button className='bth btn-primary'>Update</button></td>
                                <td><button className='btn btn-secondary' onClick={()=>delete_row(eachitem.id)} >Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default Todo