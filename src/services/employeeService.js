import { USE_BACKEND } from '../config';
import * as localStorageService from './localStorageService';
import * as apiService from './apiService';

const getService = () => USE_BACKEND ? apiService : localStorageService;

export const getEmployees = () => getService().getEmployees();
export const getEmployee = (id) => getService().getEmployee(id);
export const createEmployee = (employee) => getService().createEmployee(employee);
export const updateEmployee = (employee) => getService().updateEmployee(employee);
export const deleteEmployee = (id) => getService().deleteEmployee(id);