import { USE_BACKEND } from '../config';
import * as LocalStorageService from './LocalStorageService';
import * as ApiService from './ApiService';

const getService = () => USE_BACKEND ? ApiService : LocalStorageService;

export const getEmployees = () => getService().getEmployees();
export const getEmployee = (id) => getService().getEmployee(id);
export const createEmployee = (employee) => getService().createEmployee(employee);
export const updateEmployee = (employee) => getService().updateEmployee(employee);
export const deleteEmployee = (id) => getService().deleteEmployee(id);