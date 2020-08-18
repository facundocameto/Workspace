var userid = document.getElementById("user")
function validate() {
  var user = document.getElementById("user").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var expresion = /\w+@\w+\.+[a-z]/;

  if (user === "" || user.length < 5 || email === "" || password === "") {
    wrong_user();
    return false;
  } else if (!expresion.test(email)) {
    return false;
  } else {
    logueado = "true";
    sessionStorage.setItem("estaLogueado", user);
    window.location.assign("./index.html");
  }
}
userid.addEventListener("keydown", wrong_user);
userid.addEventListener("keyup", wrong_user);
function wrong_user(){
  var user = document.getElementById("user").value;
  var userst = document.getElementById("user");
  if (user.length < 5){
user_req.innerHTML = "El usuario debe tener al menos 5 caracteres"
userst.style.border = "1px solid red"
}
else if (user.length > 3) {
  user_req.innerHTML = ""
  userst.style.border = ""
}
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
});
