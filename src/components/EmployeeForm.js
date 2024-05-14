
const EmployeeForm = () => {
  
  return (
    <div className="container">
      <h1>Employee Registration</h1>
      <form class="form">
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>
        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" required />
          </div>
        </div>
        <div className="gender-box">
          <h3>Gender</h3>
          <div className="gender-option">
            <div className="gender">
              <input type="radio"  name="gender" checked />
              <label for="check-male">male</label>
            </div>
            <div className="gender">
              <input type="radio"  name="gender" />
              <label for="check-female">Female</label>
            </div>
            <div className="gender">
              <input type="radio"  name="gender" />
              <label for="check-other">prefer not to say</label>
            </div>
          </div>
        </div>
        <div className="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address"/>
          <input type="text" placeholder="Enter street address line 2" />
          </div>
         
          <div className="input-box">
          <label>Department</label>
            <div className="select-box">
              <select>
                <option hidden></option>
                <option>Manager</option>
                <option>Staff</option>
                
              </select>
            </div>
           
          <div className="input-box">
            <label>Salary</label>
            <input type="number" placeholder="Enter your salary" required />
          </div>
        </div>
         
        
        <button>Submit</button>
      </form>
    
    </div>
  );
};

export default EmployeeForm;
