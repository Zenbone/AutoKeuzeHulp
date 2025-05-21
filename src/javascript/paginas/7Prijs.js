document.addEventListener("DOMContentLoaded", function() {
	
	document.querySelector('.volgendevraagbtn').addEventListener("click", function(){
		let minprijs = document.querySelector("#minprijs").value
		let maxprijs = document.querySelector("#maxprijs").value

		let data =  {
        	minprijs: minprijs,
			maxprijs: maxprijs
		}
		fetch("https://autokeuzehulp.onrender.com/testkeuzes", {
        	method: "POST",
       		mode: "cors",
        	headers: {
        	    "Content-Type": "application/json",
        	},
        	body: JSON.stringify(data)
   		})
	})
	document.querySelector('.geenvoorkeurbtn').addEventListener("click", function(){
		let data =  {
        	minprijs: "geen",
			maxprijs: "geen"
		}
		
		fetch("https://autokeuzehulp.onrender.com/testkeuzes", {
        	method: "POST",
       		mode: "cors",
        	headers: {
        	    "Content-Type": "application/json",
        	},
        	body: JSON.stringify(data)
   		})
	})
	
	
})