
//char
var elDiv = document.getElementById('keyValue');

function getChar(event) {
  if (event.which == null) { // IE
    if (event.keyCode < 32) return null; // спец. символ
    return String.fromCharCode(event.keyCode)
  }

  if (event.which != 0 && event.charCode != 0) { // все кроме IE
    if (event.which < 32) return null; // спец. символ
        return String.fromCharCode(event.which); // остальные
  }

  return null; // спец. символ
}

//UTF-code
var elDivUTFcode = document.getElementById('UTFcode');

function getUTFcode(event) {

  if (event.which != 0 && event.charCode != 0) {
    if (event.which < 32) return null;
        return event.which;
  }

  return null; // спец. символ
}

//onkeypress для тега HTML
document.documentElement.onkeypress = function(){
	elDiv.innerHTML = getChar(event);
	elDivUTFcode.innerHTML = getUTFcode(event);
}



//далее код для вывода keyCode и изменения цвета нажатой клавиши
	
var elKey = document.getElementsByClassName('key');//массив клавиш
var elDivKeyCode = document.getElementById('keyCode');

//keyCode
//onkeydown
document.documentElement.onkeydown = function getKeyCode(event) {

	for(var i = 0; i <= elKey.length; i++){

		if(event.keyCode === Number(elKey[i].getAttribute('id'))){
			elKey[i].style.backgroundColor = "yellow";
			
		} else {
				elKey[i].style.backgroundColor = "white";
		}
		
		elDivKeyCode.innerHTML = event.keyCode;
	}
}