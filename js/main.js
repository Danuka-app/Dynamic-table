var submit = document.getElementById('submit');
submit.addEventListener('click',addMembers);
var srNo =0;


function data(){
    var formData = {};
    formData.fullName = document.getElementById('name').value;
    formData.email = document.getElementById('email').value;
    formData.password = document.getElementById('password').value;
    formData.address = document.getElementById('address').value;
}
function addMembers(){
    var table = document.querySelector('table');
    var newRow = table.insertRow(table.length)
    cell1=newRow.insertCell(0)
}