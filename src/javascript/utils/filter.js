function filterAutosMetKeuzes(autos, keuzes) {
	let gefilterd = {}
	let matchpunten = 0
	let criteria = []

	for (let keuze in keuzes) {
		if (keuzes[keuze] !== "geen") {
			for (let merk in autos) {
				for (let onfav in keuzes.onfavmerken) {
					if (onfav !== merk) {	// || keuzes.onfavmerken === "geen"
						for (let model in autos[merk]) {

							matchpunten = 0
							criteria = []
							for (let fav in keuzes.favmerken) {
								if (keuzes.favmerken[fav] === merk) {
									criteria.push("favoriete merk")
									matchpunten++
								}
							}

							if (keuzes.minprijs <= autos[merk][model].prijs && keuzes.maxprijs >= autos[merk][model].prijs) {
								matchpunten++
								criteria.push("prijs is goed")
							}

							if (keuze === "uitvoering") {
								if (Array.isArray(keuzes[keuze])) {
									for (let k of keuzes[keuze]) {
										if (k === autos[merk][model].uitvoering ||k === autos[merk][model].versnelling ) {
											console.log("uitvoering klopt!")
											criteria.push("uitvoering klopt!")
											matchpunten++
										}
									}
								} else {
									if (keuzes[keuze] === autos[merk][model].uitvoering) {
										console.log("uitvoering klopt!")
										criteria.push("uitvoering klopt!")
										matchpunten++
									}
								}
							}
							else if (keuze === "soort") {
								for (let k of keuzes[keuze]) {
									if (k === autos[merk][model].soort) {
										console.log("soort klopt!")
										criteria.push("soort klopt!")
										matchpunten++
									}
								}
							}
							else if (keuze === "gebruik") {
								for (let k of keuzes[keuze]) {
									for (let tag of autos[merk][model].tags) {
									if (k === tag) {
										console.log("gebruik klopt met tags")
										criteria.push("gebruik klopt met tags")
										matchpunten++
									}
								}
								}
							}
							else if (keuze === "interesses") {
								let gesplittestring = keuzes[keuze].split("-")
								for (let string of gesplittestring) {
									for (let tag of autos[merk][model].tags) {
										if (string === tag) {
											console.log("interesse klopt met tags")
											criteria.push("interesse klopt met tags")
											matchpunten++
										}
									}
								}
							}
							if (matchpunten !== 0) {
								if (!gefilterd[merk]) {
									gefilterd[merk] = {}
								}
								gefilterd[merk][model] = autos[merk][model]
								Object.assign(gefilterd[merk][model], { matchpunten: matchpunten })
								Object.assign(gefilterd[merk][model], { criteria: criteria })
							}
						}
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
