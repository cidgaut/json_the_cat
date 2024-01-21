const request = require('request');

const fetchBreedDescription = (breedname, callback) => {
  const apiUrl = "https://api.thecatapi.com/v1/breeds/search";
  const url = `${apiUrl}?q=${breedname}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);
    const searchTerm = breedname.toLowerCase();
    const breedFound = data.some(breed => breed.id.toLowerCase() === searchTerm || breed.name.toLowerCase() === searchTerm);

    if (breedFound) {
      const description = data[0].description;
      callback(null, description);
    } else {
      callback(null, 'Breed not found');
    }
  });
};

module.exports = { fetchBreedDescription };