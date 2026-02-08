import * as localStorageService from './LocalStorageService';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: (key) => store[key] || null,
    setItem: (key, value) => { store[key] = value.toString(); },
    clear: () => { store = {}; },
    removeItem: (key) => { delete store[key]; }
  };
})();

global.localStorage = localStorageMock;

describe('localStorageService', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  describe('getEmployees', () => {
    test('returns empty array when no employees exist', () => {
      const employees = localStorageService.getEmployees();
      expect(employees).toEqual([]);
    });

    test('returns employees from localStorage', () => {
      const mockEmployees = [
        { id: '1', firstName: 'John', lastName: 'Doe' }
      ];
      localStorage.setItem('employees', JSON.stringify(mockEmployees));
      
      const employees = localStorageService.getEmployees();
      expect(employees).toEqual(mockEmployees);
    });
  });

  describe('createEmployee', () => {
    test('creates new employee with generated ID', () => {
      const newEmployee = {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane@example.com'
      };

      const created = localStorageService.createEmployee(newEmployee);

      expect(created).toHaveProperty('id');
      expect(created).toHaveProperty('createdAt');
      expect(created.firstName).toBe('Jane');
      expect(created.lastName).toBe('Smith');
    });

    test('adds employee to storage', () => {
      const newEmployee = {
        firstName: 'Jane',
        lastName: 'Smith'
      };

      localStorageService.createEmployee(newEmployee);
      const employees = localStorageService.getEmployees();

      expect(employees).toHaveLength(1);
      expect(employees[0].firstName).toBe('Jane');
    });
  });

  describe('getEmployee', () => {
    test('returns employee by ID', () => {
      const employee = localStorageService.createEmployee({
        firstName: 'John',
        lastName: 'Doe'
      });

      const found = localStorageService.getEmployee(employee.id);
      expect(found).toEqual(employee);
    });

    test('returns undefined for non-existent ID', () => {
      const found = localStorageService.getEmployee('999');
      expect(found).toBeUndefined();
    });
  });

  describe('updateEmployee', () => {
    test('updates existing employee', () => {
      const employee = localStorageService.createEmployee({
        firstName: 'John',
        lastName: 'Doe'
      });

      const updated = localStorageService.updateEmployee({
        ...employee,
        firstName: 'Jane'
      });

      expect(updated.firstName).toBe('Jane');
      expect(updated.lastName).toBe('Doe');
      expect(updated).toHaveProperty('updatedAt');
    });

    test('throws error for non-existent employee', () => {
      expect(() => {
        localStorageService.updateEmployee({ id: '999', firstName: 'Test' });
      }).toThrow('Employee not found');
    });
  });

  describe('deleteEmployee', () => {
    test('removes employee from storage', () => {
      const employee = localStorageService.createEmployee({
        firstName: 'John',
        lastName: 'Doe'
      });

      localStorageService.deleteEmployee(employee.id);
      const employees = localStorageService.getEmployees();

      expect(employees).toHaveLength(0);
    });

    test('returns true on successful deletion', () => {
      const employee = localStorageService.createEmployee({
        firstName: 'John',
        lastName: 'Doe'
      });

      const result = localStorageService.deleteEmployee(employee.id);
      expect(result).toBe(true);
    });
  });
});