function loadHTML(url, elementId, callback) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(elementId).innerHTML = data;
      if (callback) callback();
    })
    .catch((error) => {
      console.error(`Error loading ${url}:`, error);
    });
}

loadHTML("/header.html", "header", function () {
  let button = document.querySelector("#gnb_all_btn");
  if (button) {
    button.addEventListener("click", function () {
      let gnb = document.querySelector("#gnb");
      if (gnb) {
        gnb.classList.toggle("hide");
        button.classList.toggle("off");
      }
    });
  }
});

loadHTML("/footer.html", "footer", function () {});

document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("client_sidebar")) {
    loadHTML(
      "/mypage/mypage_client_sidebar.html",
      "client_sidebar",
      function () {}
    );
  }
});
