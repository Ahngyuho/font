let submenuList = document.querySelectorAll(".submenu_item");
let contentBoxes = document.querySelectorAll(".content_box");

contentBoxes[0].style.display = "block";

for (let submenu of submenuList) {
  submenu.addEventListener("click", () => {
    submenuList.forEach((menu) => { 
      menu.style.fontWeight = "400";
      menu.style.color = "#1A1A1A";

    })
    contentBoxes.forEach((box) => {
      box.style.display = "none";
    });
    
    let target = submenu.getAttribute("data-target");
    let boxElement = document.getElementById(target);
    boxElement.style.display = "block";
    submenu.style.color = "#FF7400";
    submenu.style.fontWeight = "700";
  });
}
