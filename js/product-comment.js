var formButton = document.getElementById("formButton");
var htmlContentToAppend = sessionStorage.getItem("multipleComments");
document.getElementById("myComments").innerHTML = htmlContentToAppend;
formButton.addEventListener("click", createComment);
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();

today = mm + '-' + dd + '-' + yyyy;

function createComment(){
  var scoreTxt = document.getElementById("score").value;

if (scoreTxt > 0 && scoreTxt <= 5)
{
  if (htmlContentToAppend == null)
  {
    htmlContentToAppend = "";}
    var newComment = new Object();
    comment=[];

    newComment.score = document.getElementById('score').value;
    newComment.text = document.getElementById('text').value;

    comment.push(newComment);
    sessionStorage.setItem('comment', JSON.stringify(comment));


    var retrievedObject = sessionStorage.getItem('comment');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));


          var fullComment = JSON.parse(retrievedObject);

          htmlContentToAppend += `
            <div class="comment-section">
              <h5 class="left-user">` + user + ` - <span class="score">` + fullComment[0].score + `/5</span>` + `</h5><p class="right-datetime">` + today + `</p>
                <p class="comment-left">` + fullComment[0].text + `</p>
            </div>
          `

          document.getElementById("myComments").innerHTML = htmlContentToAppend;
          sessionStorage.setItem("multipleComments", htmlContentToAppend);

}
document.getElementById("score").value = "";
document.getElementById("text").value = "";
}
