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

							for (let specs in autos[merk][model]) {
								for (let tag in autos[merk][model][specs]) {
									if (Array.isArray(keuzes[keuze])) {
										for (let k in keuzes[keuze]) {

											if (keuze === "uitvoering") {
												if (k === autos[merk][model].uitvoering) {
													criteria.push("uitvoering klopt!")
													matchpunten++
												}
												if (k === autos[merk][model].versnelling) {
													criteria.push("versnelling klopt!")
													matchpunten++
												}
											}
											else if (keuze === "gebruik") {
												console.log(autos[merk][model][specs][tag])
												if (k === autos[merk][model][specs][tag]) {
													criteria.push("gebruik klopt!")
													matchpunten++
													// 											break?
												}
											}
										}
									} else if (keuze === "interesses") {
										let gesplittestring = keuzes[keuze].split("-")
										for (let string in gesplittestring) {
											if (string === autos[merk][model][specs][tag]) {
												console.log("interesse klopt met tags")
												criteria.push("interesse klopt met tags")
												matchpunten++
												// 												break?
											}
										}

									} else if (keuze === specs) {
										if (keuzes[keuze] === autos[merk][model][specs]) {
											criteria.push("keuze waarde direct vergeleken en klopt")
											matchpunten++
											// 										break? ws niet
										}
									}
								}
							}


							console.log(matchpunten)
							if (matchpunten !== 0) {
								if (!gefilterd[merk]) {
									gefilterd[merk] = {}
									console.log("merk aangemaakt", merk)
								}
								gefilterd[merk][model] = autos[merk][model]
								Object.assign(gefilterd[merk][model], { matchpunten: matchpunten })
								Object.assign(gefilterd[merk][model], { criteria: criteria })
								console.log(gefilterd)

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
