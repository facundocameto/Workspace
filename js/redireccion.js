let user = sessionStorage.getItem("estaLogueado");
function exist(){
  if (user === "") {
    logueado = false;
    sessionStorage.setItem("estaLogueado", user, null);
  }
}

function redireccion(){
  if (user == null) {
    window.location.replace("./login.html");
}}


exist();
redireccion();
console.log(user);
