// START Express REST practices

// END Express REST practices



// console.info("Script added!");
//
// // Array
// const planetNames = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
// console.info("Planet Names: " + planetNames);
//
// // Object
// const planet = {
//     name: "",
//     size: Math.floor(Math.random() * 100 + 1),
//     planetURL: "",
//     imgURL: ""
// };
// console.info("Planet: ", planet);
//
// // Object array
// const planetArray = planetNames.map(name => {
//     return {
//         name: name,
//         size: Math.floor(Math.random() * 100 + 1),
//         planetURL: `pages/planets/${name.toLowerCase()}.html`,
//         imgURL: `images/planets/${name.toLowerCase()}.jpg`
//     }
// });
// console.info("Planets: ", planetArray);
//
// // Some function practices
// function printPlanetNames(input) {
//     console.info(input);
// }
// printPlanetNames("Planet Names with function printPlanetNames: " + planetNames);
//
// const planetsWithSize = function (input) {
//     return input.map(planet => {
//         return {
//             name: planet.name,
//             size: planet.size
//         }
//     })
// };
// console.info("Planets with size planetsWithSize: ", planetsWithSize(planetArray));
//
// const planetsWithSizeArrowFunc = (input) => input.map(planet => {
//     return {
//         name: planet.name,
//         size: planet.size
//     }
// });
// console.info("Planets with size planetsWithSizeArrowFunc: ", planetsWithSizeArrowFunc(planetArray));
//
// const planetsUnder50 = (input) => input.filter(planet => (planet.size < 50));
// console.info("Planets under 50 planetsUnder50: ", planetsUnder50(planetArray));
//
// // Some get element practices
// const planetMercury = document.getElementById("planet-mercury-img");
// console.info(planetMercury);
//
// const imageTags = document.getElementsByTagName("img");
// console.info(imageTags);
//
// const imageClasses = document.getElementsByClassName("img-wrapper");
// console.info(imageClasses);
//
// const imageQuery = document.querySelectorAll(".img-wrapper");
// console.info(imageQuery.classList);
//
// const textTypes = document.querySelectorAll("[type=text]");
// console.info(textTypes);
//
// // Some event practices
// const searchOnPageForm = document.querySelector("#searchOnPage");
// searchOnPageForm.addEventListener('submit', function(e) {
//    e.preventDefault();
//    alert("HAHA No result found!!!")
//    this.reset();
// });
//
// // const headerNavMenu = document.querySelector("#headerNavMenu");
// // const funBtn = document.querySelector("#funBtn");
// // headerNavMenu.addEventListener('click', function() {
// //     alert("navigation bar clicked!!!!");
// // });
// // funBtn.addEventListener('click', function (e) {
// //     alert("fun button clicked!!!!");
// //     e.stopPropagation();
// // });
//
// // async await
// async function fetchImg(name, url) {
//     const img = await fetch(url); //wait for fetch img
//     if (!img.ok) {
//         throw new Error(`HTTP error! status: ${img.status}`);
//     }
//     return [name, img];
// }
// fetchImg("earth", "")
// .then(([name, url]) => {
//     console.info(name, url);
// });
//
// // APIs
// function fetchPeople(url) {
//     const req = new XMLHttpRequest();
//     req.open("GET", url);
//     req.send();
//     req.onloadend = function () {
//         console.info("People: ", req.response);
//     }
// }
// fetchPeople("https://swapi.dev/api/people/1");
//
// fetch("https://swapi.dev/api/people/1")
//     .then(res => {
//         return res.json();
//     })
//     .then(data => {
//         console.info("People 2: ", data);
//     })