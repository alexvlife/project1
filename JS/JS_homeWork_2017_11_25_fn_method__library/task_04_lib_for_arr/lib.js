;

(function() {
	
	window.mySecondLib = {
		
		//поиск минимального элемента в переданном массиве;
		findMin: function(arr){
			
			var minTemp = arr[0];		
			for (var i = 1; i < arr.length; i++) {
				if(minTemp > arr[i])
					minTemp = arr[i];	
			}
			
			return minTemp;
		},
		
		//поиск максимального элемента в переданном массиве;	
		findMax: function(arr){
			
			var maxTemp = arr[0];
			for (var i = 1; i < arr.length; i++) {
				if(maxTemp < arr[i])
					maxTemp = arr[i];	
			}
			
			return maxTemp;
		},		
		
		
		//расчет среднего арифметического значения элементов переданного массива;			
		calcAverage: function(arr){
			
			var sum = 0;
		
			for (var i = 0; i < arr.length; i++) {
				sum += arr[i];	
			}
			
			return averageValue = parseInt(sum/arr.length);
		},		
				
		
		//создание копии (клонирование) переданного массива
		arrayClone: function(arr){
			
			return arrClone = arr.slice();
		},
		
	}
}()); 