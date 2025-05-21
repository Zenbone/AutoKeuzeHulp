let checkbox1 = document.createElement("INPUT");
	checkbox1.type = "checkbox"
	checkbox1.id = "alledaags"
	checkbox1.className = "checkbox";
	document.querySelector(".rij1").append(checkbox1)
	let checkbox2 = document.createElement("INPUT");
	checkbox2.type = "checkbox"
	checkbox2.id = "road"
	checkbox2.className = "checkbox";
	document.querySelector(".rij2").append(checkbox2)
	let checkbox3 = document.createElement("INPUT");
	checkbox3.type = "checkbox"
	checkbox3.id = "gezin"
	checkbox3.className = "checkbox";
	document.querySelector(".rij3").append(checkbox3)
	let checkbox4 = document.createElement("INPUT");
	checkbox4.type = "checkbox"
	checkbox4.id = "sport"
	checkbox4.className = "checkbox";
	document.querySelector(".rij4").append(checkbox4)
	let checkbox5 = document.createElement("INPUT");
	checkbox5.type = "checkbox"
	checkbox5.id = "aanhang"
	checkbox5.className = "checkbox";
	document.querySelector(".rij5").append(checkbox5)
	let checkbox6 = document.createElement("INPUT");
	checkbox6.type = "checkbox"
	checkbox6.id = "zware"
	checkbox6.className = "checkbox";
	document.querySelector(".rij6").append(checkbox6)

document.addEventListener("DOMContentLoaded", function() {
	document.querySelector('.volgendevraagbtn').addEventListener("click", function(){
		let gebruiken = []
		console.log(document.querySelector("#alledaags"))
		if(document.querySelector("#alledaags").checked) gebruiken.push("alledaags");
		if(document.querySelector("#road").checked) gebruiken.push("road");
		if(document.querySelector("#gezin").checked) gebruiken.push("gezin");
		if(document.querySelector("#sport").checked) gebruiken.push("sport");
		if(document.querySelector("#aanhang").checked) gebruiken.push("aanhang");
		if(document.querySelector("#zware").checked) gebruiken.push("zware");
		
		let data =  {
        gebruik: gebruiken
		}
		fetch("https://autokeuzehulp.onrender.com/testkeuzes", {
        	method: "POST",
       		mode: "cors",
        	headers: {
        	    "Content-Type": "application/json",
        	},
        	body: JSON.stringify(data)
		})
   	});

})