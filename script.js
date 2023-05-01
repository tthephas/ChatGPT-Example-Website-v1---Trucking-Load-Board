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

// Get all load ID links
const loadLinks = document.querySelectorAll('.load-link');

// Add click event listener to each load ID link
loadLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // prevent default link behavior

    // Get load ID from data-load-id attribute
    const loadId = link.dataset.loadId;

    // Find the row with the matching load ID
    const loadRow = document.querySelector(`tr td a[data-load-id="${loadId}"]`).parentNode.parentNode;

    // Add a class to the row to show it
    loadRow.classList.add('show-details');

    // Scroll to the row
    loadRow.scrollIntoView();
  });
});


// Get the form and table elements
const form = document.querySelector('#truck-form');
const table = document.querySelector('#truck-table tbody');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting the data and refreshing the page
  event.preventDefault();
  
  // Get the input values
  const origin = document.querySelector('#origin-input').value;
  const destination = document.querySelector('#destination-input').value;
  const equipment = document.querySelector('#equipment-input').value;
  const rate = document.querySelector('#rate-input').value;
  
  // Create a new table row and cells for the input values
  const row = table.insertRow();
  const originCell = row.insertCell(0);
  const destinationCell = row.insertCell(1);
  const equipmentCell = row.insertCell(2);
  const rateCell = row.insertCell(3);
  
 // Set the cell values to the input values
 originCell.textContent = origin;
 destinationCell.textContent = destination;
 equipmentCell.textContent = equipment;
 rateCell.textContent = rate;
 
 // Clear the form inputs
 form.reset();
});
