document.addEventListener("DOMContentLoaded", function() {
	console.log("sdgd")
	fetch('https://autokeuzehulp.onrender.com/autos')
		.then(response => response.json())
		.then(data => {
			const merknamen = Object.keys(data);
			for(let x in merknamen){
				document.querySelector('.testresult').textContent += merknamen[x]
    		}
		})
})