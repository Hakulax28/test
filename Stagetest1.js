const inputList = ['rope', 'pore', 'repo', 'red rum', 'murder', 'listen', 'silent', 'endeavour']; // Invoer woorden
var checks = [false, false, false, false, false, false, false, false]; // Check of een woord al is geweest
var outputList = [];

// Array met de inputList gesorteerd (rope -> eopr)
// replace -> verwijderen spaties in woorden (red rum -> redrum)
// split -> verander een string in array van letters
// sort -> sorteer de array met letters
// join -> zet de array terug naar string
var inputSort = [];
for(var i in inputList) {
	inputSort[i] = inputList[i].replace(/\s+/g, '').split("").sort().join("");
}

for(var x = 0; x < inputList.length; x++) {
	// Staat het woord al in de outputlist? -> Sla over
	if(checks[x] === true) { continue; }

	// Maak een temp array aan om gelijke woorden in op te slaan
	let tempArray = [inputList[x]];

	for(var y = x+1; y < inputList.length; y++) {
		// Staat het woord al in de outputlist? -> Sla over
		if(checks[y] === true) { continue; }

		// Zijn 2 woorden gelijk? -> 
		// 1. Zet het nieuwe woord in de tempArray
		// 2. Geef aan dat het woord in de outputList staat
		if(inputSort[x] == inputSort[y]) {
			tempArray.push(inputList[y]);
			checks[y] = true;
		}
	}
	// Plak de tempArray aan het einde van de outputlist
	outputList.push(tempArray);
}

//output
console.log(outputList);