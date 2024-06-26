document.addEventListener("DOMContentLoaded", function () {
  const countUpOptions = {
    duration: 2, // Duration of the count up animation
    useGrouping: true, // Use grouping (1,000 instead of 1000)
    separator: ",", // Separator for thousands
  };

  const countElements = document.querySelectorAll(".count-up");
  countElements.forEach((el) => {
    const count = parseInt(el.getAttribute("data-count"), 10);
    const countUp = new CountUp(el.id, count, countUpOptions);
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  });

  // Toggle navbar collapse
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  navbarToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
  });
});

// Add smooth scrolling to the "Reviews" section
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Add hover effects to the review items
const reviewItems = document.querySelectorAll(".review-item");

reviewItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.transform = "translateY(-10px)";
    item.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.15)";
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = "translateY(0)";
    item.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
  });
});


  function trackMetric(metric) {
    console.log("Metric clicked:", metric);
    // You can add more tracking logic here, such as sending data to an analytics server
  };
