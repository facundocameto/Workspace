const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://facundocameto.github.io/Workspace/json/products.json";
const PRODUCT_INFO_URL = "https://facundocameto.github.io/Workspace/json/products-info.json";
const PRODUCT_INFO_COMMENTS_URL_C = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const PRODUCT_INFO_COMMENTS_URL_F = "https://facundocameto.github.io/Workspace/json/comments-Fiat_W.json";
const PRODUCT_INFO_COMMENTS_URL_S = "https://facundocameto.github.io/Workspace/json/comments-Suzuki_C.json";
const PRODUCT_INFO_COMMENTS_URL_P = "https://facundocameto.github.io/Workspace/json/comments-Peugot_2.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";
let user = sessionStorage.getItem("estaLogueado");

var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

var getJSONData = function(url){
    var result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
  var usuario = document.getElementById("usuario");
  var usuarioBars = document.getElementById("nextToBars");
  usuarioBars.innerHTML += `<span class="p-1">`+ user + `</span>`;
  usuario.innerHTML = user;
  collapseExample.style.maxHeight = "0px";
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
    collapseExample.style.maxHeight = "140px";
  }
  else {
    asd = "1";
    arrow_img.style.transform = "rotate(0deg)";
    collapseExample.style.maxHeight = "0px";
  }
}
function delete_key()
{
  sessionStorage.clear();
  window.location.replace("./login.html");
}
function openSideBar()
{
  var sideBar = document.getElementById("sideBar");
  sideBar.style.display = "block";
}
function closeSideBar()
{
  var sideBar = document.getElementById("sideBar");
  sideBar.style.display = "none";
}
