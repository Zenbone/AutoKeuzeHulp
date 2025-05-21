// const s = document.createElement('script');
// s.src = 'https://jouw-backend.onrender.com/js/tools.js';
// s.defer = true;
// document.head.appendChild(s);

async function getData(path) {
      let url = `https://autokeuzehulp.onrender.com${path}`
      console.log(url)
      try {
        let response = await fetch(url);
        if (!response.ok) { throw new Error(`Response status: ${response.status}`); }
        let json = await response.json();
		console.log(json)
        return json
      } catch (error) {
        console.error(error.message);
      }
 }

// function filterAutosMetKeuzes(autos, keuzes){
// 	let match = 0;
// 	for(let keuze in keuzes){
// 		for(let merk in autos){
// 			for(let model in merk){
// 				for(let spec in model){
// // 					als key bestaat / hetzelfde is als andere key:
// 					if(keuze === spec){ 
// // 						als spec een array is bijvoorbeeld meerdere favoriete merken check of alle keuzes
// 						if(Array.isArray(keuzes[keuze])){
// 							for(let k of keuzes[keuze]){
// 								if(keuzes[keuze] === model[spec]){
// 									match ++
// 								}
// 							}
// // 						als spec gewoon string is en value van key hetzelfde is
// 						}else if(keuzes[keuze] === model[spec]){
// 							match++
// 						}
// 					}
// 				}
				
// 			}
// 		}
// 	}
// }
document.addEventListener("DOMContentLoaded", function() {
	let autos = getData("/autos")
	let testkeuzes = getData("/testkeuzes")
// 	let gefilterd = filterAutosMetKeuzes(autos, testkeuzes)
	
	let temp = document.getElementsByTagName("template")[0];
	
//   	for (let i = 0; i < Object.keys(gefilterd).length; i++) {
// 		geeft vaste breedte aan div zodat als een kolom gedraag en in rij
// 		let tempclone = temp.content.cloneNode(true);
//   		let imgurl = tempclone.querySelector("img");
// 		let h3 = tempclone.querySelector("h3");
//   		let p = tempclone.querySelector("p");
// 		imgurl.src = testkeuzes[afbeelding]
// 		h3.textContent = Object.keys(gefilterd)[i]
// 		p.textContent = gefilterd[i][tags]
//   		document.querySelector(".autosrij").appendChild(tempclone);
// 	}


})