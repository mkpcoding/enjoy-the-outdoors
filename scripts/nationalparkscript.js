// This function is called when the window has finished loading.
// It's a common place to put setup code, like populating drop-down menus.
window.onload = function () {
  // This code populates two drop-down menus when the page loads.
  populateLocationDropdown();
  populateParkTypeDropdown();
};
nationalParksArray
// This function populates the location dropdown menu.
// It grabs the dropdown element by its ID, then uses the populateDropdown function to populate it.
function populateLocationDropdown() {
  const dropdown = document.getElementById("location");
  populateDropdown(dropdown, locationsArray);
}

// This function populates the park type dropdown menu.
// Like the previous function, it grabs the dropdown by its ID, then populates it.
function populateParkTypeDropdown() {
  const dropdown = document.getElementById("parkType");
  populateDropdown(dropdown, parkTypesArray);
}

// This function populates a given dropdown menu with the values from a given array.
// It creates a new option element for each item in the array, then adds that option to the dropdown.
function populateDropdown(dropdown, dataArr) {
  for (let item of dataArr) {
    let option = document.createElement("option");
    option.value = item;
    option.text = item;
    dropdown.add(option);
  }
}

// This function changes the visibility of two search elements based on the selected search type.
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

// This function filters the array of national parks based on the selected location, then displays the results.
function searchByLocation(value) {
  let results = nationalParksArray.filter((park) => park.State === value);
  displayResults(results);
}

// This function filters the array of national parks based on the selected park type, then displays the results.
function searchByParkType(value) {
  let results = nationalParksArray.filter((park) =>
    park.LocationName.includes(value)
  );
  displayResults(results);
}

// This function displays a list of search results.
// It clears the results table, then populates it with a new row for each result.
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
      let link = document.createElement("a"); //creating html element, which is used to create hyperlinks, also known as anchor links.
      link.href = result.Visit;
      link.textContent = result.Visit; // Display the URL itself as the link text
      link.target = "_blank"; //This comment indicates that the link will open in a new tab when clicked.
      cell8.appendChild(link);
    } else {
      cell8.textContent = "-";
    }

    row.appendChild(cell8);


    resultsTable.appendChild(row);
  }
}