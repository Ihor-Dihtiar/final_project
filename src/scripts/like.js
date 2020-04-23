const likeButton = document.querySelectorAll(".publication-footer__like-btn");
const likesCount = document.querySelectorAll(
  ".publication-footer__likes-count"
);
const svgHeart = document.querySelectorAll(".publication-footer__svg");

console.log(svgHeart[1]);

for (let i = 0; i < likeButton.length; i++) {
  likeButton[i].addEventListener("click", () => {
    svgHeart[i].classList.toggle("like");
    likesCount[i].classList.toggle("like");
  });
}
