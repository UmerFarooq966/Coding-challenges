var shareButton = document.getElementById("share");
var sharebarBtn = document.getElementById("sharebarId");

shareButton.addEventListener("click", shareBar);

function shareBar(e) {
  sharebarBtn.classList.toggle("active");
  shareButton.classList.toggle("active");
}

var mbShareBtn = document.getElementById("footer-share");
var mbsharebarlbtn = document.getElementById("mb-sharebarId");
var mbdetailbtn = document.getElementById("footer-detailId");
var footer = document.getElementById("footer");

mbShareBtn.addEventListener("click", shareFooter);

function shareFooter(e) {
  mbShareBtn.classList.toggle("active");
  mbsharebarlbtn.classList.toggle("active");
  mbdetailbtn.classList.toggle("active");
  footer.classList.toggle("active");
}
