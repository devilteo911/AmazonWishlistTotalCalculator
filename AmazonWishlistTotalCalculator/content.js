// function to calculate the sum of an array
function total_calculator(arr){
    var total = 0;
    for (const elem of arr) {
      total += elem;
    }
    return total
}
  
var elem = document.getElementsByClassName("a-offscreen");
var prices_arr = [];
for(var i = 0; i < elem.length; i++){
    //console.log(elem[i]['innerText'])
    var price_found = elem[i]['innerHTML'];
    // removing the euro symbol
    var price_str = price_found.split('&',1)[0]; 
    price_str = price_str.replace(',','.')
    // console.log(price_str);
    // converting to float
    prices_arr[i] = parseFloat(price_str);
}

//alert(total_calculator(prices_arr));


total = total_calculator(prices_arr);
// Setting up the view

x_pos = 45;
y_pos = 500;
size = 20;

var div = document.createElement('div'); 
div.style.fontSize = size + 'px';
div.style.position = "absolute";
div.style.left = x_pos+'px';
div.style.top = y_pos+'px'; //creating element
div.textContent = 'TOTAL: ' + total; //adding text on the element 
// Color gradient just for fun
if (total < 500) {
  div.style.textColor = 'green';
}
else if (total > 500 || total < 800){
  div.style.textColor = 'orange';
}
else{
  div.style.textColor = 'red';
} 
document.body.appendChild(div); //appending the element