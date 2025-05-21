document.querySelector('.effic').dataset.value = "effic";
document.querySelector('.betr').dataset.value = "betr";
document.querySelector('.goedk').dataset.value = "goedk";
document.querySelector('.snel').dataset.value = "snel";
document.querySelector('.luxe').dataset.value = "luxe";
document.querySelector('.effibetr').dataset.value = "effibetr";
document.querySelector('.effigoed').dataset.value = "effigoed";
document.querySelector('.betrgoed').dataset.value = "betrgoed";
document.querySelector('.effiluxe').dataset.value = "effiluxe";
document.querySelector('.betrluxe').dataset.value = "betrluxe";
document.querySelector('.goedluxe').dataset.value = "goedluxe";
document.querySelector('.snelluxe').dataset.value = "snelluxe";

document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll('h2').forEach(h2 => {
		h2.addEventListener("click", (event) => {
			let interesse = event.currentTarget.dataset.value
			
			let data =  {
        	interesses: interesse
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
	
	
})
// snelluxe
// goedluxe
// betrluxe
// effiluxe
// betrgoed
// effigoed
// effibetr
// luxe
// snel
// goedk
// betr
// effic