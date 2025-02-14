let rateNumber = document.querySelector(".container.thank .description span");
let ratingItems = document.querySelectorAll(
  ".container ul.rating-items li.rating-item"
);
let submitBtn = document.querySelector(".container button.btn");
let ratingContainer = document.querySelector(".container");
let thankContainer = document.querySelector(".container.thank");

// handle click event for rating items
ratingItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all rating items
    ratingItems.forEach((item) => item.classList.remove("active"));

    //   Add active class for clicked item
    item.classList.add("active");
  });
});

// Handle submit
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Check wather or not rating selected
  if (document.querySelector(".container ul.rating-items li.active") !== null) {
    // Update the rate Number
    rateNumber.innerHTML = document.querySelector(
      ".container ul.rating-items li.active span"
    ).innerHTML;
    //Hide rating Container
    ratingContainer.classList.add("d-none");
    // Show thank Container
    thankContainer.classList.remove("d-none");
  }
});
