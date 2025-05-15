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
	document.querySelector('.benz').addEventListener("click",  (event) => {
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
	document.querySelector('.dies').addEventListener("click",  (event) => {
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
	document.querySelector('.beide').addEventListener("click",  (event) => {
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