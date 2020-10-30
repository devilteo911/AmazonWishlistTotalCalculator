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

alert(total_calculator(prices_arr));
