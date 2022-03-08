import axios from "axios"
import React,{ useState,useEffect } from "react"
import { useParams,Link } from "react-router-dom"
import './View.css'
const View = () => {

  const [student,setState] = useState(null)

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
  };

  return (
    <div style={{marginTop:"150px"}}>
      <div className="card">
        <div className="card-header">
          <p>Student Details</p>
        </div>
        <div className="container">
          <strong>ID:</strong>
          <span>{id}</span>
          <br /> <br />

          <strong>Name:</strong>
          <span>{student && student.name}</span>
          <br /> <br />

          <strong>Email:</strong>
          <span>{student && student.email}</span>
          <br /> <br />

          <strong>PhoneNumber:</strong>
          <span>{student && student.phoneNumber}</span>
          <br /> <br />

          <strong>Address:</strong>
          <span>{student && student.address}</span>
          <br /> <br />

          <Link to="/">
              <button className="btn btn-edit">Back</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default View