//  this code works without javascript because on the use of input type of check box and class of toggler
//  styling the checked state
// Get the checkbox element
const toggler = document.querySelector(".toggler");

// Get the container element
const showcase = document.querySelector(".showcase");

// Add an event listener to the checkbox
toggler.addEventListener("change", function () {
  console.log("checked ");
  if (this.checked) {
    showcase.classList.add("checked");
  } else {
    showcase.classList.remove("checked");
  }
});
