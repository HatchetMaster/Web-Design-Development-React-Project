import { useState, useEffect } from 'react';
import { getEmployees, deleteEmployee } from '../services/employeeService';
import { seedEmployees, clearEmployees } from '../services/seedData';
import { Link } from 'react-router-dom';
import './employeeList.css';

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  // Load employees when component mounts
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = () => {
    const data = getEmployees();
    setEmployees(data);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this employee?')) {
      deleteEmployee(id);
      loadEmployees(); // Refresh the list
      alert('Employee deleted successfully!');
    }
  };

  const handleSeedData = () => {
    const count = prompt('How many employees would you like to add? (1-1000)', '25');
    
    if (count === null) return;
    
    const numCount = parseInt(count);
    
    if (isNaN(numCount) || numCount < 1 || numCount > 1000) {
      alert('Please enter a number between 1 and 1000');
      return;
    }

    if (window.confirm(`This will add ${numCount} sample employees. Continue?`)) {
      const result = seedEmployees(numCount);
      if (result.success) {
        loadEmployees();
        alert(`Successfully added ${numCount} employees!`);
      } else {
        alert(`Failed to add employees. Error: ${result.error}`);
      }
    }
  };

  const handleClearAll = () => {
    if (window.confirm('WARNING: This will delete ALL employees. Are you sure?')) {
      clearEmployees();
      loadEmployees();
      alert('All employees have been cleared.');
    }
  };

  return (
    <div className="employee-list-container">
      <div className="list-header">
        <h2>Employee Roster ({employees.length})</h2>
        <div className="header-actions">
          <button onClick={handleSeedData} className="btn-seed">
            Seed Data
          </button>
          <button onClick={handleClearAll} className="btn-clear">
            Clear All
          </button>
          <Link to="/employeeForm" className="btn-add">
            + Add New Employee
          </Link>
        </div>
      </div>

      {employees.length === 0 ? (
        <div className="empty-state">
          <p>No employees found. Add your first employee to get started!</p>
          <div className="empty-actions">
            <Link to="/employeeForm" className="btn-primary">
              Add Employee
            </Link>
            <button onClick={handleSeedData} className="btn-secondary">
              Seed Sample Data
            </button>
            <button onClick={handleClearAll} className="btn-clear">
              Clear All
            </button>
          </div>
        </div>
      ) : (
        <div className="employee-table-wrapper">
          <table className="employee-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Position</th>
                <th>Department</th>
                <th>Pay Rate</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName} {employee.lastName}</td>
                  <td>{employee.email || 'N/A'}</td>
                  <td>{employee.phone || 'N/A'}</td>
                  <td>{employee.position}</td>
                  <td>{employee.department}</td>
                  <td>${parseFloat(employee.payRate).toFixed(2)}</td>
                  <td className="actions">
                    <Link to={`/employee/${employee.id}`} className="btn-view">
                      View
                    </Link>
                    <Link to={`/employee/${employee.id}?edit=true`} className="btn-edit">
                      Edit
                    </Link>
                    <button 
                      className="btn-delete"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default EmployeeList;