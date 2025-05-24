function filterAutosMetKeuzes(autos, keuzes) {
	let gefilterd = {}
	let matchpunten = 0
	let criteria = []
	let onfavoriet = true

	for (let merk in autos) {
		for (let model in autos[merk]) {
			matchpunten = 0
			criteria = []
			for (let keuze in keuzes) {
				if (keuzes[keuze] !== "geen") { //onfav
					for (let onfav of keuzes.onfavmerken) {
						onfavoriet = (merk === onfav) //onfav 
					}
					if (!onfavoriet) {

						if (keuze === "minprijs" || keuze === "maxprijs") {
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
								for (let tag of autos[merk][model].tags) {
									if (k === tag) {
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
										// 											console.log("interesse klopt met tags")
										criteria.push("interesse klopt met tags")
										matchpunten++
									}
								}
							}
						}

					}

				}
				// 				merk is onfavoriet, overslaan of minpunten geven? als minpunten dan if keuze is geen veranderen. voor nu overslaan

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
	console.log(gefilterd)
	return gefilterd
	// 	modellen met hoogste matchpunten bovenaan zetten 
}

export { filterAutosMetKeuzes }
