console.log("Script added!");

// Array
const planetNames = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
console.log("Planet Names: " + planetNames);

// Object
const planet = {
    name: "",
    size: Math.floor(Math.random() * 100 + 1),
    planetURL: "",
    imgURL: ""
};
console.log("Planet: ", planet);

// Object array
const planets = planetNames.map(name => {
    return {
        name: name,
        size: Math.floor(Math.random() * 100 + 1),
        planetURL: `pages/planets/${name.toLowerCase()}.html`,
        imgURL: `images/planets/${name.toLowerCase()}.jpg`
    }
});
console.log("Planets: ", planets);

// Some function practices
function printPlanetNames(input) {
    console.log(input);
}
printPlanetNames("Planet Names with function printPlanetNames: " + planetNames);

const planetsWithSize = function (input) {
    return input.map(planet => {
        return {
            name: planet.name,
            size: planet.size
        }
    })
};
console.log("Planets with size planetsWithSize: ", planetsWithSize(planets));

const planetsWithSizeArrowFunc = (input) => input.map(planet => {
    return {
        name: planet.name,
        size: planet.size
    }
});
console.log("Planets with size planetsWithSizeArrowFunc: ", planetsWithSizeArrowFunc(planets));

const planetsUnder50 = (input) => input.filter(planet => (planet.size < 50));
console.log("Planets under 50 planetsUnder50: ", planetsUnder50(planets));

// Some get element practices
const planetMercury = document.getElementById("planet-mercury-img");
console.log(planetMercury);

const imageTags = document.getElementsByTagName("img");
console.log(imageTags);

const imageClasses = document.getElementsByClassName("img-wrapper");
console.log(imageClasses);

const imageQuery = document.querySelectorAll(".img-wrapper");
console.log(imageQuery.classList);

const textTypes = document.querySelectorAll("[type=text]");
console.log(textTypes);

// Some event practices
const searchOnPageForm = document.querySelector("#searchOnPage");
searchOnPageForm.addEventListener('submit', function(e) {
   e.preventDefault();
   alert("HAHA No result found!!!")
   this.reset();
});

const headerNavMenu = document.querySelector("#headerNavMenu");
const funBtn = document.querySelector("#funBtn");
headerNavMenu.addEventListener('click', function() {
    alert("navigation bar clicked!!!!");
});
funBtn.addEventListener('click', function (e) {
    alert("fun button clicked!!!!");
    e.stopPropagation();
});

// async await
async function fetchImg(name, url) {
    const img = await fetch(url);
    if (!img.ok) {
        throw new Error(`HTTP error! status: ${img.status}`);
    }
    return [name, img];
}
fetchImg("earth", "")
.then(([name, url]) => {
    console.log(name, url);
});