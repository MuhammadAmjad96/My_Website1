const button = document.getElementById("FirstButton");

button.addEventListener("click", function () {
  alert("Hello, I pressed the first button!");
});


const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page refresh

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  alert("Thank you " + name + "! We received your message.");
  
  form.reset(); // clear form
});

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
