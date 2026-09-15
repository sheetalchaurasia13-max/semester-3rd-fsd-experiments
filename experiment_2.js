const fs = require('fs');

// write 
fs.writeFileSync('student.txt' , 'Name : Sheetal kumari chaurasia\nRoll no : 2503201001069\nBranch : CSE\nSemester : 3rd');
// read and display :
const detail = fs.readFileSync('student.txt' , 'utf8');
console.log(detail);

// updates :
fs.appendFileSync('student.txt', '\nSubject : FSD\nMarks : 100\nAttendence : 96%');
console.log('file read successfully');
const update = fs.readFileSync('student.txt' , 'utf8');
console.log(update);