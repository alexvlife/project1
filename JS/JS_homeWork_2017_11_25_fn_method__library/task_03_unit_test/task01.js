/*
несколько тестов 
для функции, рассчитывающей 
y = 1/x + sqrt(x).
*/

function func(x){
	
    var y = 1/x + Math.sqrt(x);
    if(x < 0){
		return y = 'false';
	} else {
		return y;
	}
}

describe("Тестирование математической функции", function(){
	
    var xP1_test = 25;
	var msg = "Позитивный тест 1: x = 25, y = 5.04";
    it(msg, function(){
        var rez = func(xP1_test);
        expect(rez).toBe(5.04);
    });
	
	var xP2_test = 100;
	var msg = "Позитивный тест 2: x = 100, y = 10.01";
    it(msg, function(){
        var rez = func(xP2_test);
        expect(rez).toBe(10.01);
    });
	
	var xN1_test = 0;
	var msg = "Негативный тест 1: x = 0, y = Infinity";
    it(msg, function(){
        var rez = func(xN1_test);
        expect(rez).toBe(Infinity);
    });
	
	var xN2_test = -1;
	var msg = "Негативный тест 2: x = -1, y = false";
    it(msg, function(){
        var rez = func(xN2_test);
        expect(rez).toBe('false');
    });
	
});