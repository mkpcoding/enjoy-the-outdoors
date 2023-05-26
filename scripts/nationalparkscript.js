window.onload = function () {
  populateLocationDropdown();
  populateParkTypeDropdown();
};

function populateLocationDropdown() {
  const dropdown = document.getElementById("location");
  populateDropdown(dropdown, locationsArray);
}

function populateParkTypeDropdown() {
  const dropdown = document.getElementById("parkType");
  populateDropdown(dropdown, parkTypesArray);
}

function populateDropdown(dropdown, dataArr) {
  for (let item of dataArr) {
    let option = document.createElement("option");
    option.value = item;
    option.text = item;
    dropdown.add(option);
  }
}

function changeSearchType(value) {
  const locationElement = document.querySelector("#searchByLocation");
  const parkTypeElement = document.querySelector("#searchByParkType");

  if (value == "parkType") {
    locationElement.style.display = "none";
    parkTypeElement.style.display = "block";
  } else {
    locationElement.style.display = "block";
    parkTypeElement.style.display = "none";
  }
}

function searchByLocation(value) {
  let results = nationalParksArray.filter((park) => park.State === value);
  displayResults(results);
}

function searchByParkType(value) {
  let results = nationalParksArray.filter((park) =>
    park.LocationName.includes(value)
  );
  displayResults(results);
}

function displayResults(results) {
  var resultsTable = document.getElementById("results-body");
  resultsTable.innerHTML = "";

  let numberCounter = 0; 

  for (let result of results) {
    numberCounter++
    let row = document.createElement("tr");

    let cell1 = document.createElement("td");
    cell1.textContent = numberCounter;
    row.appendChild(cell1);

    let cell2 = document.createElement("td");
    cell2.textContent = result.LocationName;
    row.appendChild(cell2);

    let cell3 = document.createElement("td");
    cell3.textContent = result.Address;
    row.appendChild(cell3);

    let cell4 = document.createElement("td");
    cell4.textContent = result.City;
    row.appendChild(cell4);

    let cell5 = document.createElement("td");
    cell5.textContent = result.State;
    row.appendChild(cell5);

    let cell6 = document.createElement("td");
    cell6.textContent = result.ZipCode;
    row.appendChild(cell6);

    let cell7 = document.createElement("td");
    cell7.textContent = result.Phone;
    row.appendChild(cell7);

    let cell8 = document.createElement("td");
    if (result.Visit) {
      let link = document.createElement("a");
      link.href = result.Visit;
      link.textContent = result.Visit;
      link.target = "_blank";
      cell8.appendChild(link);
    } else {
      cell8.textContent = "-";
    }

    row.appendChild(cell8);

    resultsTable.appendChild(row);
  }
}
