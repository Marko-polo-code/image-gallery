const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const filenames = ["images/pic1.jpg", "images/pic2.jpg", "images/pic3.jpg", "images/pic4.jpg", "images/pic5.jpg"];

/* Declaring the alternative text for each image file */

const altText = {
  "images/pic1.jpg": "Eye",
  "images/pic2.jpg": "Art",
  "images/pic3.jpg": "Flours",
  "images/pic4.jpg": "Egyptian",
  "images/pic5.jpg": "Butterfly"
};
/* Looping through images */

for (const filename of filenames) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', filename);
  newImage.setAttribute('alt', altText[filename]);
  thumbBar.appendChild(newImage);

  newImage.addEventListener("click", function() {
    displayedImage.src = filename;
    displayedImage.alt = altText[filename];
  });

  btn.addEventListener("click", function() {
    if (btn.getAttribute("class") === "dark") {
      // Darken the overlay
      overlay.style.backgroundColor = `rgba(0, 0, 0, 0)`;
      // Change the class and text of the button to "lighten"
      btn.setAttribute("class", "light");
      btn.textContent = "lighten";
    } else {
      // Lighten the overlay
      overlay.style.backgroundColor = `rgba(0, 0, 0, 0.5)`;
      // Change the class and text of the button to "darken"
      btn.setAttribute("class", "dark");
      btn.textContent = "darken";
    }
  });
}

/* Wiring up the Darken/Lighten button */
