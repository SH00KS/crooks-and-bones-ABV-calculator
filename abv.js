
	function calculateAlcoholByVolume(e) {
	var og = document.getElementById('ogText').value;
	var fg = document.getElementById('fgText').value;
	
	//Maths equation
	var math = (1.05/0.79) * ((og - fg) / fg) * 100;
	//alert(math);
	var result = document.getElementById('ABVResult');
	result.innerHTML = math;
	}

	document.getElementById("calculateButton").onclick = calculateAlcoholByVolume;
	