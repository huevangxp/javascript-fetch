const dataContainer = document.getElementById('data-container');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    // Process the fetched data
    let content = ''; // Build the content to display

    for (const item of data) {
        console.log(item)
      // Example: Assuming data is an array of objects
      content += `<p> name: ${item.name}</p>`;
      content += `<p> username: ${item.username}</p>`;
      content += `<p>phone: ${item.phone}</p>`
    }

    dataContainer.innerHTML = content;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
    // Handle errors (optional: display an error message)
  });