const githubLink = document.createElement("i");
githubLink.id = "github";
githubLink.className = "fab fa-github";

const themeChanger = document.createElement("i");
themeChanger.id = "theme";
themeChanger.className = "fas fa-sun";

const goBack = document.createElement("i");
goBack.id = "back";
goBack.className = "fas fa-door-open";

const navHeader = document.querySelector(".header");
if (document.URL.includes('about') || document.URL.includes('project')) {
  navHeader.appendChild(goBack);
}
navHeader.appendChild(githubLink);
navHeader.appendChild(themeChanger);

function changeTheme() {
  if (themeChanger.className.includes("fa-moon")) {
    themeChanger.classList.replace("fa-moon", "fa-sun");
  } else {
    themeChanger.classList.replace("fa-sun", "fa-moon");
  }
}

const sendToGithub = () => {
  open("https://github.com/yong1le");
};

const sendToHome = () => {
  open("./", "_self");
};

themeChanger.addEventListener("click", changeTheme);
githubLink.addEventListener("click", sendToGithub);
goBack.addEventListener("click", sendToHome);
