const container = document.querySelector(".container");
const image = document.querySelector(".image");
const circles = document.querySelectorAll(".circle");

container.addEventListener("click", circleSlide);

function circleSlide(e) {
  circles.forEach(function(circle, index) {
    if(e.target.classList.contains(`c-${index+1}`)) {
      image.src = `images/${index+1}.jpg`;
    }
  })

  if(e.target.classList.contains("circle")) {
    circles.forEach(function(circle) {
      image.animate(
        [{ opacity: "0.1" }, { opacity: "1" }], 
        { duration: 500, fill: "forwards" }
      )
      
      // check class "active"
      if(circle.classList.contains("active")) {
        circle.classList.remove("active");
      }
    })

    // add class "active"
    e.target.classList.add("active");
  }
}