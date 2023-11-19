let name = document.getElementById("inputName");
let surname = document.getElementById("inputSurname");
let username = document.getElementById("inputUsername");
let password = document.getElementById("inputPassword");
let registersubmit = document.getElementById("btnsubmit");


function saveData() {
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))? JSON.parse(localStorage.getItem("users")): []
    if(user_records.some((v) =>{
        return v.username==username.value
    })){
        alert("bu username Mövcuddur");
    }
    else {
        user_records.push({
            "name": name.value,
            "surname" : surname.value,
            "username" : username.value,
            "password" : password.value
        })
        localStorage.setItem("users", JSON.stringify(user_records));
    }
}



