const endpoint = "https://persongalleri-5d3e.restdb.io/rest/persongalleri";

const mereinfo = {
  headers: {
    "x-apikey": "600fe9211346a1524ff12e31",
  },
};

let personer;
let data;
let filter = "alle";

const header = document.querySelector("h1");
const filterKnapper = document.querySelectorAll("nav button");
filterKnapper.forEach(knap => knap.addEventListener("click", filtrerPersoner));
hentData;

function filtrerPersoner() {
filter = this.dataset.troende;
vis(data);
header.textContent = this.textContent;
}

async function hentData() {
  const respons = await fetch(endpoint, mereinfo);
  data = await respons.json();
  vis(data);
}

function vis() {
const main = document.querySelector("main");
const template = document.querySelector("template").content;
main.textContent = "";

  data.forEach((person) => {
    console.log("Troende", person.troende);
    if (filter == person.troende || filter == "alle") {
    const klon = template.cloneNode(true);
    klon.querySelector(".billedlink").src = "img/" + person.billede;
    klon.querySelector(".navn").textContent = person.fornavn;
    main.appendChild(klon);
    }
  });
}
hentData();