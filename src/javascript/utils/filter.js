function filterAutosMetKeuzes(autos, keuzes) {
	let gefilterd = {}
	let obj = {}

	for (let keuze in keuzes) {
		for (let merk in autos) {
			for (let onfav in keuzes.onfavmerken) {
				if (onfav !== merk || keuzes.onfavmerken === "geen") {
					// 					merk is niet onfavoriet ga verder met code						





					for (let model in autos[merk]) {
						for (let spec in autos[merk][model]) {

							if (keuze === spec) {
								if (Array.isArray(keuzes[keuze])) {
									console.log("isarray")
									for (let k in keuzes[keuze]) {
										// 								check wat voor keuze het is en vergelijk op de juiste manier
										console.log(k)
										console.log(keuze)


									}
								}
								if (keuzes[keuze] !== "geen") {
									// 							check wat voor keuze het is en vergelijk op de juiste manier
									if (keuze === "")


										if (!gefilterd[merk]) {
											gefilterd[merk] = {}
										}
									gefilterd[merk][model] = autos[merk][model]
									// 							break?
								}
							}
						}

					}
				}
			}
		}
	}
	console.log(gefilterd)
	// 	favmerken bovenaan zetten?

	
}

export { filterAutosMetKeuzes }
