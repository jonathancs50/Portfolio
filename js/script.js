console.log("Hello world!");

const myName = "Jonathan Loxton";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// Select all elements with the class 'link'
var links = document.querySelectorAll(".link_function");

// Add a dblclick event listener to each link
links.forEach(function (link) {
  link.addEventListener("click", function (event) {
    // Navigate to the href attribute of the clicked link

    const href = link.getAttribute("href");
    window.open(href);
  });
});

///////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    // console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

//Open a link when button is clicked
document.querySelector(".github_button").addEventListener("click", function () {
  window.open("https://github.com/jonathancs50");
});
document
  .querySelector(".linkedIn_button")
  .addEventListener("click", function () {
    window.open(
      "https://www.linkedin.com/in/jonathan-loxton-1888111bb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0qIhd04AToi5cSSxtKaRfQ%3D%3D"
    );
  });

document
  .getElementById("copyEmailLink")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default mailto action

    // Copy the email to the clipboard
    const email = "jonloxton15@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(function () {
        // Change link text to show it has been copied
        const link = document.getElementById("copyEmailLink");
        const originalText = link.textContent;
        link.textContent = "Email copied!";
        setTimeout(() => (link.textContent = originalText), 2000); // Revert text after 2 seconds
      })
      .catch(function (error) {
        console.error("Failed to copy email: ", error);
      });
  });
