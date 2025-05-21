document.addEventListener("DOMContentLoaded", function() {
	
	document.querySelector('.plughyb').addEventListener("click",  (event) => {
		let uitvoering = event.target.textContent
		let data = {
			uitvoering: uitvoering
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
	document.querySelector('.mildhyb').addEventListener("click",  (event) => {
		let uitvoering = event.target.textContent
		let data = {
			uitvoering: uitvoering
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
	document.querySelector('.elek').addEventListener("click",  (event) => {
		let uitvoering = event.target.textContent
		let data = {
			uitvoering: uitvoering
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
	document.querySelector('.water').addEventListener("click",  (event) => {
		let uitvoering = event.target.textContent
		let data = {
			uitvoering: uitvoering
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
	document.querySelector('.bevestigbtn').addEventListener("click",  function(){
		let uitvoering = []
		let benzine = document.querySelector('#benz')
		let diesel = document.querySelector('#dies')
		let automaat = document.querySelector('#aut')
		let schakel = document.querySelector('#sch')
		if(benzine.checked) uitvoering.push(benzine.value)
		if(diesel.checked) uitvoering.push(diesel.value)
		if(automaat.checked) uitvoering.push(automaat.value)
		if(schakel.checked) uitvoering.push(schakel.value)
		
		let data = {
			uitvoering: uitvoering
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
        uitvoering: "geen"
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