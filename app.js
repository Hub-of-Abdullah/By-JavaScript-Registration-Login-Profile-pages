/*Dom Selection*/
const Name = document.querySelector('#name');
const ID = document.querySelector('#IdNo');
const Dept = document.querySelector('#Department');
const Phn = document.querySelector('#PhoneNumber');
const Email = document.querySelector('#Email');
const Reg = document.querySelector('.btn');
const ProfileInfo = document.querySelector('#Profile-Info');

/* Event Listner */
Reg.addEventListener('click', function(e){
    e.preventDefault();
    
    //Basic Validation
    if(Name.value==''){alert('Please input your information.');}
    else if(ID.value==''){ alert('Please input your ID NO.');}
    else if(Dept.value==''){ alert('Please input your Department Name.');}
    else if(Phn.value==''){ alert('Please input your Phone Number.');}
    else if(Email.value==''){ alert('Please input your Email.');}
    else{
        
       //Creating a table Column
        const ProInfo = document.createElement('tr');
        //Creating new title 
        const newName =document.createElement('td');
        newName.innerHTML=Name.value;
        ProInfo.appendChild(newName)
        //ProName.appendChild(NameRow);

        // const IdRow = document.createElement('tr');
        const newId =document.createElement('td');
        newId.innerHTML=ID.value;
        ProInfo.appendChild(newId);

        const newDept =document.createElement('td');
        newDept.innerHTML=Dept.value;
        ProInfo.appendChild(newDept);

        const newPhn =document.createElement('td');
        newPhn.innerHTML=Phn.value;
        ProInfo.appendChild(newPhn);

        const newEmail =document.createElement('td');
        newEmail.innerHTML=Email.value;
        ProInfo.appendChild(newEmail);
        
        ProfileInfo.appendChild(ProInfo);
    }
})
