var formButton = document.getElementById("formButton");
var htmlContentToAppend = sessionStorage.getItem("multipleComments");
document.getElementById("myComments").innerHTML = htmlContentToAppend;
formButton.addEventListener("click", createComment);
function createComment(){


      // this is how you set it
    var newComment = new Object();
    comment=[];

    newComment.score = document.getElementById('score').value;
    newComment.text = document.getElementById('text').value;

    comment.push(newComment);
    sessionStorage.setItem('comment', JSON.stringify(comment));

       // this is how you will retrive it

    var retrievedObject = sessionStorage.getItem('comment');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));


          var fullComment = JSON.parse(retrievedObject);

          htmlContentToAppend += `
            <div class="comment-section">
              <h5 class="left-user">` + user + ` - <span class="score">` + fullComment[0].score + `/5</span>` + `</h5><p class="right-datetime">` + fullComment.dateTime + `</p>
                <p class="comment-left">` + fullComment[0].text + `</p>
            </div>
          `

          document.getElementById("myComments").innerHTML = htmlContentToAppend;
          sessionStorage.setItem("multipleComments", htmlContentToAppend);


}
