const features = document.querySelectorAll('.feature');

features.forEach((feature) => {
    feature.addEventListener("click", () => {
      features.forEach((feature) => {
        feature.classList.remove("active-feature");
      });
  
      feature.classList.add("active-feature");
    });
  });

