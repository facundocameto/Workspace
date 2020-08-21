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
document.addEventListener("DOMContentLoaded", function(e){
  var usuario = document.getElementById("usuario");
  usuario.innerHTML = user;
  collapseExample.style.display = "none";
});
var asd = "";
var collapseExample = document.getElementById("collapseExample");

function rotate()
{
  var arrow_img = document.getElementById("arrow_img");
  if (asd === "" || asd === "1")
  {
    asd = "0";
    arrow_img.style.transform = "rotate(180deg)";
    collapseExample.style.display = "block"
  }
  else {
    asd = "1";
    arrow_img.style.transform = "rotate(0deg)";
    collapseExample.style.display = "none";
  }
}
