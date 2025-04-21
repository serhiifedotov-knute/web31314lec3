'use client'
import styles from "./page.module.css";
import TableRow from './table-row'
import {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios'

export default function Home() {

  let [lectureNumber, setState] = useState(3);

  
    let [groupId, updateGroupId] = useState('');
  let [groups, updateGroups] = useState([]);

    useEffect( ()=>{

	axios.get('http://localhost:8080/groups').then( response=>{
	    console.log(response.data);
	    updateGroups(response.data);
	});

    },[]);

  const students = [
    {
    id:1,
    name:"Serhii",
    group:"asp122"
  },
    {
    id:2,
    name:"Max",
    group:"3-13"
  },
    {
    id:3,
    name:"Max",
    group:"3-13"
  },
    {
    id:4,
    name:"Max",
    group:"3-13"
  },
    {
    id:5,
    name:"Max",
    group:"3-13"
  },

]

  const addStudent = ()=>{
    console.log(`Add student`)
  }

  const addGroup = ()=>{
    console.log(`Add group: ${groupId}`)

	axios.post('http://localhost:8080/groups',{groupId} ).then( response=>{
	    if(response.status >= 200 && response.status < 400){
		console.log(response.status);
		console.log(response.data);
	    }else{
		alert('Error happen');
	    }
	});


  }

  const increaseLectureNumber = ()=>{
    lectureNumber = lectureNumber + 1;
    setState(lectureNumber)
    console.log(`New lecture numbre = ${lectureNumber}`)
  }

  return (
    <main>
    <h1 style={{color:'red'}}>Hello lecture 3</h1>
    <p>This is lecture number: {lectureNumber}</p>
    <table>

      <thead>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Group</td>
      </tr>
      </thead>
      <tbody>

      {students.map(student=><TableRow key={student.id} id={student.id} name={student.name} group={student.group}/>)}
      {/* <TableRow id="1" name="Serhii" group="asp122"/> -- old vairalb
      <TableRow id="2" name="Max" group="3-13"/> */} 
              {/* <tr>
            <td>1</td>
            <td>Serhii</td>
            <td>ASP122</td>
        </tr> */}
        {/* <tr> -- OLD variant
            <td>2</td>
            <td>MAX</td>
            <td>3-13</td>
        </tr> */}

      </tbody>
    </table>
    <div>
      {groups.map(gr=><div key={gr.groupId}>{gr.groupId}</div>)}
    </div>
    <div>
      <Button onClick={()=>{addStudent();}}>Add student</Button>
    </div>
    <div>
      <input value={groupId} onChange={e=>{
	    updateGroupId(e.target.value);
      }} placeholder="enter group id"/>
      <Button onClick={()=>{addGroup();}}>Add Group</Button>
    </div>
    <div>
      <Button onClick={()=>{increaseLectureNumber();}}>Increase Lecture NUmber</Button>
    </div>
    </main>
  );
}
