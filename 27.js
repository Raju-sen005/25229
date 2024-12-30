// ALEART,CONFIRM,PROMPT IN JAVASCRIPT
alert("Hi, I'am Raju! Welcome to my website.");

let a = prompt("Enter Your Name");
let b = prompt("Enter Your Age");
let c = prompt("Enter Your Gender");
document.write(`${a}<br/>`);
document.write(`${b}<br/>`);
document.write(`${c}<br/>`);

let e = confirm("Do you want to become a member ofthis website.");
if (e) {
  alert("Thanks! for membership.");
} else {
  document.write("Allow me write on the page.");
}
