var product = [];

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + product[0].images[i] + `" alt="">
            </div>
        </div>
        `

        document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
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
            let productCriteriaHTML = document.getElementById("productCriteria");

            productNameHTML.innerHTML = product[num].name;
            productDescriptionHTML.innerHTML = product[num].description;
            productCountHTML.innerHTML = product[num].soldCount;
            productCriteriaHTML.innerHTML = product[num].currency + " " + product[num].cost;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product[num].images);
        }
    });
});
