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

        //Creating new Name
        const newName =document.createElement('td');
        newName.innerHTML= Name.value;
        ProInfo.appendChild(newName)
       
        //Creating new ID NO 
        const newId =document.createElement('td');
        newId.innerHTML=ID.value;
        ProInfo.appendChild(newId);

        //Creating new Email
        const newEmail =document.createElement('td');
        newEmail.innerHTML=Email.value;
        ProInfo.appendChild(newEmail);

        //Creating new Phone Number 
        const newPhn =document.createElement('td');
        newPhn.innerHTML=Phn.value;
        ProInfo.appendChild(newPhn);

        //Creating new Department 
        const newDept =document.createElement('td');
        newDept.innerHTML= Dept.value;
        ProInfo.appendChild(newDept);

        ProfileInfo.appendChild(ProInfo);
    }
})
