
function showCartList(cartJson)
{
    var cartArray = cartJson.articles;
    let htmlContentToAppend = "";
    for(let i = 0; i < cartArray.length; i++){
        let cartProduct = cartArray[i];

            htmlContentToAppend += `
                <div class="row list-group-item-action mb-5 p-2">
                    <div class="col-sm-2">
                        <img width="170px" height="170px" src="` + cartProduct.src + `" class="img-thumbnail">
                    </div>
                    <div class="col-8">
                        <div class="row">
                            <h4 class="col-sm-4">`+ cartProduct.name +`</h4>
                            <p class="col-sm-4">` + cartProduct.currency + " " + cartProduct.unitCost + `</p>
                            <div class="col-sm-4">` +
                            //quantity input
                            `
                            <input style="max-width: 71px;"  onkeyup="currentCost(` + i + `, ` + cartProduct.unitCost + `, ` + "`" + cartProduct.currency + "`" + `)"
                            onclick="currentCost(` + i + `, ` + cartProduct.unitCost + `, ` + "`" + cartProduct.currency + "`" + `)" id="itemQuant` + i + `" class="col-2 form-control" type="number" value="` + cartProduct.count + `">` +
                            //end of quantity input
                            `
                            </div>
                        </div>
                    </div>
                    <div style="flex-grow: 1; max-width: 100%;" class="col-2 p-0 text-right"><p id="costPlaceholder` + i + `"></p></div>
                </div>
            `;
            getJSONData(CART_INFO_URL).then(function(resultObj){
                if (resultObj.status === "ok"){
                    currentCost(i, cartProduct.unitCost, cartProduct.currency);
                }
            });
    }

    document.getElementById("cart-list-container").innerHTML = htmlContentToAppend;
}

function currentCost(num, unitCost, currency)
{
  if (currency == "UYU")
  {
  var itemQuant = document.getElementById("itemQuant" + num).value;
  var costPlaceholder = document.getElementById("costPlaceholder" + num);
  var subtotal = itemQuant*unitCost;
  var subtotalUYU = "UYU " + subtotal;
  costPlaceholder.innerHTML = subtotalUYU;

  newCost[num] = subtotal;

  }
  else
  {
    var itemQuant = document.getElementById("itemQuant" + num).value;
    var costPlaceholder = document.getElementById("costPlaceholder" + num);
    var subtotal = itemQuant*unitCost*40;
    var subtotalUYU = "UYU " + subtotal;
    costPlaceholder.innerHTML = subtotalUYU;

    newCost[num] = subtotal;

  }
  var totalCost = newCost.reduce((a, b) => a + b, 0);
  currentTotalCost(totalCost);
}

function currentTotalCost(totalCost)
{
  var totalCostPlaceholder = document.getElementById("totalCostPlaceholder");
  totalCostPlaceholder.innerHTML = "Costo total: <span style=color:green;>" + totalCost + "</span>";
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(CART_INFO_URL).then(function(resultObj){
      if (resultObj.status === "ok"){
          showCartList(resultObj.data);
          newCost = [];
      }
  });
});
