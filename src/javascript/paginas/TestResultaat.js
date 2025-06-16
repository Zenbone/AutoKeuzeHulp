// function laadScripts() {
//   const s = document.createElement('script');
//   s.src = 'https://jouw-backend.onrender.com/js/bundel.js';
//   s.defer = true;
//   document.head.appendChild(s);
// }
// document.addEventListener("DOMContentLoaded", function() {
// 	laadScripts()
// })

import { getData } from '../pathservices/GetData.js';
import { filterAutosMetKeuzes } from '../utils/Filter.js';

console.log("verberg elementen")
document.querySelector(".zoekfilterrij").style.display = "none";
document.querySelector(".conceptautosrij").style.display = "none";

async function getData(path) {
      let url = `https://autokeuzehulp.onrender.com${path}`
      try {
        let response = await fetch(url);
        if (!response.ok) { throw new Error(`Response status: ${response.status}`); }
		let json = await response.json();
		return json
      } catch (error) {
        console.log(error.message);
      }
 }

function filterAutosMetKeuzes(autos, keuzes) {
	let gefilterd = {}
	let matchpunten = 0
	let criteria = []

	for (let merk in autos) {
		for (let model in autos[merk]) {
			matchpunten = 0
			criteria = []
			for (let keuze in keuzes) {
				if (keuzes[keuze] !== "geen") {

					if (keuze === "onfavmerken") {
						for (let onfav of keuzes.onfavmerken) {
							if (merk === onfav) {
								matchpunten--
							}
						}
					}
					else if (keuze === "minprijs" || keuze === "maxprijs") {
						if (keuzes.minprijs <= autos[merk][model].prijs && keuzes.maxprijs >= autos[merk][model].prijs) {
							matchpunten += 0.5
							criteria.push("prijs is goed")
						}
					}
					else if (keuze === "favmerken") {
						for (let fav in keuzes.favmerken) {
							if (keuzes.favmerken[fav] === merk) {
								criteria.push("favoriete merk")
								matchpunten++
							}
						}
					}
					else if (keuze === "uitvoering") {
						if (Array.isArray(keuzes[keuze])) {
							for (let k of keuzes[keuze]) {
								if (k === autos[merk][model].uitvoering || k === autos[merk][model].versnelling) {
									criteria.push("versnelling / uitvoering klopt!")
									matchpunten++
								}
							}
						} else {
							if (keuzes[keuze] === autos[merk][model].uitvoering) {
								criteria.push("uitvoering klopt!")
								matchpunten++
							}
						}
					}
					else if (keuze === "soort") {
						for (let k of keuzes[keuze]) {
							if (k === autos[merk][model].carrosserie) {
								criteria.push("soort klopt!")
								matchpunten++
							}
						}
					}
					else if (keuze === "gebruik") {
						for (let k of keuzes[keuze]) {
							
							if(k === "alledaags"){								
								for (let tag of autos[merk][model].tags) {
									if(tag === "efficient"){
										matchpunten++
										criteria.push("gebruik klopt met tags")

									}else if(tag === "betrouwbaar"){
										matchpunten++
										criteria.push("gebruik klopt met tags")
									}
								}
								
							}
// 							else if(k === "roadtrips"){ 								
// 								if(autos[merk][model].kilometerbereik >= 500){
// 									matchpunten++
// 								}
// 								if(autos[merk][model].kofferruimte >= 100){
// 									matchpunten++
// 								} 								
// 							}
// 							else if(k === "gezin"){ 								
// 								if(autos[merk][model].interieurruimte >= 300){
// 									matchpunten++
// 								}
// 								if(autos[merk][model].kinderstoel){
// 									matchpunten++
// 								} 								
// 							}
// 							else if(k === "sport"){ 	
// 								for (let tag of autos[merk][model].tags) {
// 									if(tag === "snel"){
// 										matchpunten++
// 									}
// 								}
// 								if(autos[merk][model].motorcilinders >= 4){
// 									matchpunten++
// 								}																
// 							}
// 							else if(k === "trekhaak"){ 								
// 								if(autos[merk][model].trekhaak){
// 									matchpunten++
// 								}
// 								if(autos[merk][model].maximaletrekgewicht >= 50){
// 									matchpunten++
// 								}
// 								torque ook?							
// 							}
// 							else if(k === "veelgrotespullen"){ 								
// 								if(autos[merk][model].interieurruimte >= 300){
// 									matchpunten++
// 								}
// 								if(autos[merk][model].kofferruimte >= 100){
// 									matchpunten++
// 								} 								
// 							}						
						}
					}
					else if (keuze === "interesses") {
						let gesplittestring = keuzes[keuze].split("-")
						for (let string of gesplittestring) {
							for (let tag of autos[merk][model].tags) {
								if (string === tag) {
									criteria.push("interesse klopt met tags")
									matchpunten++
								}
							}
						}
					}
				}
			}
		if (matchpunten >= 0) {
			gefilterd[model] = autos[merk][model]
			Object.assign(gefilterd[model], { matchpunten: matchpunten })
			Object.assign(gefilterd[model], { criteria: criteria })
			Object.assign(gefilterd[model], { merk: merk })
		}
	}
	}
// 	console.log(gefilterd)
	return gefilterd
}


async function main() {
  
  try {
    let autos = await getData("/autos");
    let testkeuzes = await getData("/testkeuzes")
    let autosgefilterd = filterAutosMetKeuzes(autos, testkeuzes)
	// 	komt terug als { model : specs}		(merk binnen specs)
	autosgefilterd = Object.entries(autosgefilterd)
// 	  maak array in array van object in objecten
	autosgefilterd = autosgefilterd.sort((a, b) => b[1].matchpunten - a[1].matchpunten)
// 	  sorteer op basis van de matchpunten van tweede value van array en omgekeerd van hoog naar laag (b - a)
// 	console.log(autosgefilterd )

    let temp = document.querySelector("#modeltemplate")

    for (let [modelnaam, specs] of autosgefilterd) { 
// 	  console.log(specs)
	  let tempclone = temp.content.cloneNode(true);
      let afbeeldingauto = tempclone.querySelector("img");
      let autonaam = tempclone.querySelector("h3");
      let tags = tempclone.querySelector("p");
	  let afbeeldingpath = specs.afbeelding 
      afbeeldingauto.src = `https://autokeuzehulp.onrender.com${afbeeldingpath}` 
      autonaam.textContent  = specs.merk + " - " + modelnaam
      tags.textContent = specs.tags
      document.querySelector(".autosrij").appendChild(tempclone);
    }
  } catch (err) {
    console.error(err);
	 let error = document.createElement("p")
	 error.textContent = "Oeps er gaat iets fout.. probeer het later opnieuw aub "
	document.querySelector(".autosrij").appendChild(error);
  }

}

document.addEventListener("DOMContentLoaded", main())
