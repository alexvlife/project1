/*
Создать объект «Товар» включающий:
- свойства, такие как фото, артикул, 
описание и т.п.;

- метод, которому при вызове передается 
id пустого div элемента и в этот html 
элемент данный метод создаст и внесёт 
все необходимые html элементы, стили, 
и содержание для отображения 
всей информации хранящихся в свойствах 
объекта о данном товаре.
*/

var objProduct = {
    
    prodName: "Телевизор",
    prodArticle: "234567",
    prodPrice: "50000",
    prodDescript: "Новый ультратонкий телевизор с OLED дисплеем. Яркое и насыщенное изображение. Можно записывать передачи и фильмы с ТВ на флеш-накопитель.",
    prodPhoto: "img/img_tv_02.jpg",
    
    createProd: function(idName){
        var ourProd = document.getElementById(idName);
        
        var prodImg = document.createElement('img');
            prodImg.setAttribute("src", this.prodPhoto);
            prodImg.setAttribute("alt", this.prodName);
            prodImg.setAttribute("title", this.prodName);
            prodImg.style.width = "300px";
            prodImg.style.height = "180px";
            prodImg.style.display = "block";
            prodImg.style.margin = "0 auto";
        
            ourProd.appendChild(prodImg);
        
        var prodP1 = document.createElement('p');
            prodP1.style.fontWeight = "bold";
            prodP1.innerText = 'Наименование товара: ';
                
        var p1Span = document.createElement('span');
            p1Span.style.fontWeight = "normal";
            p1Span.innerText = this.prodName;
            prodP1.appendChild(p1Span);   
        
        var prodP2 = document.createElement('p');
            prodP2.style.fontWeight = "bold";
            prodP2.innerText = 'Артикул: ';
                
        var p2Span = document.createElement('span');
            p2Span.style.fontWeight = "normal";
            p2Span.innerText = this.prodArticle;
            prodP2.appendChild(p2Span);
        
        var prodP3 = document.createElement('p');
            prodP3.style.fontWeight = "bold";
            prodP3.innerText = 'Цена: ';
                
        var p3Span = document.createElement('span');
            p3Span.style.fontWeight = "normal";
            p3Span.innerText = this.prodPrice;
            prodP3.appendChild(p3Span);
        
        var prodP4 = document.createElement('p');
            prodP4.style.fontWeight = "bold";
            prodP4.innerText = 'Описание: ';
                
        var p4Span = document.createElement('span');
            p4Span.style.fontWeight = "normal";
            p4Span.innerText = this.prodDescript;
            prodP4.appendChild(p4Span);
        
        ourProd.appendChild(prodP1);
        ourProd.appendChild(prodP2);
        ourProd.appendChild(prodP3);
        ourProd.appendChild(prodP4);
        
    }
    
}

objProduct.createProd('product01');
