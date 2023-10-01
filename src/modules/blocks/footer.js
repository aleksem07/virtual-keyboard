const body = document.querySelector(".page__body");

const footer = document.createElement("footer");
footer.className = "footer";

const p = document.createElement("p");

const githubText = p.cloneNode(true);
githubText.innerHTML = "aleksem07";

const rsschoolText = p.cloneNode(true);
rsschoolText.innerHTML = "RS School 2023";

const link = document.createElement("a");

const linkGithub = link.cloneNode(true);
linkGithub.href = "https://github.com/aleksem07";
const linkRsSchool = link.cloneNode(true);
linkRsSchool.href = "https://rs.school/";

const createFooter = () => {
  body.appendChild(footer);
  footer.appendChild(linkGithub);
  linkGithub.appendChild(githubText);
  footer.appendChild(linkRsSchool);
  linkRsSchool.appendChild(rsschoolText);
};

createFooter();
