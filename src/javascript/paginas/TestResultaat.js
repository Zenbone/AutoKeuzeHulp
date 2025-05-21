// function laadScripts() {
//   const s = document.createElement('script');
//   s.src = 'https://jouw-backend.onrender.com/js/bundel.js';
//   s.defer = true;
//   document.head.appendChild(s);
// }
// document.addEventListener("DOMContentLoaded", function() {
// 	laadScripts()
// })

import { getData } from '../../app.js';
import { filterAutosMetKeuzes } from '../utils/filter.js';

document.addEventListener("DOMContentLoaded", function () {
  let autos = getData("/autos")
  let testkeuzes = getData("/testkeuzes")
  let gefilterd = filterAutosMetKeuzes(autos, testkeuzes)

  let temp = document.getElementsByTagName("template")[0];

  for (let i = 0; i < Object.keys(gefilterd).length; i++) {
    let tempclone = temp.content.cloneNode(true);
    let imgurl = tempclone.querySelector("img");
    let h3 = tempclone.querySelector("h3");
    let p = tempclone.querySelector("p");
    imgurl.src = testkeuzes[afbeelding]
    h3.textContent = Object.keys(gefilterd)[i]
    p.textContent = gefilterd[i][tags]
    document.querySelector(".autosrij").appendChild(tempclone);
  }


})