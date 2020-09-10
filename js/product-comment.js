var formButton = document.getElementById("formButton");
formButton.addEventListener("click", createComment);
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var name = localStorage.getItem("item");
if (name === "Chevrolet Onix Joy")
{
  var num = 0;
  var htmlContentToAppend = sessionStorage.getItem("multipleComments0");
  document.getElementById("myComments").innerHTML = htmlContentToAppend;
}
else if (name === "Fiat Way")
{
  var num = 1;
  var htmlContentToAppend = sessionStorage.getItem("multipleComments1");
  document.getElementById("myComments").innerHTML = htmlContentToAppend;
}
else if (name === "Suzuki Celerio")
{
  var num = 2;
  var htmlContentToAppend = sessionStorage.getItem("multipleComments2");
  document.getElementById("myComments").innerHTML = htmlContentToAppend;
}
else
{
  var num = 3;
  var htmlContentToAppend = sessionStorage.getItem("multipleComments3");
  document.getElementById("myComments").innerHTML = htmlContentToAppend;
}

today = mm + '-' + dd + '-' + yyyy;


function createComment(){
  var scoreTxt = document.getElementById("score").value;

    if (name === "Chevrolet Onix Joy")
    {
      var num = 0;
      if (scoreTxt > 0 && scoreTxt <= 5)
      {
        if (htmlContentToAppend == null)
        {
          htmlContentToAppend = "";}
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

                document.getElementById("myComments").innerHTML = htmlContentToAppend;
                sessionStorage.setItem("multipleComments0", htmlContentToAppend);

      }
    }
    else if (name === "Fiat Way")
    {
      var num = 1;
      if (scoreTxt > 0 && scoreTxt <= 5)
      {
        if (htmlContentToAppend == null)
        {
          htmlContentToAppend = "";}
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

                document.getElementById("myComments").innerHTML = htmlContentToAppend;
                sessionStorage.setItem("multipleComments1", htmlContentToAppend);

      }
    }
    else if (name === "Suzuki Celerio")
    {
      var num = 2;
      if (scoreTxt > 0 && scoreTxt <= 5)
      {
        if (htmlContentToAppend == null)
        {
          htmlContentToAppend = "";}
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

                document.getElementById("myComments").innerHTML = htmlContentToAppend;
                sessionStorage.setItem("multipleComments2", htmlContentToAppend);

      }
    }
    else
    {
      var num = 3;
      if (scoreTxt > 0 && scoreTxt <= 5)
      {
        if (htmlContentToAppend == null)
        {
          htmlContentToAppend = "";}
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

                document.getElementById("myComments").innerHTML = htmlContentToAppend;
                sessionStorage.setItem("multipleComments3", htmlContentToAppend);

      }
    }

document.getElementById("score").value = "";
document.getElementById("text").value = "";
}
