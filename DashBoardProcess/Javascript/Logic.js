const title = document.querySelectorAll(".SideCell");
let titletasko = document.querySelector(".tasktitle").children[1];
console.log(titletasko);
title.forEach((tt) => {
  tt.addEventListener("click", (event) => {
    console.log(event.target.innerText);
    titletasko.innerHTML = event.target.innerText;
  });
});
