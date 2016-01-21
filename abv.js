
	function calculateAlcoholByVolume(e) {
	var originalGravity = document.getElementById('originalGravityText').value;
	var finalGravity = document.getElementById('finalGravityText').value;
	
	//Maths equation
	var abv = (1.05/0.79) * ((originalGravity - finalGravity) / finalGravity) * 100;
	var roundedAbv = parseFloat(abv).toFixed(2); 

	//alert(math);
	var result = document.getElementById('ABVResult');
	result.innerHTML = roundedAbv + " %";
	}

	document.getElementById("calculateButton").onclick = calculateAlcoholByVolume;
	