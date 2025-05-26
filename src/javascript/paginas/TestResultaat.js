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