// Get the modal
var modal = document.getElementById("contact-modal");

// Get the button that opens the modal
var btn = document.getElementById("contact");
console.log(btn);

// Get the button that closes the modal
var span = document.getElementById("close-modal");

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.classList.toggle("is-active");
  console.log('click');
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.toggle("is-active");
}
