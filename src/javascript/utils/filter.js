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
									criteria.push("interesse klopt met tags")
									matchpunten++
								}
							}
						}
					}
				}
			}
		}
		if (!(matchpunten <= 0)) {
			gefilterd[model] = autos[merk][model]
			Object.assign(gefilterd[model], { matchpunten: matchpunten })
			Object.assign(gefilterd[model], { criteria: criteria })
			Object.assign(gefilterd[model], { merk: merk })
		}
	}
	console.log(gefilterd)
	return gefilterd
}


export { filterAutosMetKeuzes }
