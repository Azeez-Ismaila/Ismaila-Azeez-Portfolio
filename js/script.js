window.addEventListener("load", () => {
  document.querySelector(".main").classList.remove("hidden");
  document.querySelector(".home-section").classList.add("active");
  // -----------Page Loader------------
  document.querySelector(".page-loader").classList.add("fade-out");
  setTimeout(() => {
    document.querySelector(".page-loader").style.display = "none";
  }, 600);
});
// ------------ Toggle Navbar ------------
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
  hideSection();
  toggleNavBar();
  document.body.classList.toggle("hide-scrolling");
});
function hideSection() {
  document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavBar() {
  document.querySelector(".header").classList.toggle("active");
}

// ------------------ Active Section ---------------------
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("link-item") && e.target.hash !== "") {
    // Activate Overlay to prevent multiple clicks
    document.querySelector(".overlay").classList.add("active");
    navToggler.classList.add("hide");
    if (e.target.classList.contains("nav-item")) {
      toggleNavBar();
    } else {
      hideSection();
      document.body.classList.add("hide-scrolling");
    }
    setTimeout(() => {
      document
        .querySelector("section.active")
        .classList.remove("active", "fade-out");
      document.querySelector(e.target.hash).classList.add("active");
      window.scrollTo(0, 0);
      document.body.classList.remove("hide-scrolling");
      navToggler.classList.remove("hide");
      document.querySelector(".overlay").classList.remove("active");
    }, 500);
  }
});

// ----------- About Tabs-------
const tabsContainer = document.querySelector(".about-tabs"),
  aboutSection = document.querySelector(".about-section");
tabsContainer.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("tab-item") &&
    !e.target.classList.contains("active")
  ) {
    tabsContainer.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    const target = e.target.getAttribute("data-target");
    aboutSection
      .querySelector(".tab-content.active")
      .classList.remove("active");
    aboutSection.querySelector(target).classList.add("active");
  }
});
// ---------------- Portfolio Item Details Popup----------------
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-project-btn")) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});

let togglePortfolioPopup = () => {
  document.querySelector(".portfolio-popup").classList.toggle("open");
  document.body.classList.toggle("hide-scrolling");
  document.querySelector(".main").classList.toggle("fade-out");
};
document
  .querySelector(".pp-close")
  .addEventListener("click", togglePortfolioPopup);
// Hide Popup When Clicking Out of Popup Box
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("pp-inner")) {
    togglePortfolioPopup();
  }
});
let portfolioItemDetails = (portfolioItem) => {
  document.querySelector(".pp-thumbnail img").src = portfolioItem.querySelector(
    ".portfolio-item-thumbnail img"
  ).src;
  document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;
  document.querySelector(".pp-body").innerHTML = portfolioItem.querySelector(
    ".portfolio-item-details"
  ).innerHTML;
};

// EMAIL JS

// window.onload = function () {
//   console.log("emailjs");
//   document
//     .getElementById("contact-form")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();
//       // generate a five digit number for the contact_number variable
//       this.contact_number.value = (Math.random() * 100000) | 0;
//       // these IDs from the previous steps
//       emailjs.sendForm("contact_service", "contact_form", this).then(
//         function () {
//           console.log("SUCCESS!");
//         },
//         function (error) {
//           console.log("FAILED...", error);
//         }
//       );
//     });
// };
// FORM VALIDATION
function formValidation(e) {
  e.preventDefault();
  let fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email_id").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;

  if (
    fullname.length < 1 ||
    email.length < 1 ||
    subject.length < 1 ||
    message.length < 1
  ) {
    return;
  } else {
    sendMail();
    document.getElementById("fullname").value = "";
    document.getElementById("email_id").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  }
}
const submitForm = document.getElementById("submitContact");

submitForm.addEventListener("click", formValidation);
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("aPX13V3nyg3Ia5CzL");
})();
function sendMail() {
  console.log("btn clicked");

  var inputs = {
    from_name: document.getElementById("fullname").value,
    email_id: document.getElementById("email_id").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // alert(JSON.stringify(inputs));
  emailjs.send("Azeez9744", "template_ofcp2mm", inputs).then(function (res) {
    console.log(res);
  });
}
