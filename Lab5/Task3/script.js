
function jsonCallback(data) {
	$('#tdhead').prepend("<tr><th>FIRSTNAME</th><th>EMAIL</th></tr>");
	for(var i=0; i<data.length; i++){
		nameList = data[i].name;
		emailList = data[i].email;
		$('#tdbody').prepend("<tr><td>" +nameList+ "</td><td><a href='mailto:" +emailList+ "'>"+emailList+"</a></td></tr>");
	}  
}

var nameList = "";
var emailList = "";

function loadPersons(){
	$.ajax({

		dataType: "jsonp",
		url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp"
	});
}


