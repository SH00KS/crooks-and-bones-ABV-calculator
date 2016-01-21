
	function calculateAlcoholByVolume(e) {
	var originalGravity = document.getElementById('originalGravityText').value;
	var finalGravity = document.getElementById('finalGravityText').value;
	
	//Maths equation for ABV
	var abv = (1.05/0.79) * ((originalGravity - finalGravity) / finalGravity) * 100;
	var roundedAbv = parseFloat(abv).toFixed(2); 

	var abvResult = document.getElementById('ABVResult');
	abvResult.innerHTML = "Alcohol by Volume (ABV):" + roundedAbv + " %";

	//Maths equation for calories
	var calories = 26.40 * abv * 1.6;
	var roundedCalories = parseFloat(calories).toFixed(2); 

	var caloriesResult = document.getElementById('caloriesResult');
	caloriesResult.innerHTML = "Calories per bottle (based on 750ml):" + roundedCalories;

	var alertBox = document.getElementById('alertBox');

		if (finalGravity > originalGravity) {
			alertBox.innerHTML = ('The final gravity should be lower than the original gravity');
		}

		if (!originalGravity || !finalGravity){
			alertBox.innerHTML = ('Please fill in all of the fields');
		}

		if (isNaN(finalGravity || originalGravity)){
			alertBox.innerHTML = ('Only numbers allowed sorry.');
		}

	}

	


function validateInput(e){
	var originalGravity = document.getElementById('originalGravityText').value;
	var finalGravity = document.getElementById('finalGravityText').value;

	if (finalGravity > originalGravity) {
			alertBox.innerHTML = ('The final gravity should be lower than the original gravity');
			return false;
		}

		if (!originalGravity || !finalGravity){
			alertBox.innerHTML = ('Please fill in all of the fields');
			return false;
		}

		if (isNaN(finalGravity || originalGravity)){
			alertBox.innerHTML = ('Only numbers allowed sorry.');
			return false;
		}

		if (booleanValue == true){
			alert('hi')
		}

}


document.getElementById("calculateButton").onclick = calculateAlcoholByVolume;
	
	
