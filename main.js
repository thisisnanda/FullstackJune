var myPageCounter = 1;

var dataContainer = document.getElementById("animal-info");

var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
    var myAjax = new XMLHttpRequest();
    myAjax.open("Get", "https://learnwebcode.github.io/json-example/animals-" + myPageCounter + ".json");

    myAjax.onload = function () {
        var myData = JSON.parse(myAjax.responseText);
        renderHTML(myData);
    }
    myAjax.send();
    myPageCounter++;
    if(myPageCounter>3){
        btn.classList.add("hide-me");
    }
})

function renderHTML(data){
    var display = "";

    for(i=0; i<data.length; i++){
        display += "<p> " + data[i].name + " is a " + data[i].species + " that likes to eat" ;
        for(j=0; j<data[i].foods.likes.length; j++){
            if(j==0){
                display += data[i].foods.likes[j];
            }
            else{
                display += " and " + data[i].foods.likes[j];
            }
        }
        display += "and dislikes";
        for (j = 0; j < data[i].foods.dislikes.length; j++) {
            if (j == 0) {
                display += data[i].foods.dislikes[j];
            }
            else {
                display += " and " + data[i].foods.dislikes[j];
            }
        }

        display += ".</p>";
    }
    dataContainer.insertAdjacentHTML("beforeend", display);
}

