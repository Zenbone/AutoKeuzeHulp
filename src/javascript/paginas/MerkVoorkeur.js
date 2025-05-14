document.addEventListener("DOMContentLoaded", function() {
	console.log("snippet werkt")
	let addmerkdd = document.querySelector('#addmerk')
	let deletemerkdd = document.querySelector('#deletemerk')
	

	fetch('https://autokeuzehulp.onrender.com/autos')
		.then(response => response.json())
		.then(data => {
		    let merknamen = Object.keys(data);
			for (let x in merknamen) {
        		let option = document.createElement("option");
        		option.text = merknamen[x]
        		addmerkdd.add(option);
      		}
		})
	
	document.querySelector('#addmerk').addEventListener("change", (event) => {
		let geselecteerd = event.target.options[event.target.selectedIndex].text
		let option = document.createElement("option");
        option.text = geselecteerd.text
        deletemerkdd.add(option);
		addmerkdd.remove(addmerkdd.selectedIndex)
	})
	
	document.querySelector('#verwijderbtn').addEventListener("click", function(){
		let geselecteerdeoptie = deletemerkdd.options[deletemerkdd.selectedIndex]
		let option = document.createElement("option");
        option.text = geselecteerdeoptie.text
		console.log(geselecteerdeoptie.text)
        addmerkdd.add(option);
		deletemerkdd.remove(deletemerkdd.selectedIndex)
	})
	
	document.querySelector('.volgendevraagbtn').addEventListener("click", function(){
		let geselecteerdemerken = []
		for (let opt of deletemerkdd.options){
        	geselecteerdemerken.push(opt.text);
      	}
		let data =  {
        favmerken: geselecteerdemerken
		}
		
		fetch("https://autokeuzehulp.onrender.com/testkeuzes", {
        	method: "POST",
       		mode: "cors",
        	headers: {
        	    "Content-Type": "application/json",
        	},
        	body: JSON.stringify(data)
   		})
    	.then(resp => {
        	if (!resp.ok) {
            	throw new Error(`server gaf status ${resp.status}`);
        	}
       		return resp.json();
    	})
    	.then(jsonData => {
    	    console.log("response van server:", jsonData);
    	})
    	.catch(err => {
     	   console.error("Fetch error:", err);
    	});
	})

	document.querySelector('.geenvoorkeurbtn').addEventListener("click", function(){
		let data =  {
        favmerken: "geen"
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

	
	
	
});


