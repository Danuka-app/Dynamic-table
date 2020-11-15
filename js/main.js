var form = document.getElementById('form');
var username = document.getElementById('name');
var email = document.getElementById('email');
var password = document.getElementById('password');
var address = document.getElementById('address');

//-----------------------------------------Validation
var userNameValid = false;
var emailValid = false;
var addressVaild = false;
var passwordValid = false;
init();
function init(){
    username.autofocus;
}
function checkInput(){
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var addressValue= address.value.trim();


    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);
        userNameValid =true
    }

    if(addressValue === '') {
        setErrorFor(address, 'address cannot be blank');
    } else {
        setSuccessFor(address);
        addressVaild =true
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!isEmail(emailValue)){
        setErrorFor(email, 'not a valid email');
    }else
    {
        setSuccessFor(email);
        emailValid=true;
    }

    if(passwordValue === '') {
        setErrorFor(password, 'password cannot be blank');
    } else {
        setSuccessFor(password);
        passwordValid=true;
    }

}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-group error';
    small.innerText = message;
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    formControl.className = 'form-group success';
}

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
//------------------------------------------------
var changeIcon =`<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-check-circle-fill trash delete" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path class="delete" fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
</svg>`

var submit = document.getElementById('submit');

submit.addEventListener('click',function (event){
    checkInput();
    event.preventDefault();
    if(userNameValid && emailValid && addressVaild && passwordValid){
       addMembers();
    }else {
        alert(3232);
    }
});
var selectedRow = null

var srNo =0;
var html = `
               <div id="icon-colum">
                        <div class="icon-1 delete">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash2-fill trash delete" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                                <path  class="delete" d="M2.037 3.225l1.684 10.104A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671l1.684-10.104C13.627 4.224 11.085 5 8 5c-3.086 0-5.627-.776-5.963-1.775z"/>
                                <path class="delete" fill-rule="evenodd" d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"/>
                            </svg>
                            
                        </div>
                        <div class="icon-2">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path class="edit" d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path class="edit" fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </div>
                    </div>  
`
/*
var body = document.querySelector('#icon-colum');
console.log(body.children)
*/
/*function big(x) {
   x.innerHTML = changeIcon;

}*/
/*function small(x){
    x.innerHTML =  `<svg  width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash2-fill trash delete" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path  class="delete" d="M2.037 3.225l1.684 10.104A2 2 0 0 0 5.694 15h4.612a2 2 0 0 0 1.973-1.671l1.684-10.104C13.627 4.224 11.085 5 8 5c-3.086 0-5.627-.776-5.963-1.775z"/>
        <path class="delete" fill-rule="evenodd" d="M12.9 3c-.18-.14-.497-.307-.974-.466C10.967 2.214 9.58 2 8 2s-2.968.215-3.926.534c-.477.16-.795.327-.975.466.18.14.498.307.975.466C5.032 3.786 6.42 4 8 4s2.967-.215 3.926-.534c.477-.16.795-.327.975-.466zM8 5c3.314 0 6-.895 6-2s-2.686-2-6-2-6 .895-6 2 2.686 2 6 2z"/>
    </svg>`
}*/

function updateRecord(formData) {
    if(selectedRow != null){
        selectedRow.children[1].innerText = data().fullName;
        selectedRow.children[2].innerText = data().email;
        selectedRow.children[3].innerText = data().address;
    }

}


document.querySelector('.colum-1').addEventListener('click',function (event){
    console.log(event.target);
    if(event.target.classList.contains('delete')) {
        var row = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        document.getElementById('table').deleteRow(row.rowIndex);
    }else if(event.target.classList.contains('edit')){
        selectedRow = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
        console.log(selectedRow.children[1].innerText);
      /*  console.log(selectedRow.cells[1])*/
        document.getElementById("name").value = selectedRow.children[1].innerText;
        document.getElementById("email").value = selectedRow.children[2].innerText;
        document.getElementById("address").value = selectedRow.children[3].innerText;
    }
});

function update(){
        document.getElementById("name").value = selectedRow.rowIndex.cells[1].innerHTML;
       document.getElementById("email").value = selectedRow.rowIndex.cells[2].innerHTML;
       document.getElementById("address").value = selectedRow.rowIndex[3].innerHTML;
}

function data(){
    var formData = {};
    formData.fullName = document.getElementById('name').value;
    formData.email = document.getElementById('email').value;
    formData.password = document.getElementById('password').value;
    formData.address = document.getElementById('address').value;
    return formData;
}
function addMembers(){
    if(selectedRow ==null){
        var table = document.querySelector('table');
        var newRow = table.insertRow(table.length);
        cell1=newRow.insertCell(0); //cell0
        cell2 = newRow.insertCell(1);
        cell3 = newRow.insertCell(2);
        cell4 = newRow.insertCell(3);
        cell5 = newRow.insertCell(4);

        cell1.innerHTML = srNo;
        cell2.innerHTML = data().fullName;
        cell3.innerHTML = data().address;
        cell4.innerHTML = data().email;
        cell5.innerHTML = html;
        resetForm();
    }else {
        updateRecord(data())
        resetForm();
    }

    srNo++;
}

function resetForm(){
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("address").value = "";
    document.getElementById("password").value = "";
    selectedRow = null;
}

function editData(edit){
    console.log(edit.parentElement.parentElement)
}

/*
var index, table = document.getElementById('table');
for (var i = 0; i < table.rows.length; i++) {
    table.rows[i].onclick = function (){
        index = this.parentElement.rowIndex;
        console.log(index);
    }
}
*/
