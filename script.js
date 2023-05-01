// Get the search button and input fields
const searchButton = document.getElementById("search-button");
const originInput = document.getElementById("origin-input");
const destInput = document.getElementById("dest-input");

// Add an event listener to the search button
searchButton.addEventListener("click", function() {
  // Get the input values
  const originValue = originInput.value.trim().toLowerCase();
  const destValue = destInput.value.trim().toLowerCase();

  // Get the table body and rows
  const tableBody = document.getElementById("loads-table-body");
  const rows = tableBody.getElementsByTagName("tr");

  // Loop through the rows and hide/show them based on the search criteria
  for (let i = 0; i < rows.length; i++) {
    const origin = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase();
    const dest = rows[i].getElementsByTagName("td")[2].textContent.toLowerCase();

    if (origin.includes(originValue) && dest.includes(destValue)) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
});
