
function saveData()
{
  var nombre1 = document.getElementById("nombre1").value;
  var nombre2 = document.getElementById("nombre2").value;
  var apellido1 = document.getElementById("apellido1").value;
  var apellido2 = document.getElementById("apellido2").value;
  var userEmail = document.getElementById("userEmail").value;
  var numeroTelefono = document.getElementById("numeroTelefono").value;

  var userData = new Object();
  userDataJson = [];

  userData.nombre1 = nombre1;
  userData.nombre2 = nombre2;
  userData.apellido1 = apellido1;
  userData.apellido2 = apellido2;
  userData.userEmail = userEmail;
  userData.numeroTelefono = numeroTelefono;

  userDataJson.push(userData);

  sessionStorage.removeItem("userData");
  sessionStorage.setItem("userData", JSON.stringify(userDataJson));

  var userDataVar = sessionStorage.getItem("userData");
  var userDataObject = JSON.parse(userDataVar);

  document.getElementById("alertResult").classList.remove("fade");
  document.getElementById("saveDataButton").disabled = true;
  setTimeout(function () {
    document.getElementById("alertResult").classList.add("fade");
    document.getElementById("saveDataButton").disabled = false;
  }, 1800);

}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
  var userDataVar = sessionStorage.getItem("userData");
  var userDataObject = JSON.parse(userDataVar);
  document.getElementById("nombre1").value = userDataObject[0].nombre1;
  document.getElementById("nombre2").value = userDataObject[0].nombre2;
  document.getElementById("apellido1").value = userDataObject[0].apellido1;
  document.getElementById("apellido2").value = userDataObject[0].apellido2;
  document.getElementById("userEmail").value = userDataObject[0].userEmail;
  document.getElementById("numeroTelefono").value = userDataObject[0].numeroTelefono;
});
