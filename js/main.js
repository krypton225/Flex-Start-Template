AOS.init({
  offset: 120,
  duration: 1200,
  easing: "ease-in-out",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

// window.addEventListener("resize", () => {
//   let dataList = [].slice.call(document.querySelectorAll('data-spy="scroll"'));

//   dataList.forEach((ds) => {
//     bootstrap.ScrollSpy.getInstance(dataList);
//   });
// });

document.querySelectorAll(".navbar-nav li").forEach((link) => {
  link.addEventListener("click", () => {
    document.getElementById("navbarNav").classList.remove("show");
  });
});

// * ================================================================

document.querySelectorAll('button[data-bs-toggle="tab"]').forEach((t, i) => {
  t.addEventListener("show.bs.tab", function (e) {
    let targetClass = t.dataset.bsTarget;
    var pane = document.querySelector("#ueberTabB " + targetClass);
    var sibling = document.querySelector("#ueberTabB .tab-pane.active");
    // hide 2nd pane sibling
    sibling.classList.remove("show");
    sibling.classList.remove("active");
    // show 2nd pane
    pane.classList.add("show");
    pane.classList.add("active");
  });
});

// * ================================================================

// * Make the portfolio.
// let myListFilter = document.querySelectorAll("ul.filter-list li");
// let getAllImages = document.querySelectorAll(".my-img-portfolio");

// myListFilter.forEach((li) => {
//   li.addEventListener("click", removeActiveAndPutInClickedBtn);
//   li.addEventListener("click", showImages);
// });

// function removeActiveAndPutInClickedBtn() {
//   myListFilter.forEach((li) => {
//     li.classList.remove("active");
//     this.classList.add("active");
//   });
// }

// function showImages() {
//   getAllImages.forEach((myImg) => {
//     myImg.style.display = "none";
//   });

//   getAllImages.forEach((img) => {
//     const filterValue = img.getAttribute("data-filter");

//     console.log(filterValue);

//     if (img.classList.contains(filterValue) || filterValue === "all") {
//       img.classList.remove("hide-imgs");
//       img.classList.add("visible-imgs");
//     } else {
//       img.classList.remove("hide-imgs");
//       img.classList.add("visible-imgs");
//     }
//   });
// }

// myListFilter.forEach((li) => {
//   li.addEventListener("click", removeActiveAndPutInClickedBtn);
//   li.addEventListener("click", showImages);
// });

// function showImages() {
//   getAllImages.forEach((img) => {
//     img.style.display = "none";
//   });

//   document.querySelectorAll(this.dataset.filter).forEach((all) => {
//     all.style.display = "block";
//   });
// }

// * Swiper JS
var swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      shadow: true,
      translate: ["-125%", 0, -800],
      rotate: [0, 0, -90],
    },
    next: {
      shadow: true,
      translate: ["125%", 0, -800],
      rotate: [0, 0, 90],
    },
  },
});

// * ================================================================

var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  slidesPerView: 6,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
