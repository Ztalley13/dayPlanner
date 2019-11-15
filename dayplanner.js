function createElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("#input");
  var createBtn = document.createElement("#create-button");
  var textInput = document.textContent(inputValue);
  li.append(textInput);

  if(inputValue == '') {
    alert("this is empty")
  } else {
    document.getElementById("ul").appendChild("li");
  }

  document.getElementById("#input").value = "";

  var createBtn = document.createElement("button");
  var text = document.textContent("");
    createBtn.className = "close";
    createBtn.appendChild(text);
    li.appendChild(createBtn);

    for(i = 0; i < closebutton.legnth; i++){
      closebutton[i].onclick = function(){
        var theDiv = this.parentElement;
        theDiv.style.display = 'none';
      }
    }
}

var ulList = document.querySelector("ul");
ulList.addEventListener("click", function(event) {
  if(event.target.tagName == "li"){
    event.target.classList.toggle('checked');
  }
});