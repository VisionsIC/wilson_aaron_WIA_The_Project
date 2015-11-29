// JavaScript Document

$(document).ready(function(){
	
	function myFunction() {
    var index;
    var text = "<ul>";
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    for (index = 0; index < fruits.length; index++) {
        text += "<li>" + fruits[index] + "</li>";
    }
    text += "</ul>";
    document.getElementById("demo").innerHTML = text;
}
	
	});