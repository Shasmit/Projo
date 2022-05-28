// For changing background colour on active
const features = document.querySelectorAll('.feature');

features.forEach((feature) => {
    feature.addEventListener("click", () => {
      features.forEach((feature) => {
        feature.classList.remove("active-feature");
      });
  
      feature.classList.add("active-feature");
    });
  });


//For dropdown menu of boards feature
const dropdownbaords = document.querySelector('.boards');
const boardsOption = document.querySelector('.boards-option');
const profileImage = document.querySelector('.profile-image');
const dropdownIcon = document.querySelector('.icond');

  
  dropdownbaords.addEventListener('click', () => {
    console.log("hi");
    if (boardsOption.style.display == 'none') {
      boardsOption.style.display = 'block';
      dropdownIcon.style.transform = 'rotate(180deg)';
    } else {
      boardsOption.style.display = 'none'
      dropdownIcon.style.transform = 'rotate(0deg)';
    }
    if(profileImage.style.position == 'static'){
      profileImage.style.position = 'relative';
    }
    else{
      profileImage.style.position = 'static';
    }
    
  }
  )
