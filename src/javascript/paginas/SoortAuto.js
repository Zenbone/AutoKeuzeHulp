document.addEventListener("DOMContentLoaded", function() {
	let deletesoortdd = document.querySelector('#deletesoort')
	
	document.querySelector('.suv').dataset.value = "suv";
	document.querySelector('.hatch').dataset.value = "hatch";
	document.querySelector('.sedan').dataset.value = "sedan";
	document.querySelector('.comp').dataset.value = "comp";
	document.querySelector('.coupe').dataset.value = "coupe";
	document.querySelector('.stat').dataset.value = "stat";
	document.querySelector('.cabr').dataset.value = "cabr";
	document.querySelector('.mpv').dataset.value = "mpv";


	document.querySelector('.suv').addEventListener("click", (event) => {
		let option = document.createElement("option");
        option.text = event.currentTarget.textContent
		option.value = event.currentTarget.dataset.value
        deletesoortdd.add(option);
	})
	document.querySelector('.hatch').addEventListener("click", (event) => {
		let option = document.createElement("option");
        option.text = event.currentTarget.textContent
		option.value = event.currentTarget .dataset.value
        deletesoortdd.add(option);
	})
	document.querySelector('.sedan').addEventListener("click", (event) => {
		let option = document.createElement("option");
        option.text = event.currentTarget.textContent
		option.value = event.currentTarget.dataset.value
        deletesoortdd.add(option);
	})
	document.querySelector('.comp').addEventListener("click", (event) => {
		let option = document.createElement("option");
        option.text = event.currentTarget.textContent
		option.value = event.currentTarget.dataset.value
        deletesoortdd.add(option);	
	})
	document.querySelector('.coupe').addEventListener("click", (event) => {
		let option = document.createElement("option");
        option.text = event.currentTarget.textContent
        option.value = event.currentTarget.dataset.value
		deletesoortdd.add(option);
	})
	document.querySelector('.stat').addEventListener("click", (event) => {
		let option = document.createElement("option");
        option.text = event.currentTarget.textContent
        option.value = event.currentTarget.dataset.value
		deletesoortdd.add(option);
	})
	document.querySelector('.cabr').addEventListener("click", (event) => {
		let option = document.createElement("option");
        option.text = event.currentTarget.textContent
        option.value = event.currentTarget.dataset.value
		deletesoortdd.add(option);
	})
	document.querySelector('.mpv').addEventListener("click", (event) => {
		let option = document.createElement("option");
        option.text = event.currentTarget.textContent
		option.value = event.currentTarget.dataset.value
        deletesoortdd.add(option);
	})
	
	document.querySelector('#verwijderbtn').addEventListener("click", function(){
		deletesoortdd.remove(deletesoortdd.selectedIndex)
	})
	
	document.querySelector('.volgendevraagbtn').addEventListener("click", function(){
		let geselecteerdesoorten = []
		for (let opt of deletesoortdd.options){
        	geselecteerdesoorten.push(opt.value);
      	}
		let data =  {
        soortautos: geselecteerdesoorten
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
		
	document.querySelector('.geenvoorkeurbtn').addEventListener("click", function(){
		let data =  {
        soortautos: "geen"
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