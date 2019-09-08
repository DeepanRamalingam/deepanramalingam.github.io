const listStudents = ()=>{
    return fetch('http://localhost:3000/students')
}
listStudents()
    .then(res=>{
        return res.json();
    })
    .then(students=>{
        // console.log(students)
        let list='';
        students.forEach(student => {
            list += `
            <div class="card m-2" onclick='myAlert(${student.id})' style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${student.name}</h5>
              <p class="card-text">${student.email}</p>
              </div>
          </div>
            `
        });
        document.getElementsByClassName('student-list')[0].innerHTML = list;
    })
const add=()=>{
    let id = document.getElementById('sid').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    if(id == '' || name == '' || email == '')
    {
        alert('All fields are required');
    } else {
        fetch('http://localhost:3000/students',{
        method: 'POST',
        body:JSON.stringify({
            id:id,
            name:name,
            email:email
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    }
}

const update=()=>{
    let id = document.getElementById('sid').value;
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    fetch(`http://localhost:3000/students/${id}`,{
        method: 'PUT',
        body:JSON.stringify({
            id:id,
            name:name,
            email:email
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
}

const del=()=>{
    let id = document.getElementById('sid').value;
    fetch(`http://localhost:3000/students/${id}`,{
        method: 'DELETE'
    })
}

const myAlert=studId=>{
    alert(studId);
}