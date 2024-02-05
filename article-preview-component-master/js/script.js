var shareButton = document.getElementById("share");
var sharebarBtn = document.getElementById("sharebarId");
var detailbtn = document.getElementById("detailId");
var shareBarMb = document.getElementById("share-bar-mbId");

shareButton.addEventListener("click", shareBar);

function shareBar(e) {
  sharebarBtn.classList.toggle("active");
  shareButton.classList.toggle("active");
  detailbtn.classList.toggle("active");

  //   show mobile share bar
  shareBarMb.classList.toggle("active");

  console.log(detailbtn);
}
