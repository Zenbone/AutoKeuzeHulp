import { getAutos } from "../services/AutosService";

document.addEventListener("DOMContentLoaded", function () {
    // let merkveld = document.querySelector("???");

    getAutos().then(data => {
        data.forEach(function (d) {
            console.log(d);
            // merkveld.naamveld.textContent = d
        });
    })
})