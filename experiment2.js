const fs = require('fs');

// Create / Write
fs.writeFileSync('student.txt', 'B.Tech Node.js Lab');
//  Read 
const data = fs.readFileSync('student.txt', 'utf8');
console.log(data);
//  write 
fs.writeFileSync('student txt','Name : sheetal\nSubject :full stack development');
const detail = fs.readFileSync('student txt' , 'utf8');
console.log(detail);

//  Update / Append
fs.appendFileSync('student.txt', '\nExperiment 2 completed');

console.log('File updated successfully');

const datanew = fs.readFileSync('student.txt', 'utf8');


console.log(datanew);
