let email = document.getElementsByName("email").value;
let password = document.getElementsByName("password").value;
let log_but = document.getElementById("log_but");

function logged()
{
  let loggin = ""
  if (email.value != "" || password.value != "")
  {
    loggin = "true";
  }
  else {
    window.location.replace("webfonts/login.html");
  }
}

log_but.addEventListener("click", logged());
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});
