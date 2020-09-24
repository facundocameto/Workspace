var formButton = document.getElementById("formButton");
formButton.addEventListener("click", createComment);
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

function loadMyComments(productArray)
{
  var params = new URLSearchParams(location.search);
  var nameURL = params.get('name');

  //check what product is
    for(let i = 0; i < productArray.length; i++){
        let product = productArray[i];

        if (nameURL == product.name)
        {
  var htmlContentToAppend = sessionStorage.getItem(product.name);
  document.getElementById("myComments").innerHTML = htmlContentToAppend;
}}
}

today = mm + '-' + dd + '-' + yyyy;

function createComment(){

  getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
      if (resultObj.status === "ok"){
        productArray = resultObj.data;

  var scoreTxt = document.getElementById("score").value;
  if (scoreTxt > 0 && scoreTxt <= 5)
  {

      var params = new URLSearchParams(location.search);
      var nameURL = params.get('name');

      //check what product is
        for(let i = 0; i < productArray.length; i++){
            let product = productArray[i];
            var htmlContentToAppend = ""

            if (nameURL == product.name)
            {

      var newComment = new Object();
      comment=[];

      newComment.score = document.getElementById('score').value;
      newComment.description = document.getElementById('text').value;
      newComment.user = user;
      newComment.dateTime = today;

      comment.push(newComment);
      sessionStorage.setItem('comment', JSON.stringify(comment));


      var retrievedObject = sessionStorage.getItem('comment');
      console.log('retrievedObject: ', JSON.parse(retrievedObject));


            var fullComment = JSON.parse(retrievedObject);

            htmlContentToAppend += `
              <div class="comment-section">
                <h5 class="left-user">` + fullComment[0].user + ` - <span class="score">` + fullComment[0].score + `/5</span>` + `</h5><p class="right-datetime">` + fullComment[0].dateTime + `</p>
                  <p class="comment-left">` + fullComment[0].description + `</p>
              </div>
            `

            document.getElementById("myComments").innerHTML += htmlContentToAppend;
            var writed = document.getElementById("myComments").innerHTML;
            sessionStorage.setItem(product.name, writed);

document.getElementById("score").value = "";
document.getElementById("text").value = "";
}}}};
})};

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
          loadMyComments(resultObj.data);
        }
    });
});
