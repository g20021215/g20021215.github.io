// Fetch the visitor's IP address and geolocation
fetch('https://ip-api.com/json/')
  .then(response => response.json()) // Parse the API response as JSON
  .then(data => {
    const { lat, lon, city, country } = data; // Extract latitude, longitude, city, and country

    // Initialize the map and set the view to the visitor's location
    const map = L.map('map').setView([lat, lon], 13);

    // Load the tile layer from OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker at the visitor's location
    L.marker([lat, lon]).addTo(map)
      .bindPopup(`You are here: ${city}, ${country}`) // Add a popup with the location info
      .openPopup(); // Open the popup by default
  })
  .catch(err => console.error('Error fetching location data:', err)); // Log any errors
