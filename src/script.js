var students = [
  {name: 'Adhi', gender: 'male'},
  {name: 'Ahamed', gender: 'male'},
  {name: 'Rutika Kadam', gender: 'female'},
  {name: 'Priyadharshini', gender: 'female'}
]

const displayStudents = function(){
  let _students = '';
  let _femaleStudents = students.filter(student => student.gender === 'female').map(student => student.name);
  let _startsWithA = students.filter(student => student.name.startsWith('A')).map(student => student.name);
  
  for(let i of students){
    _students+=`<p>Name: ${i.name} Gender: ${i.gender}<p>`;
  }
  _femaleStudents = `Female students: [${_femaleStudents}]`;
  let _totalMaleStudents = `Total male students: ${_startsWithA.length}`
  _startsWithA = `Students name starts with A: [${_startsWithA}]`;
  
  document.getElementById('femaleStudents').innerText = _femaleStudents;
  document.getElementById('startsWithA').innerText = _startsWithA;
  document.getElementById('totalMaleStudents').innerText = _totalMaleStudents;
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