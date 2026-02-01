//Feature flag to enable or disable backend service calls
export const USE_BACKEND = false; // Set to true to use backend API, false for local storage

// API_BASE_URL for backend service calls
export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'; 