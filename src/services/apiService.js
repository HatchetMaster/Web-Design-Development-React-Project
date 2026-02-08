import { API_BASE_URL } from '../config';

// Placeholders for actual API calls - will be replaced when the backend is ready
export const getEmployees = async () => {
    const response = await fetch('{API_BASE_URL}/employees');
    return response.json();
};

export const getEmployee = async (id) => {
    const response = await fetch(`${API_BASE_URL}/employees/${id}`);
    return response.json();
};

export const createEmployee = async (employee) => {
    const response = await fetch(`${API_BASE_URL}/employees`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    });
    return response.json();
};

export const updateEmployee = async (employee) => {
    const response = await fetch(`${API_BASE_URL}/employees/${employee.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    });
    return response.json();
};

export const deleteEmployee = async (id) => {
    const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
        method: 'DELETE'
    });
    return response.json();
};