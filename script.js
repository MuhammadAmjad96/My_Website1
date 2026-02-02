const button = document.getElementById("FirstButton");

button.addEventListener("click", function () {
  alert("Hello, I pressed the first button!");
});

const button1 = document.getElementById("SecondButton");

button1.addEventListener("click", function () {
  alert("Hello, I pressed the second button!");
});

document.getElementById("ThirdButton").addEventListener("click", function(){
  alert("Hello World!");
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  alert("Thank you " + name + "! We received your message.");
  
  form.reset(); // clear form
});
