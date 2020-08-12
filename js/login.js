function validate() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var expresion = /\w+@\w+\.+[a-z]/;

  if (email === "" || password === "") {
    return false;
  } else if (!expresion.test(email)) {
    return false;
  } else {
    logueado = "true";
    sessionStorage.setItem("estaLogueado", logueado);
    window.location.replace("./index.html");
  }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});
