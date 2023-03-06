const project = document.querySelector(".projects");
const about = document.querySelector(".about");
const bio = document.querySelector(".bio");

const showProjects = () => {
  window.open('./projects.html', '_self')
};

// observer = new MutationObserver((mutationsList, observer) => {
//   console.log(mutationsList);
// })
// observer.observe(bio, {characterData: false, childList: true, attributes: false})

const bios = ["University of Toronto", "Albert Campbell"];
const changeBio = () => {
  bio.classList.add("pre-animation");
  setTimeout(() => {
    const current = bio.innerText;
    if (bios.indexOf(current) == bios.length - 1) {
      bio.innerHTML = bios[0];
    } else {
      bio.innerHTML = bios[bios.indexOf(current) + 1];
    }
    bio.classList.remove("pre-animation");
  }, 1000);
};

setInterval(changeBio, 5000);
project.addEventListener("click", showProjects);
about.addEventListener("click", showProjects);

