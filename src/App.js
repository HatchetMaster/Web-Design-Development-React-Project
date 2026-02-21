import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getEmployees } from './services/EmployeeService';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import EmployeeDetail from './components/EmployeeDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <div className="navbar-brand">
            <h1>Employee Management System</h1>
          </div>
          <nav className="navbar-links">
            <Link to="/">Dashboard</Link>
            <Link to="/EmployeeList">Employees</Link>
            <Link to="/departments">Departments</Link>
            <Link to="/reports">Reports</Link>
          </nav>
        </header>
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            
            <Route path="/EmployeeList" element={<EmployeeList />} />

            <Route path="/EmployeeForm" element={<EmployeeForm />} />

            <Route path="/employee/:id" element={<EmployeeDetail />} />
            
            <Route path="/departments" element={
              <div className="page-container">
                <h2>Department Management</h2>
                <p>Manage departments and organizational structure.</p>
              </div>
            } />
            
            <Route path="/reports" element={
              <div className="page-container">
                <h2>Reports</h2>
                <p>View analytics and generate reports.</p>
              </div>
            } />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function HomePage() {
  const [stats, setStats] = useState({
    totalEmployees: 0,
    departments: 0,
    activeProjects: 0
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = () => {
    const employees = getEmployees();
    const totalEmployees = employees.length;
    const uniqueDepartments = new Set(employees.map(emp => emp.department));
    const departments = uniqueDepartments.size;
    const activeProjects = 0;

    setStats({
      totalEmployees,
      departments,
      activeProjects
    });
  };

  return (
    <div className="dashboard">
      <div className="welcome-banner">
        <h3>Welcome to the Employee Management System</h3>
        <p className="dashboard-subtitle">Manage your workforce efficiently</p>
      </div>
      <div className="stats-banner">
       <div className="banner-content">
         <h3>Quick Stats</h3>
         <ul className="stats-list">
           <li>Total Employees: <strong>{stats.totalEmployees}</strong></li>
           <li>Departments: <strong>{stats.departments}</strong></li>
           <li>Active Projects: <strong>{stats.activeProjects}</strong></li>
         </ul>
       </div>
      </div> 
      <div className="dashboard-cards">
        <div className="card">
          <h3>Employee Information</h3>
            <ul className="employee-management-list">
              <li><Link to="/EmployeeForm">Add</Link></li>
              <li><Link to="/employee-edit">Edit</Link></li>
              <li><Link to="/EmployeeList">View</Link></li>
            </ul>
          <Link to="/EmployeeList" className="card-button">Manage Employees</Link>
        </div>
        
        <div className="card">
          <h3>Departments</h3>
            <ul className="department-management-list">
              <li><Link to="/department-sales">Sales</Link></li>
              <li><Link to="/department-marketing">Marketing</Link></li>
              <li><Link to="/department-hr">HR</Link></li>
              <li><Link to="/department-it">IT</Link></li>
              <li><Link to="/department-finance">Finance</Link></li>
            </ul>
          <Link to="/departments" className="card-button">View Departments</Link>
        </div>
        
        <div className="card">
          <h3>Reports</h3>
            <ul>
              <li><Link to="/reports" className="card-button">Generate Reports</Link></li>
              <li><Link to="/analytics" className="card-button">View Analytics</Link></li>
            </ul>          
        </div>                
      </div>
    </div>
  );
}

export default App;
