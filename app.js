const ratings = document.querySelectorAll(".ratingNumber");
const submitBtn = document.getElementById("submitBtn");
const rating = document.getElementById("customerRating");
let container = document.getElementById("ratingContainer");
let thankyou = document.getElementById("thankyou");
let customerRating;

submitBtn.addEventListener("click", (event) => {
  if ((container.style.display = "none")) {
    thankyou.style.display = "block";
    rating.textContent = customerRating;
  } else {
    container.style.display = "block";
  }
});

ratings.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    let currentRatingSelected;
    currentRatingSelected = event.target;

    currentRatingSelected.style.backgroundColor = "hsl(217, 12%, 63%)";
    currentRatingSelected.style.color = "white";
    customerRating = currentRatingSelected.textContent;
  });
});
