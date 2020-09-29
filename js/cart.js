
function showCartList(cartJson)
{
    var cartArray = cartJson.articles;
    let htmlContentToAppend = "";
    for(let i = 0; i < cartArray.length; i++){
        let cartProduct = cartArray[i];

            htmlContentToAppend += `
                <div class="row">
                    <div class="">
                        <img width="80px" height="80px" src="` + cartProduct.src + `" class="img-thumbnail">
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <h4 class="col-sm mb-1">`+ cartProduct.name +`</h4>
                            <p class="col-sm">` + cartProduct.currency + " " + cartProduct.unitCost + `</p>
                            <input id="countValue" onclick="currentSubtotal(` + cartProduct.unitCost + `)" class="col-1 form-control" type="number" value="` + cartProduct.count + `">
                        </div>
                    </div>
                    <p id="subtotalPlaceholder" class="col-2"></p>
                </div>
            `
    }
    document.getElementById("cart-list-container").innerHTML = htmlContentToAppend;
    currentSubtotal();
}

function currentSubtotal(cartProduct)
{
  var countValue = document.getElementById("countValue").value;
  var subtotal = cartProduct * countValue;
  document.getElementById("subtotalPlaceholder").innerHTML = subtotal;
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(CART_INFO_URL).then(function(resultObj){
      if (resultObj.status === "ok"){
          showCartList(resultObj.data);
      }
  });
});
