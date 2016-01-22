
	function calculateAlcoholByVolume(e) {
  
	  var result =  validateInput();
	  
	  
		var originalGravity = document.getElementById('originalGravityText').value;
		var finalGravity = document.getElementById('finalGravityText').value;
		
		//Maths equation for ABV
		var abv = (1.05/0.79) * ((originalGravity - finalGravity) / finalGravity) * 100;
		var roundedAbv = parseFloat(abv).toFixed(2); 

		var abvResult = document.getElementById('ABVResult');
		abvResult.innerHTML = "<span class='resultsLabel'>Alcohol by Volume (ABV): <br></span>" + roundedAbv + " %";

		//Maths equation for calories
		var calories = 26.40 * abv * 1.6;
		var roundedCalories = parseFloat(calories).toFixed(2); 

		var caloriesResult = document.getElementById('caloriesResult');
		caloriesResult.innerHTML = "<span class='resultsLabel'>Calories per bottle (based on 750ml): <br></span>" + roundedCalories;

		var alertBox = document.getElementById('alertBox');
	
	}

	function validateInput(){
		
		var originalGravity = document.getElementById('originalGravityText').value;
		var finalGravity = document.getElementById('finalGravityText').value;
		var alertBox = document.getElementById('alertBox');
		var abvResult = document.getElementById('ABVResult');
		var caloriesResult = document.getElementById('caloriesResult');

    
    	if (!originalGravity || !finalGravity){
				alertBox.innerHTML = ('Please fill in all of the fields.');
				hideResults();
				return false;
			}
      
      	if (isNaN(finalGravity) || isNaN(originalGravity)){
				alertBox.innerHTML = ('Only numbers allowed sorry.');
				hideResults();
				return false;
			}
		
		if (finalGravity > originalGravity) {
				alertBox.innerHTML = ('The final gravity should be lower than the original gravity.');
				hideResults();
				return false;
			}
			
				alertBox.innerHTML = ('');
				showResults();
				return true;
	}

	function hideResults(){
		var abvResult = document.getElementById('ABVResult');
		var caloriesResult = document.getElementById('caloriesResult');
		abvResult.classList.add("hideLabel");
		caloriesResult.classList.add("hideLabel");
	}

	function showResults(){
		var abvResult = document.getElementById('ABVResult');
		var caloriesResult = document.getElementById('caloriesResult');
		abvResult.classList.remove("hideLabel");
		caloriesResult.classList.remove("hideLabel");
	}



document.getElementById("calculateButton").onclick = calculateAlcoholByVolume;
	
	
