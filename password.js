var username = document.getElementById("username");

var password = document.getElementById("password");

var admins = ["admin", "Sarthak"];
var passwords = [12345678, "Sarthak"];

function btnFun() {
  console.log("Hi");

  for (let i = 0; i < admins.length; i++) {
    if (username.value == admins[0] && password.value == passwords[0]) {
      window.open("data1.html");
    }

    if (username.value == admins[1] && password.value == passwords[1]) {
      window.open("data2.html");
    }
  }
}
