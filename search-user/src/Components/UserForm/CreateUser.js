import React, { useState } from "react";
 
const CreateUser = (props) => {
 const [record,setRecord] = useState([])
//  const {record,setRecord} = props

 const [formValues, setFormValues] = useState({
    firstname:"",
    lastname:"",
    email:"",
    number:""
  })

 const  handleInput = (e) => {
    const values = e.target.value;
    const name = e.target.name;
    setFormValues({...formValues, [name]: values})
    console.log(values , name)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {...formValues}
    console.log(record)
    setRecord([...record, data])
    console.log(record)
    setFormValues({firstname: "", lastname: "", email: "", number: ""})
  }
  
  return(
  <>
    <div id="tag-name"><h1>Employee Form</h1></div>
    <form  onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-sm-8">
          <label htmlFor="firstname" >First Name</label>
          <input type="text" className="form-control"
            value={formValues.firstname} onChange={handleInput}
            name="firstname" id="firstname" 
            placeholder="Enter Your Name..."
          />
        </div>
        <div className="col-sm-8">
          <label htmlFor="lastname" >Last Name</label>
          <input type="text" autoComplete="off" className="form-control"
            value={formValues.lastname} onChange={handleInput}
            name="lastname" id="lastname" 
            placeholder="Enter Your Last Name..."
          />
        </div>
        <div className="col-sm-8">
          <label htmlFor="firstname" >Email</label>
          <input type="text" className="form-control"
            value={formValues.email} onChange={handleInput}
            name="email" id="email" 
            placeholder="Enter Your Email..."
          />
        </div>
        <div className="col-sm-8">
          <label htmlFor="firstname" >Contact Num</label>
          <input type="number" className="form-control"
            value={formValues.number} onChange={handleInput}
            name="number" id="number" 
            placeholder="Enter Your Number"
          />
        </div>
        <div className="btn1">
          <button type="submit" >Sumbit</button>
        </div>
      </div>
    </form>
    <div>
      { record.map((item, index) => {
        return(
          <div className="list-data">    
            <p><h5>First Name:</h5>{item.firstname}</p>
            <p><h5>Last Name:</h5>{item.lastname}</p>
            <p><h5>Email:</h5>{item.email}</p>
            <p><h5>Contact Num:</h5>{item.number}</p>
          </div>
        )
      })}
    </div>
  </>
  );
};
export default CreateUser;
