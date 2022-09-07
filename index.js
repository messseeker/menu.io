// RUCHIRA MESS

const ruchira_mess_value1 = localStorage.getItem("ruchira_mess-value1");
const ruchira_first_dish = localStorage.getItem("ruchira_dish-value1");
const ruchira_second_dish = localStorage.getItem("ruchira_dish-value2");
const ruchira_price1 = localStorage.getItem("ruchira_price-value1");
const ruchira_price2 = localStorage.getItem("ruchira_price-value2");
const ruchira_chapati1 = localStorage.getItem("ruchira_chapati-value1");
const ruchira_chapati2 = localStorage.getItem("ruchira_chapati-value2");
const ruchira_rice1 = localStorage.getItem("ruchira_dal-value1");

// document.getElementById("ruchira_messname_1").innerHTML = ruchira_mess_value1;

document.getElementById("ruchira_dish_1").innerHTML = ruchira_first_dish;
document.getElementById("ruchira_dish_3").innerHTML = ruchira_first_dish;

document.getElementById("ruchira_dish_2").innerHTML = ruchira_second_dish;
document.getElementById("ruchira_dish_4").innerHTML = ruchira_second_dish;

document.getElementById("ruchira_price1").innerHTML = "Price " + ruchira_price1 + " Rs" ;
document.getElementById("ruchira_price2").innerHTML = "Price " + ruchira_price2 + " Rs" ;

document.getElementById("ruchira_chapati_1").innerHTML = ruchira_chapati1 + " Chapati";
document.getElementById("ruchira_chapati_2").innerHTML = ruchira_chapati2 + " Chapati" ;

document.getElementById("ruchira_dal_1").innerHTML = ruchira_rice1;




// AUNTI'S MESS

const aunty_mess_value1 = localStorage.getItem("aunty_mess-value1");
const aunty_first_dish = localStorage.getItem("aunty_dish-value1");
const aunty_second_dish = localStorage.getItem("aunty_dish-value2");
const aunty_price1 = localStorage.getItem("aunty_price-value1");
const aunty_price2 = localStorage.getItem("aunty_price-value2");
const aunty_chapati1 = localStorage.getItem("aunty_chapati-value1");
const aunty_chapati2 = localStorage.getItem("aunty_chapati-value2");
const aunty_rice1 = localStorage.getItem("aunty_dal-value1");

// document.getElementById("aunty_messname_1").innerHTML = aunty_mess_value1;

document.getElementById("aunty_dish_1").innerHTML = aunty_first_dish;
document.getElementById("aunty_dish_3").innerHTML = aunty_first_dish;

document.getElementById("aunty_dish_2").innerHTML = aunty_second_dish;
document.getElementById("aunty_dish_4").innerHTML = aunty_second_dish;

document.getElementById("aunty_price1").innerHTML = "Price " + aunty_price1 + " Rs" ;
document.getElementById("aunty_price2").innerHTML = "Price " + aunty_price2 + " Rs" ;

document.getElementById("aunty_chapati_1").innerHTML = aunty_chapati1 + " Chapati";
document.getElementById("aunty_chapati_2").innerHTML = aunty_chapati2 + " Chapati";

document.getElementById("aunty_dal_1").innerHTML = aunty_rice1;





function clears() {
    localStorage.clear();
}
  
function submits(){
    alert("Hello World");
}




// function clears() {
//     localStorage.clear();
// }


// var now = new Date();
// var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0, 0) - now;
// if (millisTill10 < 0) {
//      millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
// }
// setTimeout(function(){alert("It's 10am!")}, millisTill10);

