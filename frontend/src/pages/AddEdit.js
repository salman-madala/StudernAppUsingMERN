import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import './AddEdit.css'
import { toast } from 'react-toastify'

const newStudent = {
  name: '',
  email: '',
  phoneNumber: '',
  address: ''
}

const AddEdit = () => {

  const [state, setState] = useState(newStudent);

  const { name, email, phoneNumber, address } = state;

  const history = useHistory()

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getSingleUser(id)
    }
  }, [id])


  const getSingleUser = async (id) => {
    const response = await axios.get("http://localhost:3001/student/" + id);
    if (response.status === 200) {
      console.log(response.data);
      setState({ ...response.data })
    }
  }


  const addStudent = async (newStu) => {
    console.log("New Student Data: ", newStu)
    if (!id) {
      const response = await axios.post("http://localhost:3001/student/create", newStu);
      if (response.status === 200) {
        toast.success("Stuent Added Successfully")
      }
    }
  }

  const updateStudent = async (id,updateStu) => {
    console.log(updateStu);
    const response = await axios.put("http://localhost:3001/student/update/"+ id ,updateStu);
    if (response.status === 200) {
      toast.success("Stuent Updated Successfully")
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast.warning("Pleae Provide Required valid fields data")
    } else {

      if(!id){
        addStudent(state);
      }else {
        updateStudent(id,state);
      }
      setTimeout(() => {
        history.push("/")
      }, 500); 
    }
  }

  const handleInputChange = (e) => {
    // console.log(e.target)
    let { name, value } = e.target;
    // console.log(state);
    setState({ ...state, [name]: value });
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <form style={{ margin: "auto", padding: "15px", maxWidth: "500px", alignContent: "center" }} onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type="text" id='name' name='name' placeholder='Enter Name..' onChange={handleInputChange} value={name} />

        <label htmlFor='email'>Email</label>
        <input type="email" id='email' name='email' placeholder='Enter Email..' onChange={handleInputChange} value={email} />

        <label htmlFor='phoneNumber'>PhoneNumber</label>
        <input type="number" id='phoneNumber' name='phoneNumber' placeholder='Enter phoneNumber..' onChange={handleInputChange} value={phoneNumber} />

        <label htmlFor='address'>Address</label>
        <input type="text" id='address' name='address' placeholder='Enter Address..' onChange={handleInputChange} value={address} />

        <input type="submit" value={id ? "Update" : "Add"} />
      </form>
    </div>
  )
}

export default AddEdit