const request = require('request');

const apiUrl = "https://api.thecatapi.com/v1/breeds/search";
const breedToSearch = process.argv[2]; 

const url = `${apiUrl}?q=${breedToSearch}`; 

request(url, (error, response, body) => {
 
  const data = JSON.parse(body); 
  

  const searchTerm = breedToSearch.toLowerCase(); 
  const breedFound = data.some(breed => breed.id.toLowerCase() === searchTerm || breed.name.toLowerCase() === searchTerm);

  if (breedFound) {
    const description = data[0].description;
    console.log('Description:', description);
  } else {
    console.log('Breed not found');
  }

});


/* 
console.logs
body: []
type of body: string
error: null
statusCode: 200
data without command line arg [], data with command line arg sib [{ object filled with all keys and values of sibe}]
type of data object
*/