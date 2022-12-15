// Get the modal
let modal = document.querySelector("#myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
let img = document.querySelectorAll(".myImg");
let modalImg = document.querySelector("#img01");
let captionText = document.querySelector("#caption");
img.forEach(item => item.addEventListener('click' , showModalPhoto)
 )
 function showModalPhoto(){
   modal.style.display = "block";
   modalImg.src = this.src;
   captionText.innerHTML = this.alt;
 }

// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
  modal.style.display = "none";
}

