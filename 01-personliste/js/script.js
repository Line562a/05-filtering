const endpoint = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";

const mereinfo = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

document.addEventListener("DOMContentLoaded", start)
let personer;
let filter = "ja";
function start() {
  loadJSON();
}

async function hentData() {
  const respons = await fetch(endpoint, mereinfo);
  const json = await respons.json();
  vis(json);
}

const main = document.querySelector("main");
const template = document.querySelector("template").content;

function vis(json) {
  json.forEach((person) => {
    if (filter == person.troende) {
    const klon = template.cloneNode(true);
    klon.querySelector(".billedlink").src = "img/" + person.billede;
    klon.querySelector(".navn").textContent = person.fornavn;
    klon.querySelector(".email").textContent = person.email;
    klon.querySelector(".titel").textContent = person.titel;
    klon.querySelector(".fødselsdag").textContent = person.fødselsdag.slice(0, 10);
    main.appendChild(klon);
    }
  });
}
hentData();