const STORAGE_KEY = 'employees';

// ID generation, ensures uniqueness
let idCounter = 0;
const generateUniqueId = () => {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 9);
  idCounter = (idCounter + 1) % 1000;
  return `${timestamp}-${random}-${idCounter}`;
};

// Get all employees from local storage
export const getEmployees = () => {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

// Get single employee by ID
export const getEmployee = (id) => {
    const employees = getEmployees();
    return employees.find((employee) => employee.id === id);
};

// Create a new employee
export const createEmployee = (employee) => {
    const employees = getEmployees();
    const newEmployee = {
      ...employee,
      id: generateUniqueId(), // Changed from Date.now().toString()
      createdAt: new Date().toISOString()
    };
    employees.push(newEmployee);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
    return newEmployee;
};

// Update an existing employee
export const updateEmployee = (updateEmployee) => {
    const employees = getEmployees();
    const index = employees.findIndex(emp => emp.id === updateEmployee.id);

    if (index === -1) {
        throw new Error('Employee not found')
    }

    employees[index] = {
        ...employees[index],
        ...updateEmployee,
        updatedAt: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees));
    return employees[index];
};

//Delete an employee
export const deleteEmployee = (id) => {
    const employees = getEmployees();
    const filtered = employees.filter(emp => emp.id !== id); // Use filter, not findIndex
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    return true;
};