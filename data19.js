const form = document.getElementById("form");
const messname1 = document.getElementById("messname1");
const dishname1 = document.getElementById("dishname1");
const dishname2 = document.getElementById("dishname2");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const chapati1 = document.getElementById("chapati1");
const chapati2 = document.getElementById("chapati2");
const dal1 = document.getElementById("dal1");
// const dal2 = document.getElementById("dal2");


form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Mess Name
  // const messvalue1 = messname1.value;
  // localStorage.setItem("shivshambho_mess-value1", messvalue1);

  // Which Dish
  const dishvalue1 = dishname1.value;
  localStorage.setItem("shivshambho_dish-value1", dishvalue1);

  const dishvalue2 = dishname2.value;
  localStorage.setItem("shivshambho_dish-value2", dishvalue2);

  // Price
  const pricevalue1 = price1.value;
  localStorage.setItem("shivshambho_price-value1", pricevalue1);

  const pricevalue2 = price2.value;
  localStorage.setItem("shivshambho_price-value2", pricevalue2);


  // Number of Chapati's
  const chapativalue1 = chapati1.value;
  localStorage.setItem("shivshambho_chapati-value1",chapativalue1);

  const chapativalue2 = chapati2.value;
  localStorage.setItem("shivshambho_chapati-value2",chapativalue2);


  // Dal and Rice
  const dalvalue1 = dal1.value;
  localStorage.setItem("shivshambho_dal-value1",dalvalue1);

  // const dalvalue2 = dal2.value;
  // localStorage.setItem("dal-value2",dalvalue2);

  window.alert("Your Response is Submited.");
  window.location.href = "index.html";
});