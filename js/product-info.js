var product = [];

function showImagesGallery(array){

  var name = localStorage.getItem("item");
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

    let htmlContentToAppend2 = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend2 += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + product[num].images[relatedProducts] + `" alt="">
            </div>
        </div>
        `

        document.getElementById("relatedProducts").innerHTML = htmlContentToAppend2;
    }
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;
            var name = localStorage.getItem("item");
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
        }
    });

  getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
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
});
