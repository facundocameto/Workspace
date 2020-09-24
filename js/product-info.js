
function showProductInfo(productArray){

//get product clicked from URL
  var params = new URLSearchParams(location.search);
  var nameURL = params.get('name');

  //check what product is
    let htmlContentToAppend = "";
    for(let i = 0; i < productArray.length; i++){
        let product = productArray[i];

        if (nameURL == product.name)
        {
            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("productCount");
            let productPriceHTML = document.getElementById("productPrice");

            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCountHTML.innerHTML = product.soldCount;
            productPriceHTML.innerHTML = product.currency + " " + product.cost;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
            let commentConst = "https://facundocameto.github.io/Workspace/json/" + product.id + "_COMMENTS.json";
            console.log(commentConst);
            loadComments(commentConst);
            getJSONData(PRODUCTS_URL).then(function(resultObj2){
              if (resultObj2.status === "ok"){
      showRelatedProducts(product, resultObj2.data);
          }});
        }
    }
  }

  function showImagesGallery(array)
  {

  let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let images = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img style="cursor: pointer;" class="img-fluid img-thumbnail" onclick="showBigImage(` + "`" + images + "`" + `)" src="` + images + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function showBigImage(imageId)
{
  var bigImageBox = document.getElementById("bigImageBox");
  var htmlContentToAppend = "";


  htmlContentToAppend = `
  <div class="d-flex justify-content-center col-md-12">
      <div class="d-block mb-4 h-100">
          <img class="w-100" src="` + imageId + `" alt="">
      </div>
  </div>
  `

  bigImageBox.innerHTML = htmlContentToAppend;
}

function showRelatedProducts(product, array)
{

let htmlContentToAppend2 = "";

for(let i = 0; i < array.length; i++){
    let times = product.relatedProducts[i];

    htmlContentToAppend2 += `
    <div class="col-lg-3 col-md-4 col-6">
        <div class="pointer d-block mb-4 h-100">
            <a href="product-info.html?name=` + array[times].name + `"><img class="img-fluid img-thumbnail" src="` + array[times].imgSrc + `" alt=""></a>
        </div>
    </div>
    `

    document.getElementById("relatedProducts").innerHTML = htmlContentToAppend2;

}
}

function loadComments(letter)
{
  getJSONData(letter).then(function(resultObj){
  if (resultObj.status === "ok"){
    comment = resultObj.data;

    let htmlContentToAppend = "";

    for(let i = 0; i < comment.length; i++){

        htmlContentToAppend += `
          <div class="comment-section">
            <h5 class="left-user">` + comment[i].user + ` - <span class="score">` + comment[i].score + `/5</span>` + `</h5><p class="right-datetime">` + comment[i].dateTime + `</p>
              <p class="comment-left">` + comment[i].description + `</p>
          </div>
        `

        document.getElementById("comments").innerHTML = htmlContentToAppend;
    }
  }
});
}

//run showProductInfo if its all ok
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
          showProductInfo(resultObj.data);
        }
    });
});
