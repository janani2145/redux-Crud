// EmployeeTable.js
// import React from 'react';
import { useSelector } from 'react-redux';

const EmployeeTable = () => {
//   const employees = useSelector(state => state.employees.employees);

  return (
    <div>
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.fullName}</td>
              <td>{employee.email}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.birthDate}</td>
              <td>{employee.gender}</td>
              <td>{`${employee.address.streetAddress1}, ${employee.address.streetAddress2}`}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
