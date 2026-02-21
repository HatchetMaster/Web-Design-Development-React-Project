import { render, screen, within } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
    test('renders main header with Employee Management System title', () => {
        render(<App />);

        // Check for the navbar header specifically
        const headerElement = screen.getByRole('heading', {
            name: /Employee Management System/i,
            level: 1
        });
        expect(headerElement).toBeInTheDocument();
    });

    test('renders dashboard welcome message', () => {
        render(<App />);

        const welcomeElement = screen.getByText(/Welcome to the Employee Management System/i);
        expect(welcomeElement).toBeInTheDocument();
    });

    test('renders navigation links', () => {
        render(<App />);

        // Find the navigation element and scope queries to it
        const nav = screen.getByRole('navigation');

        // Now check for links only within the nav
        expect(within(nav).getByText(/Dashboard/i)).toBeInTheDocument();
        expect(within(nav).getByText(/Employees/i)).toBeInTheDocument();
        expect(within(nav).getByText(/Departments/i)).toBeInTheDocument();
        expect(within(nav).getByText(/Reports/i)).toBeInTheDocument();
    });

    test('renders Quick Stats section', () => {
        render(<App />);

        expect(screen.getByText(/Quick Stats/i)).toBeInTheDocument();
        expect(screen.getByText(/Total Employees:/i)).toBeInTheDocument();
    });
});