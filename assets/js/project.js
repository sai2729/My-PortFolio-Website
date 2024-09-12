AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Android Application for College",
    cardImage: "assets/images/project-page/college_app.jpg",
    description: "A chess engine for a popular game dev engine.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://github.com/sai2729/Android-App-for-College",
    Githublink: "https://github.com/sai2729/Android-App-for-College",
  },
  {
    title: "Results Automation using Selenium",
    cardImage: "assets/images/project-page/selenium.png",
    description: "A quiz app built using basic react.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/sai2729/ResultAutomation-using-Selenium",
  },
  {
    title: "Gesture Controlled Gaming using OpenCV",
    cardImage: "assets/images/project-page/gesture_gaming.png",
    description: "Flappy bird game built using React.js",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/sai2729/Gesture-Controlled-Gaming-Using-OpenCV",
    Githublink: "https://github.com/sai2729/Gesture-Controlled-Gaming-Using-OpenCV",
  },
  {
    title: "Infant Danger Detection using OpenCV",
    cardImage: "assets/images/project-page/infant_danger_detection.jpg",
    description: "Flappy bird game built using React.js",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/sai2729/Infant-Danger-Detection-using-OpenCV",
    Githublink: "https://github.com/sai2729/Infant-Danger-Detection-using-OpenCV",
  },
  {
    title: "Weekly Schedule Manager using Java",
    cardImage: "assets/images/project-page/weeklymanager.png",
    description: "Flappy bird game built using React.js",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/sai2729/weekly-management-system",
    Githublink: "https://github.com/sai2729/weekly-management-system",
  },
  {
    title: "Priest Booking - Android Application",
    cardImage: "assets/images/project-page/priestapp.jpeg",
    description: "",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/priestpp.jpeg",
    Previewlink: "https://github.com/sai2729/Priest-booking-Android-App",
    Githublink: "https://github.com/sai2729/Priest-booking-Android-App",
  },
  {
    title: "Animal Intrusion Detection In Farms using OpenCV",
    cardImage: "assets/images/project-page/animalIntrusion.jpg",
    description: "",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/animalIntrusion.jpeg.jpeg",
    Previewlink: "https://github.com/sai2729/Animal-Intrusion-Detection-in-Farms-using-OpenCV",
    Githublink: "https://github.com/sai2729/Animal-Intrusion-Detection-in-Farms-using-OpenCV",
  },
];

// function for rendering project cards data
const showProjectCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h4 class="title"><a target="_blank" href="${Githublink}">${title}</a></h4>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showProjectCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
