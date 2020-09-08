var product = [];
var name = localStorage.getItem("item");

function showImagesGallery(array){

  if (name === "Chevrolet Onix Joy")
  {
    var num = 0;
  }
  else if (name === "Fiat Way")
  {
    var num = 1;
  }
  else if (name === "Suzuki Celerio")
  {
    var num = 2;
  }
  else
  {
    var num = 3;
  }

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + product[num].images[i] + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
    }
}

function showRelatedProducts(array, products)
{
  if (name === "Chevrolet Onix Joy")
  {
    var num = 0;
  }
  else if (name === "Fiat Way")
  {
    var num = 1;
  }
  else if (name === "Suzuki Celerio")
  {
    var num = 2;
  }
  else
  {
    var num = 3;
  }

  let htmlContentToAppend2 = "";

  for(let i = 0; i < array.length; i++){
      let imageSrc = array[i];

      htmlContentToAppend2 += `
      <div class="col-lg-3 col-md-4 col-6">
          <div class="pointer d-block mb-4 h-100">
              <a onclick="loadProduct(` + imageSrc + `)"><img class="img-fluid img-thumbnail" src="` + products[imageSrc].imgSrc + `" alt=""></a>
          </div>
      </div>
      `

      document.getElementById("relatedProducts").innerHTML = htmlContentToAppend2;

  }
}
function loadProduct(attr)
{
  if (attr == 0)
  {
    localStorage.setItem("item", "Chevrolet Onix Joy");
  }
  else if (attr == 1)
  {
    localStorage.setItem("item", "Fiat Way");
  }
  else if (attr == 2)
  {
    localStorage.setItem("item", "Suzuki Celerio");
  }
  else
  {
    localStorage.setItem("item", "Peugot 208");
  }
  window.location.assign("product-info.html");
}
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;
            if (name === "Chevrolet Onix Joy")
            {
              var num = 0;
              var letter = PRODUCT_INFO_COMMENTS_URL_C;
            }
            else if (name === "Fiat Way")
            {
              var num = 1;
              var letter = PRODUCT_INFO_COMMENTS_URL_F;
            }
            else if (name === "Suzuki Celerio")
            {
              var num = 2;
              var letter = PRODUCT_INFO_COMMENTS_URL_S;
            }
            else
            {
              var num = 3;
              var letter = PRODUCT_INFO_COMMENTS_URL_P;
            }

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCountHTML = document.getElementById("productCount");
            let productPriceHTML = document.getElementById("productPrice");

            productNameHTML.innerHTML = product[num].name;
            productDescriptionHTML.innerHTML = product[num].description;
            productCountHTML.innerHTML = product[num].soldCount;
            productPriceHTML.innerHTML = product[num].currency + " " + product[num].cost;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product[num].images);


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
  })}});

  getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
      getJSONData(PRODUCTS_URL).then(function(resultObj2){
        if (resultObj2.status === "ok"){
          products = resultObj2.data;
      product = resultObj.data;
      if (name === "Chevrolet Onix Joy")
      {
        var num = 0;
      }
      else if (name === "Fiat Way")
      {
        var num = 1;
      }
      else if (name === "Suzuki Celerio")
      {
        var num = 2;
      }
      else
      {
        var num = 3;
      }
      showRelatedProducts(product[num].relatedProducts, products);
    }})}});
});
