const cousor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  let top = window.scrollY;
  cousor.style.left = e.pageX + "px";
  cousor.style.top = e.pageY - top + "px";
});
