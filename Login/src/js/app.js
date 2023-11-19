let username = document.getElementById("inputUsername");
let password = document.getElementById("inputPassword");

function saveData() {
    let user_records=new Array();
    user_records=JSON.parse(localStorage.getItem("users"))? JSON.parse(localStorage.getItem("users")): []
    if(user_records.some((v) =>{
        return v.username==username.value && v.password==password.value
    })){
        alert("Giriş Başarili");
    }
    else {
        alert("Şifrə və ya Username Yanliştir");
    }
}