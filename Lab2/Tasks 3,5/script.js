
			function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  
  document.getElementById("unl").appendChild(li);
  
  document.getElementById("input").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode();
  
  span.appendChild(txt);
  li.appendChild(span);

  
}
