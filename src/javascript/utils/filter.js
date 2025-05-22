function filterAutosMetKeuzes(autos, keuzes) {
	let gefilterd = {}
	let matchpunten = 0

	for (let keuze in keuzes) {
		if (keuzes[keuze] !== "geen") {
			for (let merk in autos) {
				for (let onfav in keuzes.onfavmerken) {
					if (onfav !== merk) {	// || keuzes.onfavmerken === "geen"
						for (let model in autos[merk]) {

							matchpunten = 0
							for (let fav in keuzes.favmerken) {
								if (fav === merk) {
									matchpunten++
								}
							}

							for (let specs in autos[merk][model]) {

								if (keuzes.minprijs > auto[merk][model].prijs && keuzes.maxprijs < auto[merk][model].prijs) {
									matchpunten++
								}

								for (let tag in autos[merk][model][specs]) {
									if (Array.isArray(keuzes[keuze])) {
										for (let k in keuzes[keuze]) {
											if (keuze === "uitvoering") {
												console.log(k)
												console.log(autos[merk][model].uitvoering)
												console.log(autos[merk][model].versnelling)
												if (k === autos[merk][model].uitvoering) {
													matchpunten++
												}
												if (k === autos[merk][model].versnelling) {
													matchpunten++
												}
											}
											else if (keuze === "gebruik") {
												if (k === autos[merk][model][specs][tag]) {
													matchpunten++
													// 											break?
												}
											}
										}
									} else if (keuze === "interesses") {
										// 									split string zodat je bv effiecient en goedkoop kan vergelijken met tags van automodel
										// 									if(splitstringresult === autos[merk][model][spec][tag]){
										// 										matchpunten++
										// 										break?
										// 									}										 
									} else if (keuze === spec) {
										if (keuzes[keuze] === autos[merk][model][specs]) {
											matchpunten++
											// 										break? ws niet
										}
									}
								}
							}
						}
						if (!gefilterd[merk]) {
							gefilterd[merk] = {}
						}
						gefilterd[merk][model] = autos[merk][model]
						Object.assign(gefilterd[merk][model], { matchpunten: matchpunten })
					}
					// 				merk is onfavoriet, overslaan of minpunten geven? als minpunten dan if keuze is geen veranderen. voor nu overslaan
				}
			}
		}
	}
	console.log(gefilterd)
	// 	return gefilterd en testkeuzes?
	// 	modellen met hoogste matchpunten bovenaan zetten 

}

export { filterAutosMetKeuzes }
