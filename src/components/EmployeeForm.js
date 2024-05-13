import { useState } from "react";
const EmployeeForm = () => {

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dob: '',
    phoneNumber: '',
    address: '',
    department: '',
    position: '',
    startDate: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
 
    setFormData({
      fullName: '',
      email: '',
      dob: '',
      phoneNumber: '',
      address: '',
      department: '',
      position: '',
      startDate: '',
      salary: '',
      emergencyContact: ''
    });
  };

  return (
    <div className="container">
      <h1>Employee Registration</h1>
      <form class="form">
        <div class="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        <div class="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>
        <div class="column">
          <div class="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div class="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div>
        <div class="gender-box">
          <h3>Gender</h3>
          <div class="gender-option">
            <div class="gender">
              <input type="radio"  name="gender" checked />
              <label for="check-male">male</label>
            </div>
            <div class="gender">
              <input type="radio"  name="gender" />
              <label for="check-female">Female</label>
            </div>
            <div class="gender">
              <input type="radio"  name="gender" />
              <label for="check-other">prefer not to say</label>
            </div>
          </div>
        </div>
        <div class="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address"/>
          <input type="text" placeholder="Enter street address line 2" />
          <label>Department</label>
          <div class="column">
            <div class="select-box">
              <select>
                <option hidden></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
            <div class="select-box">
              <select>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
                <option></option>
              </select>
            </div>
          </div>
          <div class="column">
            <input type="text" placeholder="Enter your region" required />
            <input type="number" placeholder="Enter postal code" required />
          </div>
        </div>
        <button>Submit</button>
      </form>
      {/* <form className="form" onSubmit={handleSubmit}>
        <div className="input-box">
          <label>Full Name:</label>
          <input type="text" name="fullName"  value={formData.fullName} onChange={handleChange} />
          
        </div>
        <div className="input-box">
          <label>Email:</label>
          <input type="email" name="email"   value={formData.email} onChange={handleChange} />
        
        </div>
        <div className="input-box">
          <label>Date of Birth:</label>
          <input type="date" name="dob"   value={formData.dob} onChange={handleChange} />
        </div>
        <div className="input-box">
          <label>Phone Number:</label>
          <input type="tel" name="phoneNumber"   value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div className="gender-option">
        <label>Gender:</label>
            <div className="gender">
              <input type="radio" name="gender" />
              <label >male</label>
            </div>
            <div className="gender">
              <input type="radio" name="gender" />
              <label>Female</label>
            </div>
            </div>
        <div className="input-box">
          <label>Address:</label>
          <input type="text" name="address"   value={formData.address} onChange={handleChange} />
        </div>
        <div className="input-box">
          <label>Department:</label>
          <input type="text" name="department"   value={formData.department} onChange={handleChange} />
        </div>
        <div className="input-box">
          <label>Position:</label>
          <input type="text" name="position"  value={formData.position} onChange={handleChange} />
        </div>
        <div className="input-box">
          <label>Start Date:</label>
          <input type="date" name="startDate"   value={formData.startDate} onChange={handleChange} />
        </div>
        <div className="input-box">
          <label>Salary:</label>
          <input type="number" name="salary"  value={formData.salary} onChange={handleChange} />
        </div>
       
        <button  className="btn btn-primary
        " type="submit">Register</button>
      </form> */}
    </div>
  );
};

export default EmployeeForm;
