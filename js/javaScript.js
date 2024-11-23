console.log("testing")
// When the user clicks on the button, scroll to the top of the document
  // Add an event listener to the document that triggers the topFunction
  document.addEventListener("DOMContentLoaded", function()
  {
    document.getElementById("scrollUp").addEventListener("click", topFunction);
  });
  
  function topFunction() {
    document.documentElement.scrollTop = 0; 
  }









  