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
import { filterAutosMetKeuzes } from '../utils/filter.js';

async function main() {
  
  try {
    let autos = await getData("/autos/toyota");
    let testkeuzes = await getData("/testkeuzes")
    // 	let autosgefilterd = filterAutosMetKeuzes(autos, testkeuzes)
    let temp = document.querySelector("#modeltemplate")

    for (let auto in autos) { //autosgefilterd
      let tempclone = temp.content.cloneNode(true);
      let afbeeldingauto = tempclone.querySelector("img");
      let modelnaam = tempclone.querySelector("h2");
      let tags = tempclone.querySelector("p");
	  let afbeeldingpath = autos[auto].afbeelding //autosgefilterd
      afbeeldingauto.src = `https://autokeuzehulp.onrender.com${afbeeldingpath}` // autosgefilterd
      modelnaam.textContent  = auto //autosgefilterd
      tags.textContent = autos[auto].tags //autosgefilterd
      document.querySelector(".autosrij").appendChild(tempclone);
    }
  } catch (err) {
    console.error(err);
    // niks laten zien?
  }

}

document.addEventListener("DOMContentLoaded", main)