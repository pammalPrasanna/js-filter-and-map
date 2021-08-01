var students = [
  {name: 'Adhi', gender: 'male'},
  {name: 'Ahamed', gender: 'male'},
  {name: 'Rutika Kadam', gender: 'female'},
  {name: 'Priyadharshini', gender: 'female'}
]

const displayStudents = function(){
  let _students = '';
  let _femaleStudents = '';
  let _startsWithA = '';
  let _noOfMaleStudents = 0;
  for(let i of students){
    _students+=`<p>Name: ${i.name} Gender: ${i.gender}<p>`;
    if(i.gender === 'female')
        _femaleStudents += `${i.name}, `;
    if(i.gender === 'male')
        _noOfMaleStudents+=1;
    if(i.name.startsWith('A')) _startsWithA += `${i.name}, `;
  }
  _noOfStudents = `Total male students: ${_noOfMaleStudents}`;
  _femaleStudents = `Female students: [${_femaleStudents}]`;
  _startsWithA = `Students name starts with A: [${_startsWithA}]`;
  document.getElementById('femaleStudents').innerText = _femaleStudents;
  document.getElementById('startsWithA').innerText = _startsWithA;
  document.getElementById('totalMaleStudents').innerText = _noOfStudents;
  document.getElementById('students').innerHTML = _students
}


const addStudent = function(){
  document.getElementById('error').innerText = '';
  let student = {
    name: `${document.getElementById('name').value}`,
    gender: `${document.getElementById('gender').value}`,
    }
  if(student.name !== '' && student.gender!== ''){
      students.push(student);
      displayStudents();
      document.getElementById('name').value = '';
      document.getElementById('gender').value = '';
  }else{
    document.getElementById('error').innerText = 'Both name and gender are required'
  }
  
}

displayStudents();