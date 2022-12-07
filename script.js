// Get the modal
let modal = document.querySelector("#myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.querySelector("#myImg");
let modalImg = document.querySelector("#img01");
let captionText = document.querySelector("#caption");
img.addEventListener('click' , display)
function display(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 }

// Get the <span> element that closes the modal
let span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
modal.onclick = function(event) {
   if(event.currentTarget =! modalImg){
  modal.style.display = "none";
   }
}

