const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
               { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
               { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
               { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
               { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
               { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
               { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

const lastNames = users.map(user => user.lastName);
console.log(lastNames);

const fullStacks = users.filter(user => (user.role == 'Full Stack Resident')); //.role == 'Full Stack Resident'
console.log(fullStacks); 

const fullNames = users.map(user => user.firstName + ' ' + user.lastName);

console.log(fullNames);