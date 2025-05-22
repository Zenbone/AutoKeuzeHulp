function filterAutosMetKeuzes(autos, keuzes){
	let match = 0;
	for(let keuze in keuzes){
		for(let merk in autos){
			for(let model in merk){
				for(let spec in model){
// 					als key bestaat / hetzelfde is als andere key:
					if(keuze === spec){ 
// 						als spec een array is bijvoorbeeld meerdere favoriete merken check of alle keuzes
						if(Array.isArray(keuzes[keuze])){
							for(let k in keuzes[keuze]){
								if(keuzes[keuze] === model[spec]){
									match ++
								}
							}
// 						als spec gewoon string is en value van key hetzelfde is
						}else if(keuzes[keuze] === model[spec]){
							match++
						}
					}
				}
				
			}
		}
	}
}

export {filterAutosMetKeuzes}
