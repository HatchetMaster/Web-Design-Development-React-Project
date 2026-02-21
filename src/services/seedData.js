import { createEmployee } from './EmployeeService';

const firstNames = [
  'James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda',
  'William', 'Barbara', 'David', 'Elizabeth', 'Richard', 'Susan', 'Joseph', 'Jessica',
  'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy', 'Daniel', 'Lisa',
  'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark', 'Sandra', 'Donald', 'Ashley',
  'Steven', 'Kimberly', 'Paul', 'Emily', 'Andrew', 'Donna', 'Joshua', 'Michelle',
  'Kenneth', 'Dorothy', 'Kevin', 'Carol', 'Brian', 'Amanda', 'George', 'Melissa',
  'Edward', 'Deborah', 'Ronald', 'Stephanie', 'Timothy', 'Rebecca', 'Jason', 'Sharon',
  'Jeffrey', 'Laura', 'Ryan', 'Cynthia', 'Jacob', 'Kathleen', 'Gary', 'Amy',
  'Nicholas', 'Shirley', 'Eric', 'Angela', 'Jonathan', 'Helen', 'Stephen', 'Anna',
  'Larry', 'Brenda', 'Justin', 'Pamela', 'Scott', 'Nicole', 'Brandon', 'Emma',
  'Benjamin', 'Samantha', 'Samuel', 'Katherine', 'Raymond', 'Christine', 'Gregory', 'Debra',
  'Frank', 'Rachel', 'Alexander', 'Catherine', 'Patrick', 'Carolyn', 'Raymond', 'Janet',
  'Jack', 'Ruth', 'Dennis', 'Maria', 'Jerry', 'Heather', 'Tyler', 'Diane',
  'Aaron', 'Virginia', 'Jose', 'Julie', 'Adam', 'Joyce', 'Henry', 'Victoria',
  'Nathan', 'Olivia', 'Douglas', 'Kelly', 'Zachary', 'Christina', 'Peter', 'Lauren',
  'Kyle', 'Joan', 'Walter', 'Evelyn', 'Ethan', 'Judith', 'Jeremy', 'Megan',
  'Harold', 'Cheryl', 'Keith', 'Andrea', 'Christian', 'Hannah', 'Roger', 'Jacqueline',
  'Noah', 'Martha', 'Gerald', 'Gloria', 'Carl', 'Teresa', 'Terry', 'Ann'
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas',
  'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White',
  'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young',
  'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
  'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell',
  'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker',
  'Cruz', 'Edwards', 'Collins', 'Reyes', 'Stewart', 'Morris', 'Morales', 'Murphy',
  'Cook', 'Rogers', 'Gutierrez', 'Ortiz', 'Morgan', 'Cooper', 'Peterson', 'Bailey',
  'Reed', 'Kelly', 'Howard', 'Ramos', 'Kim', 'Cox', 'Ward', 'Richardson',
  'Watson', 'Brooks', 'Chavez', 'Wood', 'James', 'Bennett', 'Gray', 'Mendoza',
  'Ruiz', 'Hughes', 'Price', 'Alvarez', 'Castillo', 'Sanders', 'Patel', 'Myers',
  'Long', 'Ross', 'Foster', 'Jimenez', 'Powell', 'Jenkins', 'Perry', 'Russell'
];

const streets = [
  'Main', 'Oak', 'Maple', 'Cedar', 'Elm', 'Washington', 'Lake', 'Hill',
  'Park', 'Pine', 'Walnut', 'Cherry', 'Birch', 'Sunset', 'River', 'Forest',
  'Spring', 'Madison', 'Lincoln', 'Jefferson', 'Adams', 'Jackson', 'Wilson', 'Highland',
  'Church', 'School', 'Market', 'Meadow', 'Valley', 'Ridge', 'Woodland', 'Summit'
];

const streetTypes = ['St', 'Ave', 'Rd', 'Blvd', 'Dr', 'Ln', 'Ct', 'Way', 'Pl', 'Pkwy'];

const cities = [
  'Springfield', 'Chicago', 'Aurora', 'Naperville', 'Joliet', 'Rockford', 'Peoria',
  'Champaign', 'Bloomington', 'Decatur', 'Elgin', 'Waukegan', 'Cicero', 'Arlington Heights',
  'Evanston', 'Schaumburg', 'Bolingbrook', 'Palatine', 'Skokie', 'Des Plaines',
  'Orland Park', 'Tinley Park', 'Oak Lawn', 'Berwyn', 'Mount Prospect', 'Wheaton',
  'Hoffman Estates', 'Oak Park', 'Downers Grove', 'Elmhurst', 'Glenview', 'DeKalb',
  'Lombard', 'Moline', 'Buffalo Grove', 'Bartlett', 'Urbana', 'Crystal Lake',
  'Quincy', 'Carol Stream', 'Romeoville', 'Plainfield', 'Hanover Park', 'Carpentersville',
  'Wheeling', 'Park Ridge', 'Addison', 'Calumet City'
];

const positions = {
  'Sales': ['Sales Representative', 'Account Executive', 'Sales Manager', 'Business Development Rep', 'Sales Director', 'Regional Sales Manager'],
  'Marketing': ['Marketing Manager', 'Content Strategist', 'Social Media Manager', 'Marketing Director', 'Brand Manager', 'Marketing Coordinator'],
  'HR': ['HR Director', 'Recruiter', 'HR Manager', 'Talent Acquisition Specialist', 'HR Coordinator', 'Benefits Administrator'],
  'IT': ['Senior Developer', 'Systems Analyst', 'Network Administrator', 'Software Engineer', 'IT Manager', 'DevOps Engineer', 'Database Administrator'],
  'Finance': ['Finance Controller', 'Financial Analyst', 'Accountant', 'Finance Manager', 'Payroll Specialist', 'Budget Analyst']
};

const departments = ['Sales', 'Marketing', 'HR', 'IT', 'Finance'];

const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateSSN = () => {
  const part1 = randomNumber(100, 999);
  const part2 = randomNumber(10, 99);
  const part3 = randomNumber(1000, 9999);
  return `${part1}-${part2}-${part3}`;
};

const generatePhone = () => {
  const area = randomNumber(200, 999);
  const prefix = randomNumber(200, 999);
  const line = randomNumber(1000, 9999);
  return `${area}-${prefix}-${line}`;
};

const generateZipCode = () => {
  return randomNumber(60001, 62999).toString();
};

const generatePayRate = (department) => {
  const rates = {
    'Sales': [18, 32],
    'Marketing': [20, 35],
    'HR': [22, 38],
    'IT': [25, 45],
    'Finance': [24, 40]
  };
  const [min, max] = rates[department];
  return (randomNumber(min * 100, max * 100) / 100).toFixed(2);
};

const generateEmail = (firstName, lastName, existingEmails) => {
  const domains = ['company.com', 'business.com', 'corp.com', 'enterprise.com'];
  let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${randomItem(domains)}`;
  
  // If email exists, add a number suffix
  let counter = 1;
  while (existingEmails.has(email)) {
    email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}${counter}@${randomItem(domains)}`;
    counter++;
  }
  
  return email;
};

const generateEmployee = (usedCombinations, existingEmails) => {
  let firstName, lastName, combinationKey;
  let attempts = 0;
  const maxAttempts = 1000;

  // Keep trying until we get a unique name combination
  do {
    firstName = randomItem(firstNames);
    lastName = randomItem(lastNames);
    combinationKey = `${firstName}-${lastName}`;
    attempts++;
    
    // If we've tried too many times, we've likely exhausted combinations
    if (attempts > maxAttempts) {
      throw new Error('Unable to generate unique employee combination. Consider adding more names to the pool.');
    }
  } while (usedCombinations.has(combinationKey));

  // Mark this combination as used
  usedCombinations.add(combinationKey);

  const department = randomItem(departments);
  const streetNumber = randomNumber(100, 9999);
  const street = randomItem(streets);
  const streetType = randomItem(streetTypes);
  const email = generateEmail(firstName, lastName, existingEmails);
  
  // Mark this email as used
  existingEmails.add(email);

  return {
    firstName,
    lastName,
    email,
    phone: generatePhone(),
    address: `${streetNumber} ${street} ${streetType}`,
    city: randomItem(cities),
    state: 'IL',
    zipCode: generateZipCode(),
    ssn: generateSSN(),
    payRate: generatePayRate(department),
    position: randomItem(positions[department]),
    department
  };
};

export const seedEmployees = (count = 25) => {
  // Calculate maximum possible unique combinations
  const maxCombinations = firstNames.length * lastNames.length;
  
  if (count > maxCombinations) {
    console.warn(`Requested ${count} employees, but only ${maxCombinations} unique name combinations are possible.`);
    console.warn(`Generating ${maxCombinations} employees instead.`);
    count = maxCombinations;
  }

  const usedCombinations = new Set();
  const existingEmails = new Set();
  const employees = [];
  
  for (let i = 0; i < count; i++) {
    try {
      const employee = generateEmployee(usedCombinations, existingEmails);
      employees.push(employee);
    } catch (error) {
      console.error(`Error generating employee ${i + 1}:`, error.message);
      break;
    }
  }

  try {
    employees.forEach(emp => createEmployee(emp));
    console.log(`Successfully seeded ${employees.length} unique employees!`);
    return { success: true, count: employees.length };
  } catch (error) {
    console.error('Error seeding employees:', error);
    return { success: false, error: error.message };
  }
};

export const clearEmployees = () => {
  localStorage.removeItem('employees');
  console.log('All employees cleared from localStorage');
};

export const seedSmall = () => seedEmployees(10);
export const seedMedium = () => seedEmployees(25);
export const seedLarge = () => seedEmployees(50);
export const seedExtraLarge = () => seedEmployees(100);