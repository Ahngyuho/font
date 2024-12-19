let bigCateList = document.querySelectorAll(".big_category");

for (let bigCate of bigCateList) {
  // 클릭 이벤트 등록
  bigCate.addEventListener("click", () => {
    // picked 되어있는 거 지우기
    bigCateList.forEach((cate) => {
      cate.classList.remove("picked");
    });

    // picked 클래스 추가
    bigCate.classList.add("picked");
  });
}


let smallCateList = document.querySelectorAll('.small_category');

for (let smallCate of smallCateList) {
  // 클릭 이벤트 등록
  smallCate.addEventListener("click", () => {
    // picked 되어있는 거 지우기
    smallCateList.forEach((cate) => {
      cate.classList.remove("picked");
    });

    // picked 클래스 추가
    smallCate.classList.add("picked");
  });
}