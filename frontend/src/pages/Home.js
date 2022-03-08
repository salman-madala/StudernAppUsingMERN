import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import Pagination from './Pagination/Pagination'

const Home = () => {
  const [data, setData] = useState([]);
  const [perpage,setPerpage] = useState([]);

  useEffect(() => {
    getUsers();
  }, [])

  const getUsers = async () => {
    const response = await axios.get("http://localhost:3001/student/getall");
    if (response.status === 200) {
      setData(response.data);
      setPerpage(response.data.slice(0,2));
    }
  }

  const DeleteStudent = async (stu) => {

    if (window.confirm("Are you sure you want to delete the student ? " + stu.name)) {
      const response = await axios.delete("http://localhost:3001/student/" + stu._id);
      if (response.status === 200) {
        console.log(response);
        toast.success("Student Deleted Successfully");
        getUsers();
      }
    }
  }

  const PageHandler = (pageNumber,itemsPerPage) => {
    setPerpage(data.slice((pageNumber*itemsPerPage)-itemsPerPage,pageNumber*itemsPerPage));
    console.log(pageNumber,itemsPerPage);
  }

  const ItemsPerPage = (itemsPerPage) =>{
    setPerpage(data.slice(0,itemsPerPage));
  }

  return (
    <div className='container'>
      {data.length >= 1 ? <div>
        <table className="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>PhoneNumber</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {perpage.map((student) => {
              return (
                <tr key={student._id}>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>{student.phoneNumber}</td>
                  <td>{student.address}</td>
                  <td>
                    <Link to={'/update/' + student._id}>
                      <button className="btn btn-edit">Edit</button>
                    </Link>
                    <button className="btn btn-delete" onClick={() => DeleteStudent(student)}>Delete</button>
                    <Link to={'/view/' + student._id}>
                      <button className="btn btn-view">View</button>
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <br />
        <Pagination data={data} PageHandler ={PageHandler} ItemsPerPage={ItemsPerPage}/>
      </div>
        :
        <div>No data</div>
      }

      
    </div>
  )
}

export default Home