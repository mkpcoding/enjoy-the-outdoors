const mountainsList = document.querySelector("select#mountains-list");
const selectedMountainDiv = document.querySelector("#selected-mountain");
const mountainName = document.querySelector("#mountain-name");
const mountainElevation = document.querySelector("#mountain-elevation");
const mountainEffort = document.querySelector("#mountain-effort");
const mountainImage = document.querySelector("#mountain-image");
const mountainDescription = document.querySelector("#mountain-description");
const mountainCoordinates = document.querySelector("#mountain-coordinates");

function loadMountainsList() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.value = mountain.name;
    option.text = mountain.name;
    mountainsList.appendChild(option);
  }
}

loadMountainsList();

function findMountainByName(name) {
  for (const mountain of mountainsArray) {
    if (mountain.name === name) {
      return mountain;
    }
  }
}

function displaySelectedMountain() {
  const selectedMountainName = mountainsList.value;
  const selectedMountain = findMountainByName(selectedMountainName);

  if (selectedMountain) {
    selectedMountainDiv.style.display = "block";
    mountainName.textContent = selectedMountain.name;
    mountainElevation.textContent = `Elevation`;

    mountainElevation.textContent = `Elevation: ${selectedMountain.elevation} feet`;
    mountainEffort.textContent = `Effort: ${selectedMountain.effort}`;
    mountainImage.src = `images/${selectedMountain.img}`;
    mountainDescription.textContent = selectedMountain.desc;
    mountainCoordinates.textContent = `Coordinates: ${selectedMountain.coords.lat}, ${selectedMountain.coords.lng}`;
  }
}
