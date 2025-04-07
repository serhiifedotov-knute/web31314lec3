'use client'
import styles from "./page.module.css";
import TableRow from './table-row'
import {useState} from 'react'
import Button from 'react-bootstrap/Button';

export default function Home() {

  let [lectureNumber, setState] = useState(3);

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
      <Button onClick={()=>{addStudent();}}>Add student</Button>
    </div>
    <div>
      <Button onClick={()=>{increaseLectureNumber();}}>Increase Lecture NUmber</Button>
    </div>
    </main>
  );
}
