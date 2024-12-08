let btn = document.querySelector("button");
let form = document.querySelector("form");

let pass1 = document.querySelector("#password1");
let pass2 = document.querySelector("#password2");

pass2.addEventListener("input", () => {
  let pas1 = pass1.value.trim();
  let pas2 = pass2.value.trim();

  if (pas1 !== pas2) {
    pass2.classList.remove("valid");
    pass2.classList.add("invalid");
  } else {
    pass2.classList.remove("invalid");
    pass2.classList.add("valid");
  }
});

form.addEventListener("submit", (event) => {
  let num = document.querySelector("#mobileNum").value.trim();
  console.log(num.length);
  if (num.length == 10 && !isNaN(num)) {
    form.setAttribute("action", "https://formspree.io/f/xovqzjvr");
    form.setAttribute("method", "POST");
  } else {
    event.preventDefault();
    alert("please inter 10 digits");
  }
});
