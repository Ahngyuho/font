let submenuList = document.querySelectorAll(".submenu_item");
let contentBoxes = document.querySelectorAll(".content_box");

contentBoxes[0].style.display = "block";

for (let submenu of submenuList) {
  submenu.addEventListener("click", () => {
    contentBoxes.forEach((box) => {
      box.style.display = "none";
    });
    
    let target = submenu.getAttribute("data-target");
    let boxElement = document.getElementById(target);
    boxElement.style.display = "block";
  });
}
