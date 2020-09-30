
function showCartList(cartJson)
{
    var cartArray = cartJson.articles;
    let htmlContentToAppend = "";
    for(let i = 0; i < cartArray.length; i++){
        let cartProduct = cartArray[i];

            htmlContentToAppend += `
                <div class="row list-group-item-action mb-5">
                    <div class="col-sm-2">
                        <img width="80px" height="80px" src="` + cartProduct.src + `" class="img-thumbnail">
                    </div>
                    <div class="col-9">
                        <div class="row">
                            <h4 class="col-sm mb-1">`+ cartProduct.name +`</h4>
                            <p class="col-sm">` + cartProduct.currency + " " + cartProduct.unitCost + `</p>
                            <div class="pl-3 pr-3"><input style="max-width: 71px;" onclick="currentCost(` + i + `, ` + cartProduct.unitCost + `)" id="itemQuant` + i + `" class="col-2 form-control" type="number" value="` + cartProduct.count + `"></div>
                        </div>
                    </div>
                    <p id="costPlaceholder` + i + `" class="col-1 p-0"></p>
                </div>
            `;
            getJSONData(CART_INFO_URL).then(function(resultObj){
                if (resultObj.status === "ok"){
                    currentCost(i, cartProduct.unitCost);
                }
            });
    }

    document.getElementById("cart-list-container").innerHTML = htmlContentToAppend;
}

function currentCost(num, unitCost)
{
  var itemQuant = document.getElementById("itemQuant" + num).value;
  var costPlaceholder = document.getElementById("costPlaceholder" + num);
  costPlaceholder.innerHTML = itemQuant*unitCost;
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
