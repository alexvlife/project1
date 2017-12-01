;

(function() {
	
	window.mySecondLib = {
		
		//поиск минимального элемента в переданном массиве;
		findMin: function(arr){
		
			for (var i = 1; i < arr.length; i++) {
				if(min > arr[i])
					min = arr[i];	
			}
			
			return min;
		},
		
		//поиск максимального элемента в переданном массиве;	
		findMax: function(arr){
		
			for (var i = 1; i < arr.length; i++) {
				if(max < arr[i])
					max = arr[i];	
			}
			
			return max;
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
		
		
		
		
		
		
		remove: function(arr, ind){
			arr.splice(ind,1);
			return arr;
		},
		
		repeat: function(str, count){
			var newStr = '';
		
			for(var i = 0; i < count; i++){
				newStr += str;
			}
			return newStr;
		},
		
		pluck:function(arr,strName){ //strName - имя свойства
			var arrN = [];
			var temp;
			for(var i = 0; i < arr.length; i++){
				
				temp = arr[i][strName];
				arrN.push(temp);
			}
			return arrN;
		}
		
	}
}()); 