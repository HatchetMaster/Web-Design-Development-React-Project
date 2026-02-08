import { useState, useEffect } from 'react';
import { useParams, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { getEmployee, updateEmployee, deleteEmployee } from '../services/EmployeeService';
import './EmployeeDetail.css';

function EmployeeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isEditing, setIsEditing] = useState(searchParams.get('edit') === 'true'); // Check URL param
  const [employee, setEmployee] = useState(null);
  const [formData, setFormData] = useState(null);

  useEffect(() => {
    loadEmployee();
  }, [id]);

  const loadEmployee = () => {
    const data = getEmployee(id);
    if (data) {
      setEmployee(data);
      setFormData(data);
    } else {
      alert('Employee not found');
      navigate('/employees');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData(employee); // Reset to original data
    setIsEditing(false);
  };

  const handleSave = (e) => {
    e.preventDefault();
    try {
      updateEmployee(formData);
      setEmployee(formData);
      setIsEditing(false);
      alert('Employee updated successfully!');
    } catch (error) {
      alert('Error updating employee: ' + error.message);
    }
  };

  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`)) {
      try {
        deleteEmployee(id);
        alert('Employee deleted successfully!');
        navigate('/employees');
      } catch (error) {
        alert('Error deleting employee: ' + error.message);
      }
    }
  };

  if (!employee) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <div className="employee-detail-container">
      <div className="detail-header">
        <Link to="/employees" className="back-link">← Back to Employee List</Link>
        <h2>{employee.firstName} {employee.lastName}</h2>
        {!isEditing && (
          <div className="header-actions">
            <button onClick={handleEdit} className="btn-edit">
              Edit
            </button>
            <button onClick={handleDelete} className="btn-delete">
              Delete
            </button>
          </div>
        )}
      </div>

      {isEditing ? (
        // EDIT MODE
        <form onSubmit={handleSave} className="employee-detail-form">
          <div className="form-section">
            <h3>Personal Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="ssn">SSN *</label>
                <input
                  type="text"
                  id="ssn"
                  name="ssn"
                  value={formData.ssn}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Address</h3>
            <div className="form-grid">
              <div className="form-group full-width">
                <label htmlFor="address">Street Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="state">State *</label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                >
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="zipCode">ZIP Code *</label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  pattern="[0-9]{5}"
                  maxLength="5"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Employment Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="position">Position *</label>
                <input
                  type="text"
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="department">Department *</label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                >
                  <option value="Sales">Sales</option>
                  <option value="Marketing">Marketing</option>
                  <option value="HR">HR</option>
                  <option value="IT">IT</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="payRate">Pay Rate *</label>
                <input
                  type="number"
                  id="payRate"
                  name="payRate"
                  value={formData.payRate}
                  onChange={handleChange}
                  step="0.01"
                  min="0"
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-save">
              Save Changes
            </button>
            <button type="button" onClick={handleCancel} className="btn-cancel">
              Cancel
            </button>
          </div>
        </form>
      ) : (
        // VIEW MODE
        <div className="employee-detail-view">
          <div className="detail-section">
            <h3>Personal Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Full Name:</span>
                <span className="detail-value">{employee.firstName} {employee.lastName}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{employee.email || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Phone:</span>
                <span className="detail-value">{employee.phone || 'N/A'}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">SSN:</span>
                <span className="detail-value">{employee.ssn}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>Address</h3>
            <div className="detail-grid">
              <div className="detail-item full-width">
                <span className="detail-label">Street:</span>
                <span className="detail-value">{employee.address}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">City:</span>
                <span className="detail-value">{employee.city}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">State:</span>
                <span className="detail-value">{employee.state}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">ZIP Code:</span>
                <span className="detail-value">{employee.zipCode}</span>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3>Employment Information</h3>
            <div className="detail-grid">
              <div className="detail-item">
                <span className="detail-label">Position:</span>
                <span className="detail-value">{employee.position}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Department:</span>
                <span className="detail-value">{employee.department}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Pay Rate:</span>
                <span className="detail-value">${parseFloat(employee.payRate).toFixed(2)}/hr</span>
              </div>
              {employee.createdAt && (
                <div className="detail-item">
                  <span className="detail-label">Hired:</span>
                  <span className="detail-value">{new Date(employee.createdAt).toLocaleDateString()}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EmployeeDetail;
